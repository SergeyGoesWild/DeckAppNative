import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import CardContainer from "../components/CardContainer";
import NavBar from "../components/NavBar";
import { useNavigation } from "@react-navigation/native";
import * as Colors from "../components/styles/colors";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchCards = async () => {
    setLoading(true);
    try {
      const url = "https://api.tcgdex.net/v2/en/cards";
      const response = await fetch(url);
      const data = await response.json();
      const cardsWithImages = data
        .slice(0, 50)
        .filter((card) => card.image)
        .map((card) => ({
          ...card,
          imageUrl: `${card.image}/high.webp`,
        }));
      setCards(cardsWithImages);
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleImageClick = (card) => {
    navigation.navigate("FullSizeImage", { card: card.id });
  };

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    try {
      let url = "https://api.tcgdex.net/v2/en/cards";
      if (searchTerm) {
        url += `?name=${searchTerm}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      const cardsWithImages = data
        .slice(0, 50)
        .filter((card) => card.image)
        .map((card) => ({
          ...card,
          imageUrl: `${card.image}/low.webp`,
        }));
      setCards(cardsWithImages);
    } catch (error) {
      console.error("Error searching cards:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch} />
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
