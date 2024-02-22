import React, { useState } from "react";
import OneDeckContent from "../components/OneDeckContent.js";
import { ListItem, Avatar } from "@rneui/themed";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import * as Colors from "../components/styles/colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";

function DeckDropdown({ deck, removeDeck, renameDeck }) {
  const [expanded, setExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [deckName, setDeckName] = useState(deck.name);
  const handleChange = (text) => {
    console.log(text);
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
                  placeholder="Type here..."
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
      <OneDeckContent deckContent={deck.deckContent} />
    </ListItem.Accordion>
  );
}

const styles = StyleSheet.create({
  editContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonOk: {
    backgroundColor: Colors.green,
    color: Colors.white,
    width: 50,
    marginHorizontal: 5,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
  buttonDel: {
    backgroundColor: Colors.red,
    color: Colors.white,
    width: 50,
    marginHorizontal: 5,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "normal",
    paddingHorizontal: 15,
  },
  input: {
    height: 30,
    width: 150,
    borderColor: Colors.plainGrey,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: Colors.white,
    marginRight: 5,
  },
});

export default DeckDropdown;
