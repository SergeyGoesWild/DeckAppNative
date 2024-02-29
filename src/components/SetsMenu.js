import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/setsMenuStyles'

const SetsMenu = () => {
  const [setsData, setSetsData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://api.tcgdex.net/v2/en/sets')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(set => 
          set.cardCount.total > 20 &&
          (set.logo || set.symbol) &&
          !set.name.includes('Trainer Kit')
        );
        setSetsData(filteredData);
      })
      .catch(error => {
        throw new Error(error)
      });
  }, []);

  const handleSetPress = (setId) => {
    navigation.navigate('CardsBySets', { setId });
  };

  const renderSetItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleSetPress(item.id)}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={setsData}
        renderItem={renderSetItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default SetsMenu;
