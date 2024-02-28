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
        keyExtractor={(item) => item.id}
        contentContainerStyle={cardContainerStyles.container}
        estimatedItemSize={220}
        numColumns={2}
        onEndReached={loadMoreCards}
        onEndReachedThreshold={0.8}
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
              activeOpacity={0.8}
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
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 5,
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    zIndex: 5,
  },
  button: {
    backgroundColor: Colors.buttonBlue,
    color: Colors.white,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 110,
    height: 40,
    zIndex: 10,
    margin: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default React.memo(CardContainer);
