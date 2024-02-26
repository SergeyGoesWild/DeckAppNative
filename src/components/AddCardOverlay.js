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
import { styles } from "./styles/AddCardOverlay.style.js";
import ListOfDecks from "./ListOfDecks.js";

function AddCardOverlay({ isVisible, onModalClose }) {
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
              <ListOfDecks />
              <Pressable
                onPress={() => {
                  // TO DO: SEND DATA
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
