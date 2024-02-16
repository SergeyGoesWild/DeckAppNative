import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list'; 

const CardContainer = ({ cards, handleImageClick, handleFetchMore }) => {
  return (
    <FlashList
      data={cards}
      renderItem={({ item: card, index }) => (
        <TouchableOpacity key={index} onPress={() => handleImageClick(card)} style={cardContainerStyles.cardContainer}>
          <Image source={{ uri: card.imageUrl }} style={cardContainerStyles.cardImage} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={cardContainerStyles.container}
      estimatedItemSize={220}
      numColumns={2}
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.5} 
      windowSize={1}
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
    width: 35, 
  },
  cardImage: {
    width: '100%',
    height: 200, 
    resizeMode: 'contain',
  },
});

export default CardContainer;