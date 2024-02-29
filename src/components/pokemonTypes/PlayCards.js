import React, { useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import * as Animatable from "react-native-animatable";
import { costTypeImages } from '../imageData';
import styles from '../pokemonTypes/playStyles'

const PlayCards = ({ type, onPress }) => {

  const renderCostImage = (costType) => {
    const imageUrl = costTypeImages[costType];
    if (imageUrl) {
      return <Image style={styles.renderCost} source={imageUrl} />;
    }
    return null;
  };

  const viewRef = useRef(null);

  return (
    <View>
      <Animatable.View ref={viewRef} animation="wobble" useNativeDriver={true}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onPress(type);
            viewRef.current.wobble(1000);
          }}
        >
          {renderCostImage(type)}
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};



export default PlayCards;
