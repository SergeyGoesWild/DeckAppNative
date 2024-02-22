import React, { useState, useEffect } from 'react';
import { TextInput, View, Button } from 'react-native';
import style from './styles/searchBarStyles'

const SearchBar = ({ onSearch, details, card }) => {
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState('');
const [selectedRarity, setSelectedRarity] = useState('');
const [selectedType, setSelectedType] = useState('');

const handleSearch = () => {
  onSearch(searchTerm, selectedCategory, selectedRarity, selectedType);
};

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
