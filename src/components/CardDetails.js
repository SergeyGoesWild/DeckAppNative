import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as Colors from "../components/styles/colors";

const CardDetails = ({ card }) => {
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCardDetails = async () => {
      setLoading(true);
      try {
        const url = `https://api.tcgdex.net/v2/en/cards/${card}`;
        const response = await fetch(url);
        const data = await response.json();
        setCardDetails(data);
      } catch (error) {
        throw new Error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, [card]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text> Still loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {cardDetails ? (
        <>
          <Text>{cardDetails.name}</Text>
          <Text>{cardDetails.set.name}</Text>
          <Text>{cardDetails.rarity}</Text>
          <Text>{cardDetails.types}</Text>
          <Text>{cardDetails.description}</Text>
          <Image
            source={{ uri: `${cardDetails.image}/high.webp` }}
            style={styles.image}
          />
        </>
      ) : (
        <Text>No details available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "center",
    height: "100%",
  },
});

export default CardDetails;
