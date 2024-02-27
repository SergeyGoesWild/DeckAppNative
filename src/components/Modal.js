import React from 'react';
import { Modal, View, StyleSheet, Button } from 'react-native';
import TabComponent from './TabComponent';
import * as colors from './styles/colors'

const ModalComponent = ({ visible, closeModal, selectedCard }) => {
  return (
    <Modal
      animationType="slide"
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
    backgroundColor: colors.shadow,
    padding: 20,
  },
});

export default ModalComponent;
