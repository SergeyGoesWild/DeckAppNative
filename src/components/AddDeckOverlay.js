import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import * as Colors from "../components/styles/colors";

function AddDeckOverlay({ visibleState, onModalClose, onAddDeckPress }) {
  const [idState, setIdState] = useState(3);
  const [inputState, setInputState] = useState("");
  const handleChange = (text) => {
    setInputState(text);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleState}
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
                placeholder="Type here..."
                value={inputState}
                onChangeText={handleChange}
              />

              <Pressable
                onPress={() => {
                  const deck = {
                    id: idState,
                    name: inputState,
                    avatar: require("../../assets/psy.png"),
                    deckContent: [],
                  };
                  setIdState(idState + 1);
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: Colors.buttonBlue,
    color: Colors.white,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: 150,
    borderColor: Colors.plainGrey,
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  label: {
    marginBottom: 15,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default AddDeckOverlay;
