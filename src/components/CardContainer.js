import React, { forwardRef, useState } from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import style from "./styles/cardContainerStyles";
import * as Colors from "./styles/colors";
import TabComponent from "./TabComponent";
import ModalComponent from "./Modal";
import { useSharedContext } from "./SharedContext";

const CardContainer = forwardRef(
  ({ cards, handleImageClick, loadMoreCards, onAddCardClick }, ref) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const { updateChosenCard } = useSharedContext();

    const openModal = (card) => {
      setSelectedCard(card);
      setModalVisible(true);
    };

    const closeModal = () => {
      setModalVisible(false);
    };
    return (
      <View style={style.container}>
        <FlashList
          ref={ref}
          data={cards}
          renderItem={({ item: card }) => (
            <TouchableOpacity
              onPress={() => openModal(card)}
              style={style.cardContainer}
            >
              <Image source={{ uri: card.imageUrl }} style={style.cardImage} />
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
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={cardContainerStyles.container}
          estimatedItemSize={220}
          numColumns={2}
          onEndReached={loadMoreCards}
          onEndReachedThreshold={0.8}
        />
        <ModalComponent
          visible={modalVisible}
          closeModal={closeModal}
          selectedCard={selectedCard}
        />
      </View>
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
    //margin: 5,
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
