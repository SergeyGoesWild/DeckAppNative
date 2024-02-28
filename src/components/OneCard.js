import React from "react";
import { ListItem } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";

function OneCard({ name, cardId, deckId, removeCard }) {
  return (
    <TouchableOpacity
      onLongPress={() => {
        removeCard(cardId, deckId);
      }}
    >
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
}

export default OneCard;
