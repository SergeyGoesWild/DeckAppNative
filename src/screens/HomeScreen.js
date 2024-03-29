import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import CardContainer from "../components/CardContainer";
import { useNavigation } from "@react-navigation/native";
import * as Colors from "../components/styles/colors";
import AddCardOverlay from "../components/AddCardOverlay";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const cardsPerPage = 50;
  const flashListRef = useRef(null);
  const [popUpVisible, setPopUpVisible] = useState(false);
  const navigation = useNavigation();

  const fetchAllCards = async () => {
    setLoading(true);
    try {
      let url = "https://api.tcgdex.net/v2/en/cards";
      const response = await fetch(url);
      const data = await response.json();
      const filteredData = data
        .filter((card) => card.image)
        .map((card) => ({
          ...card,
          imageUrl: `${card.image}/low.webp`,
          imageUrlHi: `${card.image}/high.webp`,
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
    if (flashListRef.current) {
      flashListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  const handleImageClick = (card) => {
    navigation.navigate("FullSizeImage", { card: card.id });
  };

  const onAddCardClick = () => {
    setPopUpVisible(true);
  };
  return (
    <View style={styles.container}>
      <AddCardOverlay
        isVisible={popUpVisible}
        onModalClose={() => setPopUpVisible(false)}
      />

      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <CardContainer
          ref={flashListRef}
          cards={displayedCards}
          handleImageClick={handleImageClick}
          loadMoreCards={loadMoreCards}
          onAddCardClick={onAddCardClick}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default HomeScreen;
