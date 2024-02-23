import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button, Modal } from 'react-native';

const CardsBySets = ({ route }) => {
  const { setId } = route.params;
  const [cards, setCards] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    fetch(`https://api.tcgdex.net/v2/en/sets/${setId}`)
      .then(response => response.json())
      .then(data => {
        setCards(data.cards);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  }, [setId]);

  const ouvrirBooster = () => {
    let cartesBooster = [];
    for (let i = 0; i < 5; i++) { // Supposons 5 cartes par booster
      const carteAleatoire = cards[Math.floor(Math.random() * cards.length)];
      cartesBooster.push(carteAleatoire);
    }
    setSelectedCards(cartesBooster);
    setModalVisible(true);
  };

  const renderCardItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={{ uri: `${item.image}/low.webp` }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Button title="Ouvrir Booster" onPress={ouvrirBooster} />
      </View>
      <FlatList
        data={cards}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedCards.map((carte, index) => (
              <Image key={index} style={styles.modalImage} source={{ uri: `${carte.image}/high.webp` }} />
            ))}
            <Button title="Fermer" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cardContainer: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});

export default CardsBySets;