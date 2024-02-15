import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import style from './styles/searchBarStyles'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Search cards..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchBar;
