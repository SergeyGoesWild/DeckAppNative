import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import style from '../components/styles/homePageStyles'

const HomePage = () => {
    const navigation = useNavigation()

    return (
        <ScrollView style={style.container}>

            <Text style={style.heroText}>Build your DreamDeck</Text>
            <Button title="View Cards" onPress={() => navigation.navigate('Home')}/>

          
          <View style={style.comingSoon}>
            <Text style={style.comingSoonText}>Coming Soon...</Text>
          </View>
        </ScrollView>
      ); 
    };

export default HomePage;
