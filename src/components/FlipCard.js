import React, { useRef, useEffect } from 'react';
import { View, Animated, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import cardBackImage from '../../assets/cardBackImage.png';
import { styles } from './../components/styles/FlipCardStyle';

const FlipCard = ({ frontSrc, backSrc = cardBackImage, showFront }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const frontAnimatedStyle = {
    transform: [
      { rotateY: animatedValue.interpolate({ inputRange: [0, 180], outputRange: ['0deg', '180deg'] }) },
    ],
  };

  const backAnimatedStyle = {
    transform: [
      { rotateY: animatedValue.interpolate({ inputRange: [0, 180], outputRange: ['180deg', '360deg'] }) },
    ],
  };

  useEffect(() => {
    flipToInitialSide();
  }, [showFront]);

  const flipCard = () => {
    if (showFront) {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  const flipToInitialSide = () => {
    const finalValue = showFront ? 0 : 180;
    Animated.spring(animatedValue, {
      toValue: finalValue,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={() => flipCard()}>
    <View style={styles.flipCardContainer}>
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

export default FlipCard;