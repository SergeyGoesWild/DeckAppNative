import React, { useState } from 'react';
import { View, Modal, Image, Button, StyleSheet, ScrollView } from 'react-native';

const BoosterOpener = ({ cards }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  const ouvrirBooster = () => {
    const filtrerEtSelectionner = (rarity, nombre) => selectionAleatoire(cards.filter(carte => carte.rarity === rarity), nombre);

    let cartesBooster = [
      ...filtrerEtSelectionner("Rare", 2),
      ...filtrerEtSelectionner("Uncommon", 3),
      ...filtrerEtSelectionner("Common", 5),
    ];
    setSelectedCards(cartesBooster);
    setModalVisible(true);
  };

  const selectionAleatoire = (cartes, n) => {
    return cartes.sort(() => 0.5 - Math.random()).slice(0, n);
  };

  return (
    <View>
      <Button title="Ouvrir Booster" onPress={() => { ouvrirBooster(); setModalVisible(true); }} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.cardsContainer}>
              {selectedCards.map((carte, index) => (
                <Image key={index} style={styles.modalImage} source={{ uri: `${carte.image}/high.webp` }} />
              ))}
            </View>
            <Button title="Fermer" onPress={() => setModalVisible(!modalVisible)} />
            {/* Ajout du bouton pour relancer la génération du booster sans fermer le modal */}
            <Button title="Relancer Booster" onPress={ouvrirBooster} />
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalImage: {
    width: '48%', // Ajustez selon la taille désirée, en laissant un peu d'espace entre les images
    height: 100,
    resizeMode: 'contain',
    margin: '1%', // Petit espace autour de chaque image
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    flex: 1, // Prend tout l'espace disponible
    alignItems: "center",
    justifyContent: "center",
  },
  cardsContainer: {
    flexDirection: 'row', // Les éléments sont disposés horizontalement
    flexWrap: 'wrap', // Passe à la ligne automatiquement
    justifyContent: 'space-around', // Répartit l'espace autour des éléments
    marginBottom: 20, // Espace avant le bouton Fermer
  },
});

export default BoosterOpener;