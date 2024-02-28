import React, { useState, forwardRef } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Modal, Text, Button, Animated } from 'react-native';
import { FlashList } from '@shopify/flash-list'; 
import style from './styles/cardContainerStyles'
import * as colors from './styles/colors'
import TabComponent from './TabComponent';
import ModalComponent from './Modal'

const CardContainer = forwardRef(({ cards, loadMoreCards }, ref) => {
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
    <View style={style.container}>
    <FlashList
     ref={ref} 
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
          <ModalComponent visible={modalVisible} closeModal={closeModal} selectedCard={selectedCard} />
    </View>
  );
});


const cardContainerStyles = StyleSheet.create({
  container: {
  padding: 10,
  },
});

export default React.memo(CardContainer);