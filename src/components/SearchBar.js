import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { TextInput, View, Button } from 'react-native';
import style from './styles/searchBarStyles'
=======
import { StyleSheet, TextInput, View } from 'react-native';
import { searchBarStyles } from './styles/searchBarStyles'
>>>>>>> 70d4ab247ee1b3cda1b9bd076188c83e1343e3b4

const SearchBar = ({ onSearch, details, card }) => {
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState('');
const [selectedRarity, setSelectedRarity] = useState('');
const [selectedType, setSelectedType] = useState('');

<<<<<<< HEAD
const handleSearch = () => {
  onSearch(searchTerm, selectedCategory, selectedRarity, selectedType);
};

=======
>>>>>>> 70d4ab247ee1b3cda1b9bd076188c83e1343e3b4
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        onSearch(searchTerm);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Search cards..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        returnKeyType="search"
        onSubmitEditing={() => onSearch(searchTerm)}
      />
    </View>
  );
};

export default SearchBar;

