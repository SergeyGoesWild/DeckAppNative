import React from 'react';
import { Modal, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import TabComponent from './TabComponent';
import * as colors from './styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalComponent = ({ visible, closeModal, selectedCard }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Icon name="times" size={24} color="black" />
        </TouchableOpacity>
        {selectedCard && (
          <TabComponent card={selectedCard} />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.shadow,
    padding: 20,
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    right: 150,
  },
});

export default ModalComponent;
