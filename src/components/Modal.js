import React from 'react';
import { Modal, View, StyleSheet, Button } from 'react-native';
import TabComponent from './TabComponent';

const ModalComponent = ({ visible, closeModal, selectedCard }) => {
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <Button title='Close' onPress={closeModal}/>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
});

export default ModalComponent;
