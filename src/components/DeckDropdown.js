import React, { useState } from "react";
import OneDeckContent from "../components/OneDeckContent.js";
import { ListItem, Avatar } from "@rneui/themed";

function DeckDropdown({ deck }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ListItem.Accordion
      key={deck.name}
      content={
        <>
          <Avatar
            rounded
            source={deck.avatar}
            avatarStyle={{ resizeMode: "cover", width: "auto", height: "auto" }}
            containerStyle={{ paddingRight: 10 }}
          />

          <ListItem.Content>
            <ListItem.Title>{deck.name}</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      <OneDeckContent deckContent={deck.deckContent} />
    </ListItem.Accordion>
  );
}

export default DeckDropdown;
