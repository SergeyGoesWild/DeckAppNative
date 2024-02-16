import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search cards..."
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
  },
});

export default SearchBar;

