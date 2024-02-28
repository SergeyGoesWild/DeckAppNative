import React from "react";
import OneCard from "./OneCard";
import { FlatList } from "react-native";

function OneDeckContent({ deckContent, deckId, removeCard }) {
  const renderItem = ({ item }) => (
    <OneCard
      key={item.id}
      name={item.name}
      cardId={item.id}
      deckId={deckId}
      removeCard={removeCard}
    />
  );
  return (
    <>
      <FlatList
        data={deckContent}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </>
  );
}

export default OneDeckContent;
