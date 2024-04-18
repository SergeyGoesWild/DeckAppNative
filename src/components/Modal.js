import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import TabComponent from "./TabComponent";
import * as colors from "./styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

const ModalComponent = ({ visible, closeModal, selectedCard }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        {selectedCard && (
          <TabComponent card={selectedCard} closeModal={closeModal} />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.shadowStrong,
    padding: 20,
  },
  closeButton: {
    backgroundColor: "transparent",
    padding: 10,
    margin: 10,
    borderRadius: 50,
    right: 150,
    borderWidth: 1,
    borderColor: colors.white,
  },
});

export default ModalComponent;
