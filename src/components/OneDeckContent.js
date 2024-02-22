import React from "react";
import OneCard from "./OneCard";
import { FlatList } from "react-native";

function OneDeckContent({ deckContent }) {
  const renderItem = ({ item }) => <OneCard key={item.id} name={item.name} />;
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
