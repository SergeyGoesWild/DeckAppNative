import { View, Text, Button, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as Colors from "../components/styles/colors";
import style from '../components/styles/homePageStyles'
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

function FirstScreen() {
  const navigation = useNavigation()

  return (
    <ImageBackground source={require('../../assets/hero-bg2.jpg')} style={style.backgroundImage}>
    <View style={style.centered}>
    <ImageBackground source={require('../../assets/charlizard.png')} style={style.innerBackgroundImage}>
          <Text style={style.heroText}>Build your</Text>
          <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" style={style.dreamdeck} source={require('../../assets/dreamdeck.png')}/>
          <TouchableOpacity style={style.startButton} title="Start Building"
           onPress={() => navigation.navigate("Pokemon Decks")}>
          <Text style={style.buttonText}>Start Building</Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
    </ImageBackground>
    ); 
  };

export default FirstScreen;
