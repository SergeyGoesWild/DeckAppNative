import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CardsBySets = ({ route }) => {
  const { setId } = route.params;
  const [cards, setCards] = useState([]);
  console.log('LIST', setId)

  useEffect(() => {
    fetch(`https://api.tcgdex.net/v2/en/cards/${setId}`)
      .then(response => response.json())
      .then(data => {
        setCards(data);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  }, [setId]);

  const renderCardItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text>{item.name}</Text>
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
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CardsBySets;
