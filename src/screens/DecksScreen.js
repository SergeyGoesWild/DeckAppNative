import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Colors from "../components/styles/colors";

const DecksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Decks Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.deckScreenBackground,
  },
});

export default DecksScreen;
