import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Modal, Text, Button } from 'react-native';
import { FlashList } from '@shopify/flash-list'; 
import style from './styles/cardContainerStyles'
import TabComponent from './TabComponent';

const CardContainer = ({ cards, loadMoreCards }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
 <View style={style.CardContainer}>
    <FlashList
      data={cards}
      renderItem={({ item: card }) => (
        <TouchableOpacity onPress={() => openModal(card)} style={style.cardContainer}>
          <Image source={{ uri: card.imageUrl }} style={style.cardImage} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()} 
      contentContainerStyle={cardContainerStyles.container}
      estimatedItemSize={220}
      numColumns={2}
      onEndReached={loadMoreCards}
      onEndReachedThreshold={0.8}
    />
    <Modal
    animationType="fade"
    transparent={false}
    visible={modalVisible}
    onRequestClose={closeModal}
  >
    <View style={styles.modalContainer}>
      <Button title='Close' onPress={closeModal}/>
      {selectedCard && (
        <TabComponent card={selectedCard} />
      )}
    </View>
  </Modal>
</View>
  );
};


const cardContainerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  cardImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
});


export default React.memo(CardContainer);