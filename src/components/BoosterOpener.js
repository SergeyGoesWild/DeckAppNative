import React, { useState, useEffect, useRef } from 'react';
import { View, Modal, Image, Button, StyleSheet, ScrollView, TouchableOpacity, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import cardBackImage from '../../assets/cardBackImage.png'; // Assurez-vous que le chemin est correct

const FlipCard = ({ frontSrc, backSrc = cardBackImage, showFront }) => {
  const animatedValue = useRef(new Animated.Value(180)).current; // Commence avec le dos visible

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    if (animatedValue._value >= 90) { // Utilisez _value pour accéder à la valeur actuelle
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
    const finalValue = showFront ? 0 : 180; // 0 pour montrer le devant, 180 pour le derrière
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

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial fade animation value

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: boosterVisible ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [boosterVisible]);

  const ouvrirBooster = () => {
    
    const filtrerEtSelectionner = (rarity, nombre) => {
      const cartesFiltrees = cards.filter(carte => carte.rarity === rarity && carte.category !== "Energy");
      return selectionAleatoire(cartesFiltrees, nombre);
    };

    let cartesBooster = [
      ...filtrerEtSelectionner("Rare", 2),
      ...filtrerEtSelectionner("Uncommon", 3),
      ...filtrerEtSelectionner("Common", 5),
    ];

    console.log("Cartes sélectionnées pour le booster :", cartesBooster);

    setSelectedCards(cartesBooster);
    setBoosterVisible(false);
  };

  const selectionAleatoire = (cartes, n) => {
    let result = [];
    let indices = new Set(); // Utiliser un Set pour éviter les doublons d'indices
    while (result.length < n) {
      let index = Math.floor(Math.random() * cartes.length);
      if (!indices.has(index)) {
        indices.add(index);
        result.push(cartes[index]);
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
    } else {
      
    }
  }, [cards]);

  return (
    <View>
      <Button title="Ouvrir Booster" onPress={() => {
       setModalVisible(true);
       ouvrirBooster(); // Générer le booster dès l'ouverture du modal
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
        <ScrollView style={styles.centeredView}>
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
                {selectedCards.map((carte, index) => (
                  <FlipCard key={index} frontSrc={`${carte.image}/high.webp`} backSrc={cardBackImage} showFront={showFront} />
                ))}
              </View>
              <Button title="Fermer" onPress={() => setModalVisible(!modalVisible)} />
              <Button title="Montrer les Faces" onPress={() => setShowFront(!showFront)} />
              <Button title="Relancer Booster" onPress={() => {
                ouvrirBooster();
                setBoosterVisible(true);
                setModalVisible(false);
                setShowFront(false);
                fadeAnim.setValue(0); // Reset animation for next booster
              }} />
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
    marginTop: 100, // Ajustez selon vos besoins
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
    width: 150,  // Largeur de la carte
    height: 220, // Hauteur de la carte
    margin: 5,   // Marge autour de la carte
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  cardImage: {
    width: '108%',  // Assure que l'image couvre toute la largeur de la carte
    height: '100%', // Assure que l'image couvre toute la hauteur de la carte
    resizeMode: 'cover', // Assure que l'image de la carte soit contenue dans les limites de la carte sans être déformée
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
    width: 100, // Ajustez selon vos besoins
    height: 100, // Ajustez selon vos besoins
    resizeMode: 'contain',
  },
});

export default BoosterOpener;