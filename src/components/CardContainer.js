import React, { forwardRef } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list'; 

const CardContainer = forwardRef(({ cards, handleImageClick, loadMoreCards }, ref) => {
  return (
    <FlashList
      ref={ref} 
      data={cards}
      renderItem={({ item: card }) => (
        <TouchableOpacity onPress={() => handleImageClick(card)} style={cardContainerStyles.cardContainer}>
          <Image source={{ uri: card.imageUrl }} style={cardContainerStyles.cardImage} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()} 
      contentContainerStyle={cardContainerStyles.container}
      estimatedItemSize={220}
      numColumns={2}
      onEndReached={loadMoreCards}
      onEndReachedThreshold={0.8}
    />
  );
});
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

export default React.memo(CardContainer);