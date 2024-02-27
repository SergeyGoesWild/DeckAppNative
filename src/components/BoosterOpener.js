import React, { useState, useEffect, useRef } from 'react';
import { View, Modal, Image, Button, StyleSheet, ScrollView, TouchableOpacity, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import cardBackImage from '../../assets/cardBackImage.png'; // Assurez-vous que le chemin est correct

const FlipCard = ({ frontSrc, backSrc }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  let value = 0;

  animatedValue.addListener(({ value }) => {
    value = value;
  });

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    if (value >= 90) {
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

  return (
    <TouchableWithoutFeedback onPress={() => flipCard()}>
      <View>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <Image source={{ uri: frontSrc }} style={styles.cardImage} />
        </Animated.View>
        <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle, { position: 'absolute' }]}>
          <Image source={backSrc} style={styles.cardImage} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const BoosterOpener = ({ cards, logo, symbol }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);
  const [boosterVisible, setBoosterVisible] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial fade animation value

  useEffect(() => {
    // Animate booster or cards visibility changes
    Animated.timing(fadeAnim, {
      toValue: boosterVisible ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [boosterVisible]);

  const ouvrirBooster = () => {
    const filtrerEtSelectionner = (rarity, nombre) => selectionAleatoire(cards.filter(carte => carte.rarity === rarity && carte.category !== "Energy"), nombre);

    let cartesBooster = [
      ...filtrerEtSelectionner("Rare", 2),
      ...filtrerEtSelectionner("Uncommon", 3),
      ...filtrerEtSelectionner("Common", 5),
    ];
    setSelectedCards(cartesBooster);
    setBoosterVisible(false);
  };

  const selectionAleatoire = (cartes, n) => {
    let result = [];
    let indices = [];
    while (result.length < n) {
      let index = Math.floor(Math.random() * cartes.length);
      if (!indices.includes(index)) {
        indices.push(index);
        result.push(cartes[index]);
      }
    }
    return result;
  };

  const logoURL = logo ? `${logo}.webp` : `${symbol}.webp`;

  return (
    <View>
      <Button title="Ouvrir Booster" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setBoosterVisible(true); // Réinitialiser pour montrer le booster à la prochaine ouverture
          fadeAnim.setValue(0); // Reset animation
        }}
      >
        <ScrollView style={styles.centeredView}>
          {boosterVisible ? (
            <TouchableOpacity style={styles.boosterContainer} onPress={ouvrirBooster}>
              <Animated.Image style={[styles.boosterImage, { opacity: fadeAnim }]} source={{ uri: logoURL }} />
              <Text>Tap to Open</Text>
            </TouchableOpacity>
          ) : (
            <Animated.View style={[styles.modalView, { opacity: fadeAnim }]}>
              <View style={styles.cardsContainer}>
                {selectedCards.map((carte, index) => (
                  <FlipCard key={index} frontSrc={`${carte.image}/high.webp`} backSrc={cardBackImage} />
                ))}
              </View>
              <Button title="Fermer" onPress={() => setModalVisible(!modalVisible)} />
              <Button title="Relancer Booster" onPress={() => {
                ouvrirBooster();
                setBoosterVisible(true);
                setModalVisible(false);
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
    width: '100%',  // Assure que l'image couvre toute la largeur de la carte
    height: '100%', // Assure que l'image couvre toute la hauteur de la carte
    resizeMode: 'contain', // Assure que l'image de la carte soit contenue dans les limites de la carte sans être déformée
  },
});

export default BoosterOpener;
