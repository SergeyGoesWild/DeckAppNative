import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import style from "./styles/tabModalStyles";

const TabComponent = ({ card, closeModal }) => {
  return (
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={style.container}>
        <Image source={{ uri: card.imageUrlHi }} style={style.cardImage} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabComponent;
