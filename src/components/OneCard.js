import React from "react";
import { ListItem } from "@rneui/themed";

function OneCard({ name }) {
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}

export default OneCard;
