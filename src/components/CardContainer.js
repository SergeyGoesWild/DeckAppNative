import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Modal, Text, Button, Animated } from 'react-native';
import { FlashList } from '@shopify/flash-list'; 
import style from './styles/cardContainerStyles'
import TabComponent from './TabComponent';
import ModalComponent from './Modal'

const CardContainer = ({ cards, loadMoreCards }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const fadeAnim = new Animated.Value(0);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const openModal = (card) => {
    setSelectedCard(card);
    setModalVisible(true);
  };
  console.log(modalVisible)

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderModal = () => {
    return (
      <View style={styles.modalContainer}>
        <Button title='Close' onPress={closeModal}/>
        {selectedCard && (
          <TabComponent card={selectedCard} />
        )}
      </View>
    );
  };

  return (
    <FlashList
      data={cards}
      renderItem={({ item: card }) => (
        <TouchableOpacity onPress={() => openModal(card)} style={style.cardContainer}>
          <Image source={{ uri: card.imageUrl }} style={style.cardImage} />
          <ModalComponent visible={modalVisible} closeModal={closeModal} selectedCard={selectedCard} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()} 
      contentContainerStyle={cardContainerStyles.container}
      estimatedItemSize={220}
      numColumns={2}
      onEndReached={loadMoreCards}
      onEndReachedThreshold={0.8}
    />
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
    elevation: 4,
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