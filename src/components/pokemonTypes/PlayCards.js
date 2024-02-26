import React, { useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import * as Animatable from "react-native-animatable";

const PlayCards = ({ type, onPress }) => {

  const costTypeImages = {
    Colorless: require('../../../assets/colorless.png'),
    Psychic: require('../../../assets/psychic.png'),
    Fire: require('../../../assets/fire.png'),
    Grass: require('../../../assets/grass.png'),
    Fairy: require('../../../assets/fairy.png'),
    Fighting: require('../../../assets/fighting.png'),
    Metal: require('../../../assets/metal.png'),
    Dragon: require('../../../assets/dragon.png'),
    Water: require('../../../assets/water.png'),
    Dark: require('../../../assets/dark.png'),
  };

  const renderCostImage = (costType) => {
    const imageUrl = costTypeImages[costType];
    if (imageUrl) {
      return <Image style={{ height: 60, width: 60, resizeMode: 'cover' }} source={imageUrl} />;
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

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 5,
    shadowColor: 'black', 
  },
  buttonText: {
    fontSize: 18,
  },
});

export default PlayCards;
