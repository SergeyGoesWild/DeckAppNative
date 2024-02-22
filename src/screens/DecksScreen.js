import React, { useState } from "react";
import { FlatList, TouchableOpacity, Text } from "react-native";
import decksData from "../components/DataMock.js";
import DeckDropdown from "../components/DeckDropdown.js";
import AddDeckOverlay from "../components/AddDeckOverlay.js";
import { styles } from "../components/styles/DeckScreen.style.js";

const DecksScreen = () => {
  const [decksState, setDecksState] = useState(decksData);
  const [isVisible, setIsVisible] = useState(false);

  const renderItem = ({ item }) => (
    <DeckDropdown
      key={item.id}
      deck={item}
      removeDeck={removeDeck}
      renameDeck={renameDeck}
    />
  );

  const removeDeck = (id) => {
    const indexRemove = decksState.findIndex((item) => item.id === id);
    const newDecksState = decksState
      .slice(0, indexRemove)
      .concat(decksState.slice(indexRemove + 1));
    setDecksState(newDecksState);
  };

  const renameDeck = (id, newName) => {
    const indexRename = decksState.findIndex((item) => item.id === id);
    decksState[indexRename].name = newName;
    setDecksState(decksState);
  };

  const addDeck = (deck) => {
    const nextDecksState = decksState.concat([deck]);
    setDecksState(nextDecksState);
  };

  const updateDeck = (updatedDeck) => {
    const oldDeckIndex = decksState.findIndex(
      (item) => item.name === updatedDeck.name
    );

    const before = decksState.slice(0, oldDeckIndex);
    const after = decksState.slice(oldDeckIndex + 1);
    const nextState = [...before, updatedDeck, ...after];
    setDecksState(nextState);
  };

  const addCardToDeck = (card, deck) => {
    deck.deckContent.push(card);
    const updatedDeck = deck;

    updateDeck(updatedDeck);
  };

  return (
    <>
      {/* TODO: input + inputState + mv to separate component like <NameForm onSubmit={(data) => addDeck(data)} /> */}
      <AddDeckOverlay
        isVisible={isVisible}
        onModalClose={() => setIsVisible(false)}
        onAddDeckPress={(deck) => {
          addDeck(deck);
          setIsVisible(false);
        }}
      />
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add New Deck</Text>
      </TouchableOpacity>
      <FlatList
        data={decksState}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </>
  );
};

export default DecksScreen;
