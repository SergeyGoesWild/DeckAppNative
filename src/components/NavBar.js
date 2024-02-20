import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { styles as navBarStyles } from './styles/navBarStyles';
import { useNavigation } from "@react-navigation/native";
import style from './styles/navBarStyles.js'

const NavBar = () => {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <Text style={style.link}>HomePage</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={style.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Decks')}>
        <Text style={style.link}>Decks</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sets')}>
        <Text style={style.link}>Sets</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
