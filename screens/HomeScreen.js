import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import CardContainer from "../components/CardContainer";
import * as Colors from "../components/styles/colors";

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        let url = "https://api.tcgdex.net/v2/en/cards";
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
        throw new Error("Error fetching data!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleImageClick = (imageUrl) => {
    navigation.navigate("FullSizeImage", { imageUrl });
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
          imageUrl: `${card.image}/high.webp`,
        }));
      setCards(cardsWithImages);
    } catch (error) {
      throw new Error("Error fetching data!", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <SearchBar
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSearch={handleSearch}
        />
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
    backgroundColor: Colors.backgroundMain,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default HomeScreen;
