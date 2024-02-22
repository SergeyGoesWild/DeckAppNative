import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const CardsBySets = ({ route }) => {
  const { setId } = route.params;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`https://api.tcgdex.net/v2/en/sets/${setId}`)
      .then(response => response.json())
      .then(data => {
        setCards(data.cards);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  }, [setId]);
    

  const renderCardItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={{ uri: `${item.image}/low.webp` }} /> 
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cardContainer: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image : {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});

export default CardsBySets;
