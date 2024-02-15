import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { styles as navBarStyles } from './styles/navBarStyles';
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation()
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
