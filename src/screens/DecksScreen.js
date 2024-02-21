import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Button } from "@rneui/themed";
import decksData from "../components/DataMock.js";
import * as Colors from "../components/styles/colors";
import DeckDropdown from "../components/DeckDropdown.js";
import AddDeckOverlay from "../components/AddDeckOverlay.js";

const DecksScreen = () => {
  const [decksState, setDecksState] = useState(decksData);
  const [visibleState, setVisibleState] = useState(false);

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
        visibleState={visibleState}
        onModalClose={() => setVisibleState(false)}
        onAddDeckPress={(deck) => {
          addDeck(deck);
          setVisibleState(false);
        }}
      />
      <Button title="Add New Deck" onPress={() => setVisibleState(true)} />
      <FlatList
        data={decksState}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  newDeckButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: Colors.buttonBlue,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DecksScreen;
