import React, { forwardRef } from "react";
import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import * as Colors from "./styles/colors.js";
import { useSharedContext } from "./SharedContext";

const CardContainer = forwardRef(
  ({ cards, handleImageClick, loadMoreCards, onAddCardClick }, ref) => {
    const { updateChosenCard } = useSharedContext();

    return (
      <FlashList
        ref={ref}
        data={cards}
        renderItem={({ item: card }) => (
          <TouchableOpacity
            onPress={() => handleImageClick(card)}
            style={cardContainerStyles.cardContainer}
          >
            <Image
              source={{ uri: card.imageUrl }}
              style={cardContainerStyles.cardImage}
            />
            <TouchableOpacity
              onPress={() => {
                updateChosenCard(card);
                onAddCardClick();
              }}
              style={cardContainerStyles.button}
            >
              <Text style={cardContainerStyles.buttonText}> + </Text>
            </TouchableOpacity>
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
  }
);
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
  button: {
    backgroundColor: Colors.buttonBlue,
    color: Colors.white,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "bold",
    //paddingHorizontal: 20,
  },
});

export default React.memo(CardContainer);
