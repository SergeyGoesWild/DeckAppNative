import React from "react";
import { View, StyleSheet, Image } from "react-native";
import CardDetails from "../components/CardDetails";
import * as Colors from "../components/styles/colors";

const FullSizeImageScreen = ({ route }) => {
  const { card, imageUrl } = route.params;

  return (
    <View style={styles.container}>
      <CardDetails card={card} image={imageUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fullSizeBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FullSizeImageScreen;
