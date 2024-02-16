import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list';

// Création d'un composant Card pour un élément de la liste
const Card = ({ card, onPress }) => (
  <TouchableOpacity onPress={onPress} style={cardContainerStyles.cardContainer}>
    <Image source={{ uri: card.imageUrl }} style={cardContainerStyles.cardImage} />
  </TouchableOpacity>
);

// Envelopper le composant Card avec React.memo pour éviter les rendus inutiles
const MemoizedCard = React.memo(Card);

const CardContainer = ({ cards, handleImageClick, handleFetchMore }) => {
  return (
    <FlashList
      data={cards}
      renderItem={({ item: card }) => (
        <MemoizedCard card={card} onPress={() => handleImageClick(card)} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={cardContainerStyles.container}
      estimatedItemSize={220}
      numColumns={2}
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.5}
      windowSize={3}
    />
  );
};

const cardContainerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  cardContainer: {
    flex: 1,
    margin: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});

export default CardContainer;
