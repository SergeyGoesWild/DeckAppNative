import { View, Text, Button, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import * as Colors from "../components/styles/colors";
import style from '../components/styles/homePageStyles'
import { useNavigation } from "@react-navigation/native";

function FirstScreen() {
  const navigation = useNavigation()

  return (
        <ImageBackground source={require('../../assets/hero-bg.jpg')} style={style.heroHeader}>
          <Text style={style.heroText}>Build your DreamDeck</Text>
          <Button title="Start Building" onPress={() => navigation.navigate("Pokemon Decks")}/>
        </ImageBackground>
    ); 
  };

export default FirstScreen;
