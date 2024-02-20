import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import CardContainer from "../components/CardContainer";
import { useNavigation } from "@react-navigation/native";
import * as Colors from "../components/styles/colors";

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
        .filter((card) => card.image)
        .map((card) => ({
          ...card,
          imageUrl: `${card.image}/low.webp`,
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

  const handleImageClick = (card) => {
    navigation.navigate("FullSizeImage", { card: card.id });
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <CardContainer cards={displayedCards} handleImageClick={handleImageClick} loadMoreCards={loadMoreCards} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default HomeScreen;
