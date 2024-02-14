import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const CardContainer = ({ cards, handleImageClick }) => {
  return (
    <ScrollView contentContainerStyle={cardContainerStyles.container}>
      {cards.map((card, index) => (
        <TouchableOpacity key={index} onPress={() => handleImageClick(card)}>
          <View style={cardContainerStyles.cardContainer}>
            <Text>{card.name}</Text>
            <Image source={{ uri: card.imageUrl }} style={cardContainerStyles.cardImage} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const cardContainerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  cardImage: {
    width: 200,
    height: 200,
  },
});

export default CardContainer;
