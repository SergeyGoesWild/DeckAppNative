import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";

const CardContainer = ({ cards, handleImageClick }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleImageClick(item.imageUrl)}
      style={cardContainerStyles.cardContainer}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={cardContainerStyles.cardImage}
      />
    </TouchableOpacity>
  );

  return (
    <FlashList
      data={cards}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={cardContainerStyles.container}
      estimatedItemSize={220}
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
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
});

export default CardContainer;
