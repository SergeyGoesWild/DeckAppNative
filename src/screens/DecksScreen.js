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

  const raichu = {
    id: "swsh12-050",
    localId: "050",
    name: "Raichu",
    image: "https://assets.tcgdex.net/en/swsh/swsh12/050",
  };

  const addCardToDeck = (card, deckId) => {
    const idToFind = decksState.findIndex((item) => item.id === deckId);
    const deckToFind = decksState[idToFind];
    card.idNative = card.id;
    card.id = new Date().getTime();
    deckToFind.deckContent = [...deckToFind.deckContent, card];
    updateDeck(deckToFind);
  };

  const removeCard = (cardId, deckId) => {
    const indexDeckToFind = decksState.findIndex((item) => item.id === deckId);
    const deckToFind = decksState[indexDeckToFind];
    const indexCardToFind = deckToFind.findIndex((item) => item.id === cardId);
    const newDeck = deckToFind
      .slice(0, indexCardToFind)
      .concat(decksState.slice(indexCardToFind + 1));
    const newDecksState = decksState
      .slice(0, indexDeckToFind)
      .concat([newDeck])
      .concat(decksState.slice(indexDeckToFind + 1));
    setDecksState(newDecksState);
  };

  const updateDeck = (updatedDeck) => {
    const before = decksState.slice(0, updatedDeck.id);
    const after = decksState.slice(updatedDeck.id + 1);
    const nextState = [...before, updatedDeck, ...after];
    setDecksState(nextState);
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
        onPress={() => addCardToDeck(raichu, 2)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>CARD !!!</Text>
      </TouchableOpacity>
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
