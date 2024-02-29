import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import decksData from "../components/DataMock.js";
import DeckDropdown from "../components/DeckDropdown.js";
import AddDeckOverlay from "../components/AddDeckOverlay.js";
import { styles } from "../components/styles/DeckScreen.style.js";
import { useSharedContext } from "../components/SharedContext";

const DecksScreen = () => {
  const [decksState, setDecksState] = useState(decksData);
  const [isVisible, setIsVisible] = useState(false);
  const { updateContextDeck, chosenCard, chosenDeck, ready, readyOff } =
    useSharedContext();

  useEffect(() => {
    updateContextDeck(decksState);
  }, []);

  useEffect(() => {
    if (ready) {
      addCardToDeck(chosenCard, chosenDeck);
      readyOff();
    }
  }, [ready]);

  const renderItem = ({ item }) => (
    <DeckDropdown
      key={item.id}
      deck={item}
      removeDeck={removeDeck}
      renameDeck={renameDeck}
      removeCard={removeCard}
    />
  );

  const removeDeck = (id) => {
    const indexRemove = decksState.findIndex((item) => item.id === id);
    const newDecksState = decksState
      .slice(0, indexRemove)
      .concat(decksState.slice(indexRemove + 1));
    setDecksState(newDecksState);
    updateContextDeck(newDecksState);
  };

  const renameDeck = (id, newName) => {
    const indexRename = decksState.findIndex((item) => item.id === id);
    decksState[indexRename].name = newName;
    setDecksState(decksState);
    updateContextDeck(decksState);
  };

  const addDeck = (deck) => {
    const nextDecksState = decksState.concat([deck]);
    setDecksState(nextDecksState);
    updateContextDeck(nextDecksState);
  };

  const addCardToDeck = (card, deckId) => {
    const newDecksState = decksState.map((deck) => {
      if (deck.id === deckId) {
        const newCard = { ...card, id: new Date().getTime() };
        const newDeckContent = [...deck.deckContent, newCard];
        return { ...deck, deckContent: newDeckContent };
      }
      return deck;
    });
    setDecksState(newDecksState);
    updateContextDeck(newDecksState);
  };

  const removeCard = (cardId, deckId) => {
    const indexDeckToFind = decksState.findIndex((item) => item.id === deckId);
    const deckToFind = decksState[indexDeckToFind].deckContent;
    const indexCardToFind = deckToFind.findIndex((item) => item.id === cardId);
    const newDeck = deckToFind
      .slice(0, indexCardToFind)
      .concat(deckToFind.slice(indexCardToFind + 1));
    decksState[indexDeckToFind].deckContent = newDeck;
    updateDeck(decksState[indexDeckToFind]);
  };

  const updateDeck = (updatedDeck) => {
    const before = decksState.slice(0, updatedDeck.id);
    const after = decksState.slice(updatedDeck.id + 1);
    const nextState = [...before, updatedDeck, ...after];
    setDecksState(nextState);
    updateContextDeck(nextState);
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default DecksScreen;
