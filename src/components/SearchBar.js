import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import style from './styles/searchBarStyles'

const SearchBar = ({ onSearch, details }) => {
  const [searchTerm, setSearchTerm] = useState('');

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
