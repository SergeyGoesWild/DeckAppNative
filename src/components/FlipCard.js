import React, { useRef, useEffect } from 'react';
import { Animated, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import cardBackImage from '../../assets/cardBackImage.png'; // Assurez-vous que le chemin d'accès est correct

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

const styles = StyleSheet.create({
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
  cardBack: {
    position: 'absolute',
  },
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
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
  pageContainer: {
    flex: 1,
    marginTop: 30,
  },
});

export default FlipCard;