import React, { useState } from "react";
import {
  Modal,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./styles/AddDeckOverlay.style.js";

function AddDeckOverlay({ isVisible, onModalClose, onAddDeckPress }) {
  const [idDeck, setIdDeck] = useState(3);
  const [inputState, setInputState] = useState("");
  const handleChange = (text) => {
    setInputState(text);
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          onModalClose();
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={styles.overlay}>
            <TouchableWithoutFeedback onPress={() => onModalClose()}>
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
                          avatar: require("../../assets/poke_ball.jpg"),
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
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

export default AddDeckOverlay;
