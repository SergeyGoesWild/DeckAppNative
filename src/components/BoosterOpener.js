import React, { useState, useEffect, useRef } from 'react';
import { View, Modal, Image, Button, StyleSheet, ScrollView, TouchableOpacity, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import { styles } from './../components/styles/BoosterOpenerStyle';
import cardBackImage from '../../assets/cardBackImage.png';
import closeIcon from '../../assets/closeIcon.png';
import revealIcon from '../../assets/skipIcon.png';
import FlipCard from './FlipCard';

const localImage = require('../../assets/wrapperPokemon.png');

const BoosterOpener = ({ cards, logo, symbol }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [boosterVisible, setBoosterVisible] = useState(true);
  const [showFront, setShowFront] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: boosterVisible ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [boosterVisible]);

  const openBooster = () => {
    
    const filterAndSelect = (rarity, number) => {
      const filteredCards = cards.filter(card => card.rarity === rarity && card.category !== "Energy");
      return randomSelection(filteredCards, number);
    };

    let boosterCards = [
      ...filterAndSelect("Rare", 1),
      ...filterAndSelect("Uncommon", 4),
      ...filterAndSelect("Common", 5),
    ];

    setSelectedCards(boosterCards);
    setBoosterVisible(false);
  };

  const handleCloseBooster = () => {
    setModalVisible(false);
    setShowFront(false);
    fadeAnim.setValue(0);
    setBoosterVisible(true);
  };

  const randomSelection = (cards, n) => {
    let result = [];
    let indices = new Set();
    while (result.length < n) {
      let index = Math.floor(Math.random() * cards.length);
      if (!indices.has(index)) {
        indices.add(index);
        result.push(cards[index]);
      }
    }
    return result;
  };

  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    if (cards && cards.length > 0 && cards[0].logo) {
      let url = cards[1].set.logo;
      if (!url.endsWith('.png')) {
        url += '.png';
      }
      setImageURL(url);
    }
  }, [cards]);

  return (
    <View>
      <TouchableOpacity style={styles.openBoosterButton} onPress={() => {
        setModalVisible(true);
        openBooster();
      }}>
        <Text style={styles.openBoosterButtonText}>Open Booster</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setBoosterVisible(true);
          fadeAnim.setValue(0);
        }}
      >
        <ScrollView style={styles.pageContainer}>
          {boosterVisible ? (
            <TouchableOpacity style={styles.boosterContainer} onPress={() => setBoosterVisible(false)}>
              <View>
                <Image source={localImage} style={styles.boosterImage} />
                <View style={styles.overlayContainer}>
                  {imageURL && <Image source={{ uri: imageURL }} style={styles.centerImage} />}
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <Animated.View style={[styles.modalView, { opacity: fadeAnim }]}>
            <View style={styles.cardsContainer}>
                {selectedCards.map((card, index) => (
                <FlipCard key={index} frontSrc={`${card.image}/high.webp`} backSrc={cardBackImage} showFront={showFront} />
                ))}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleCloseBooster}>
                <Image source={closeIcon} style={styles.boutonImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowFront(!showFront)}>
                <Image source={revealIcon} style={styles.boutonImage} />
              </TouchableOpacity>
            </View>
            </Animated.View>
          )}
        </ScrollView>
      </Modal>
    </View>
  );
};

export default BoosterOpener;