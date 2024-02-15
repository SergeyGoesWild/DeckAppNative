import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { searchBarStyles } from './styles/searchBarStyles'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <View style={searchBarStyles.container}>
      <TextInput
        style={searchBarStyles.input}
        placeholder="Search cards..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar;
