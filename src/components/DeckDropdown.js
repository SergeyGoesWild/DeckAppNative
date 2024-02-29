import React, { useState } from "react";
import OneDeckContent from "../components/OneDeckContent.js";
import { ListItem, Avatar } from "@rneui/themed";
import { TextInput, View, Pressable } from "react-native";
import { styles } from "./styles/DeckDropdown.style.js";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import * as Colors from "./styles/colors.js";

function DeckDropdown({ deck, removeDeck, renameDeck, removeCard }) {
  const [expanded, setExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [deckName, setDeckName] = useState(deck.name);
  const handleChange = (text) => {
    setDeckName(text);
  };

  return (
    <ListItem.Accordion
      content={
        <>
          <Avatar
            rounded
            source={deck.avatar}
            avatarStyle={{
              resizeMode: "contain",
              width: "auto",
              height: "auto",
            }}
            containerStyle={{ paddingRight: 10 }}
          />

          <ListItem.Content>
            {!editMode && <ListItem.Title>{deck.name}</ListItem.Title>}
            {editMode && (
              <View style={styles.editContainer}>
                <TextInput
                  placeholder="Enter new name"
                  value={deckName}
                  style={styles.input}
                  onChangeText={handleChange}
                />
                <Pressable
                  style={styles.buttonOk}
                  onPress={() => {
                    setEditMode(false);
                    renameDeck(deck.id, deckName);
                  }}
                >
                  <AntDesign
                    name="checkcircleo"
                    size={20}
                    color={Colors.white}
                  />
                </Pressable>
                <Pressable
                  style={styles.buttonDel}
                  onPress={() => {
                    removeDeck(deck.id);
                    setEditMode(false);
                  }}
                >
                  <Ionicons
                    name="trash-bin-outline"
                    size={22}
                    color={Colors.white}
                  />
                </Pressable>
              </View>
            )}
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
      onLongPress={() => {
        setEditMode(true);
      }}
    >
      <OneDeckContent
        deckContent={deck.deckContent}
        deckId={deck.id}
        removeCard={removeCard}
      />
    </ListItem.Accordion>
  );
}

export default DeckDropdown;
