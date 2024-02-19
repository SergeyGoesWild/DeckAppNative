import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Icon, Button, Avatar } from "@rneui/themed";
import decksData from "../components/DataMock.js";
import * as Colors from "../components/styles/colors";
import DeckDropdown from "../components/DeckDropdown.js";
import AddDeckOverlay from "../components/AddDeckOverlay.js";

const DecksScreen = () => {
  const [decksState, setDecksState] = useState(decksData);
  const [visibleState, setVisibleState] = useState(false);

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
        setVisibleState={setVisibleState}
      />
      <Button title="ADD" onPress={() => setVisibleState(!visibleState)} />
      {decksState.map((deck, i) => (
        <DeckDropdown key={i} deck={deck} />
      ))}
    </>
  );
};

export default DecksScreen;
