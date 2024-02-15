<<<<<<< HEAD:screens/HomeScreen.js
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import CardContainer from "../components/CardContainer";
import * as Colors from "../components/styles/colors";

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
=======
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import CardContainer from '../components/CardContainer';
import NavBar from '../components/NavBar';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
>>>>>>> dev:src/screens/HomeScreen.js
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()

  const fetchCards = async () => {
      setLoading(true);
      try {
<<<<<<< HEAD:screens/HomeScreen.js
        let url = "https://api.tcgdex.net/v2/en/cards";
=======
        const url = 'https://api.tcgdex.net/v2/en/cards';
>>>>>>> dev:src/screens/HomeScreen.js
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
<<<<<<< HEAD:screens/HomeScreen.js
        throw new Error("Error fetching data!", error);
=======
        throw new Error(e)
>>>>>>> dev:src/screens/HomeScreen.js
      } finally {
        setLoading(false);
      }
    };
<<<<<<< HEAD:screens/HomeScreen.js

    fetchCards();
  }, []);

  const handleImageClick = (imageUrl) => {
    navigation.navigate("FullSizeImage", { imageUrl });
=======
  
    useEffect(() => {
      fetchCards();
    }, []);

  const handleImageClick = (card) => {
    navigation.navigate('FullSizeImage', { card: card.id });
>>>>>>> dev:src/screens/HomeScreen.js
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
<<<<<<< HEAD:screens/HomeScreen.js
      throw new Error("Error fetching data!", error);
=======
      throw new Error(e)
>>>>>>> dev:src/screens/HomeScreen.js
    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD:screens/HomeScreen.js
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <SearchBar
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSearch={handleSearch}
        />
=======
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
      <NavBar navigation={navigation} />
        <SearchBar value={searchTerm} onChangeText={setSearchTerm} onSearch={handleSearch} />
>>>>>>> dev:src/screens/HomeScreen.js
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
