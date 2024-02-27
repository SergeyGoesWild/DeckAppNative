import React, { useState } from "react";
import {
  Modal,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles/AddCardOverlay.style.js";
import ListOfDecks from "./ListOfDecks.js";
import { useSharedContext } from "./SharedContext";

function AddCardOverlay({ isVisible, onModalClose }) {
  const { updateChosenDeck } = useSharedContext();
  const [valueFromList, setValueFromList] = useState("");
  const handleChange = (newValue) => {
    setValueFromList(newValue);
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
              <Text style={styles.label}>Adding to:</Text>
              <ListOfDecks getValue={handleChange} />
              <Pressable
                onPress={() => {
                  updateChosenDeck(valueFromList);
                  onModalClose();
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

export default AddCardOverlay;
