import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import CardContainer from '../components/CardContainer';
import NavBar from '../components/NavBar';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allCards, setAllCards] = useState([]); // Store all cards here
  const [displayedCards, setDisplayedCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Adjust this based on your preference
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const url = 'https://api.tcgdex.net/v2/en/cards';
        const response = await fetch(url);
        const data = await response.json();
        const filteredData = data.filter(card => card.image).map(card => ({
          ...card,
          imageUrl: `${card.image}/low.webp`,
        }));
        setAllCards(filteredData);
        setDisplayedCards(filteredData.slice(0, itemsPerPage));
        if (data.length <= itemsPerPage) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [itemsPerPage]);

  const fetchMoreCards = () => {
    if (!hasMore) return;

    const nextPage = currentPage + 1;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const nextItems = allCards.slice(startIndex, endIndex);
    setDisplayedCards(prevCards => [...prevCards, ...nextItems]);
    setCurrentPage(nextPage);

    if (endIndex >= allCards.length) {
      setHasMore(false);
    }
  };

  const handleImageClick = (card) => {
    navigation.navigate('FullSizeImage', { card: card.id });
  };

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    try {
      const filteredData = allCards.filter(card => card.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setDisplayedCards(filteredData.slice(0, itemsPerPage));
      setCurrentPage(1);
      setHasMore(filteredData.length > itemsPerPage);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <NavBar navigation={navigation} />
        <SearchBar value={searchTerm} onChangeText={setSearchTerm} onSearch={() => handleSearch(searchTerm)} />
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <CardContainer cards={displayedCards} handleImageClick={handleImageClick} handleFetchMore={fetchMoreCards} loading={loading} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default HomeScreen;
