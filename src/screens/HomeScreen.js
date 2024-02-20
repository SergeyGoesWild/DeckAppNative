import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import CardContainer from '../components/CardContainer';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allCards, setAllCards] = useState([]); 
  const [displayedCards, setDisplayedCards] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const cardsPerPage = 50; 

  const navigation = useNavigation();

  const fetchAllCards = async () => {
    setLoading(true);
    try {
      let url = "https://api.tcgdex.net/v2/en/cards";
      const response = await fetch(url);
      const data = await response.json();
      const filteredData = data
        .slice(0, 50)
        .filter((card) => card.image)
        .map((card) => ({
          ...card,
          imageUrl: `${card.image}/low.webp`,
          imageUrlHi: `${card.image}/high.webp`,
          details: `https://api.tcgdex.net/v2/en/cards/${card.id}`,
        }));
      setAllCards(filteredData);
      setDisplayedCards(filteredData.slice(0, cardsPerPage)); 
      setOffset(cardsPerPage);
    } catch (error) {
      throw new Error("Error fetching cards:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCards();
  }, []);

  const loadMoreCards = () => {
    const nextCards = allCards.slice(offset, offset + cardsPerPage);
    setDisplayedCards((prevCards) => [...prevCards, ...nextCards]);
    setOffset((prevOffset) => prevOffset + cardsPerPage);
  };

  const handleSearch = (term) => {
    const filteredCards = allCards.filter((card) =>
      card.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchTerm(term);
    setDisplayedCards(filteredCards.slice(0, cardsPerPage));
    setOffset(cardsPerPage);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} details={displayedCards.map(card => card.details)} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <CardContainer cards={displayedCards} loadMoreCards={loadMoreCards} />
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