import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const FullSizeImageScreen = ({ route }) => {
  const { imageUrl } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.fullSizeImage} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullSizeImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default FullSizeImageScreen;
