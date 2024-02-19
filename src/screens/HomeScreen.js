import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import CardContainer from "../components/CardContainer";
import { useNavigation } from "@react-navigation/native";
import * as Colors from "../components/styles/colors";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const navigation = useNavigation();
  const cardsLimit = 200;
  const fetchIncrement = 50;

  const fetchCards = async (newOffset = 0, newSearchTerm = "") => {
    if (cards.length >= cardsLimit) return;
    setLoading(true);
    try {
      let url = "https://api.tcgdex.net/v2/en/cards";
      if (newSearchTerm) {
        url += `?name=${newSearchTerm}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      const nextCards = data
        .slice(newOffset, newOffset + fetchIncrement)
        .filter((card) => card.image)
        .map((card) => ({
          ...card,
          imageUrl: `${card.image}/high.webp`,
        }));
      setCards((prevCards) => (newOffset === 0 ? [...nextCards] : [...prevCards, ...nextCards]));
      setOffset((prevOffset) => prevOffset + fetchIncrement);
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards(0, searchTerm);
  }, [searchTerm]);

  const loadMoreCards = () => {
    fetchCards(offset, searchTerm);
  };

  const handleImageClick = (card) => {
    navigation.navigate("FullSizeImage", { card: card.id });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      onScroll={({ nativeEvent }) => {
        if (
          nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
          nativeEvent.contentSize.height * 0.5
        ) {
          loadMoreCards();
        }
      }}
      scrollEventThrottle={400}
    >
      <View style={styles.container}>
        <SearchBar onSearch={(term) => {
          setSearchTerm(term);
          setOffset(0); // Reset offset on new search
        }} />
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <CardContainer cards={cards} handleImageClick={handleImageClick} />
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
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default HomeScreen;

