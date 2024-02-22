import React, { useState } from "react";
import {
  Modal,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles/AddDeckOverlay.style.js";

function AddDeckOverlay({ isVisible, onModalClose, onAddDeckPress }) {
  const [idDeck, setIdDeck] = useState(3);
  const [inputState, setInputState] = useState("");
  const handleChange = (text) => {
    setInputState(text);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        onModalClose();
      }}
    >
      <TouchableWithoutFeedback onPress={onModalClose}>
        <View style={styles.centeredView}>
          <TouchableOpacity activeOpacity={1}>
            <View style={styles.modalView}>
              <Text style={styles.label}>The deck name:</Text>

              <TextInput
                style={styles.input}
                placeholder="Type deck name"
                value={inputState}
                onChangeText={handleChange}
              />

              <Pressable
                onPress={() => {
                  const deck = {
                    id: idDeck,
                    name: inputState,
                    avatar: require("../../assets/psy.png"),
                    deckContent: [],
                  };
                  setIdDeck(idDeck + 1);
                  setInputState("");
                  onAddDeckPress(deck);
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Add</Text>
              </Pressable>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default AddDeckOverlay;
