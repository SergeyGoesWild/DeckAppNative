import React from "react";
import { ListItem } from "@rneui/themed";

function OneCard({ name }) {
  return (
    <ListItem bottomDivider>
      {/* <Avatar source={{ uri: item.image }} /> */}
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}

export default OneCard;
