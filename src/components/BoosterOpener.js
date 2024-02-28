import React, { useState, useEffect, useRef } from 'react';
import { View, Modal, Image, Button, StyleSheet, ScrollView, TouchableOpacity, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import cardBackImage from '../../assets/cardBackImage.png';
import closeIcon from '../../assets/closeIcon.png';
import revealIcon from '../../assets/skipIcon.png';

const FlipCard = ({ frontSrc, backSrc = cardBackImage, showFront }) => {
  const animatedValue = useRef(new Animated.Value(180)).current; 

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    if (animatedValue._value >= 90) { 
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  useEffect(() => {
    const finalValue = showFront ? 0 : 180; 
    Animated.spring(animatedValue, {
      toValue: finalValue,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  }, [showFront]);

  return (
    <TouchableWithoutFeedback onPress={() => flipCard()}>
      <View>
        <Animated.View style={[styles.card, frontAnimatedStyle, { position: 'absolute' }]}>
          <Image source={{ uri: frontSrc }} style={styles.cardImage} />
        </Animated.View>
        <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
          <Image source={backSrc} style={styles.cardImage} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

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
      <Button title="Open Booster" onPress={() => {
       setModalVisible(true);
       openBooster();
      }} />
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


const styles = StyleSheet.create({
  boosterImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  boosterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100, 
  },
  modalImage: {
    width: '48%',
    height: 100,
    resizeMode: 'contain',
    margin: '1%',
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    width: 150,  
    height: 220,
    margin: 5,   
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  cardImage: {
    width: '108%',  
    height: '100%', 
    resizeMode: 'cover', 
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImage: {
    position: 'absolute',
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    marginTop: 20, 
    marginBottom: 50, 
    gap: 125,
  },
  pageContainer: {
    flex: 1, 
    marginTop: 30, 
  },
  boutonImage: {
    width: 50,
    height: 50,
  },
});

export default BoosterOpener;