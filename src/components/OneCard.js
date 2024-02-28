import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from './../components/styles/OneCardStyle';

function OneCard({ name, image }) {
  const imageUrl = `${image}/low.webp`;

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

export default OneCard;