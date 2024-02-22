import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SetsMenu = () => {
  const [setsData, setSetsData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://api.tcgdex.net/v2/en/sets')
      .then(response => response.json())
      .then(data => {
        setSetsData(data);
      })
      .catch(error => {
        console.error('Error fetching sets:', error);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SetsMenu;
