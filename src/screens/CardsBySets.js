import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import * as colors from '../components/styles/colors'

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
        throw new Error(error)
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
    borderBottomColor: colors.plainGrey,
  },
  image : {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});

export default CardsBySets;
