import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { searchBarStyles } from './styles/searchBarStyles'

const SearchBar = ({ onSearch }) => {
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
    <View style={searchBarStyles.container}>
      <TextInput
        style={searchBarStyles.input}
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

