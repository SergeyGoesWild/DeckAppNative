import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Image, Button } from 'react-native';
import BoosterOpener from '../components/BoosterOpener';
import { styles } from './../components/styles/CardsBySetsStyle';

const CardsBySets = ({ route }) => {
  const { setId } = route.params;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`https://api.tcgdex.net/v2/en/sets/${setId}`);
        const data = await response.json();
        const enrichedCards = await Promise.all(data.cards.map(fetchCardDetails));
        const cardsWithImages = enrichedCards.filter(card => card.image);
        setCards(cardsWithImages);
      } catch (error) {
        throw new error('Error fetching cards:', error);
      }
    };
    fetchCards();
  }, [setId]);

  const fetchCardDetails = async (card) => {
    try {
      const cardSetId = card.id.split('-')[0];
      const response = await fetch(`https://api.tcgdex.net/v2/en/sets/${cardSetId}/${card.localId}`);
      const cardDetails = await response.json();
      return { ...card, ...cardDetails };
    } catch (error) {
      throw new error('Error fetching card details:', error);
    }
  };

  const renderCardItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={{ uri: `${item.image}/low.webp` }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <BoosterOpener cards={cards} />
      <FlatList
        data={cards}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CardsBySets;