import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list'; 
import style from './styles/cardContainerStyles'

const CardContainer = ({ cards, handleImageClick }) => {
  return (
    <FlashList
      data={cards}
      renderItem={({ item: card, index }) => (
        <TouchableOpacity key={index} onPress={() => handleImageClick(card)} style={style.cardContainer}>
          <Image source={{ uri: card.imageUrl }} style={style.cardImage} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={cardContainerStyles.container}
      estimatedItemSize={220}
      numColumns={2} 
    />
  );
};

const cardContainerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});


export default CardContainer;