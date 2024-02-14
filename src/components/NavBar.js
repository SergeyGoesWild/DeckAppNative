import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { styles as navBarStyles } from './styles/navBarStyles';

const NavBar = ({ navigation }) => {
  return (
    <View style={navBarStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={navBarStyles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Decks')}>
        <Text style={navBarStyles.link}>Decks</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
