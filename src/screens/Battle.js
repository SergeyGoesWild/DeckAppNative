import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import History from '../components/History';
import * as Animatable from "react-native-animatable";
import PlayCards from '../components/pokemonTypes/PlayCards'

const PokemonGame = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [history, setHistory] = useState([]);

  const types = ['Colorless', 'Psychic', 'Fire', 'Grass', 'Fairy', 'Fighting', 'Metal', 'Dragon', 'Water', 'Dark'];

  const typeMatchups = {
    Colorless: ['Psychic'],
    Psychic: ['Dark', 'Fighting'],
    Fire: ['Grass'],
    Grass: ['Water', 'Rock'],
    Fairy: ['Dragon', 'Dark'],
    Fighting: ['Normal', 'Dark', 'Rock'],
    Metal: ['Fairy', 'Grass', 'Psychic'],
    Dragon: ['Dragon'],
    Water: ['Fire', 'Rock', 'Metal'],
    Dark: ['Psychic', 'Ghost', 'Fighting'],
  };

  const play = (choice) => {
    const computerChoice = types[Math.floor(Math.random() * types.length)];
    const roundResult = getRoundResult(choice, computerChoice);

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(roundResult);

    const newHistory = [...history, { playerChoice, computerChoice, result: roundResult }];
    setHistory(newHistory);

    if (roundResult === 'You win!') {
      setPlayerScore(playerScore + 1);
    } else if (roundResult === 'Computer wins!') {
      setComputerScore(computerScore + 1);
    }
  };

  const getRoundResult = (playerChoice, computerChoice) => {
    if (typeMatchups[playerChoice] && typeMatchups[playerChoice].includes(computerChoice)) {
      return 'You win!';
    } else if (playerChoice === computerChoice) {
      return 'It\'s a draw!';
    } else {
      return 'Computer wins!';
    }
  };

  const renderChoiceImage = (choice) => {
    const choiceImage = choiceImages[choice];
    if (choiceImage) {
      return <Image style={{ height: 28, width: 28, resizeMode: 'stretch' }} source={choiceImage} />;
    }
    return null;
  };

  const renderPlayImage = (choice, isPlayerChoice) => {
    const choiceImage = choiceImages[choice];
    const imageRef = useRef(null);
  
    useEffect(() => {
      if (imageRef.current) {
        if (isPlayerChoice) {
          imageRef.current.slideInLeft(1000);
        } else {
          imageRef.current.slideInRight(1000);
        }
      }
    }, [choice, isPlayerChoice]);
  
    return (
      <Animatable.View ref={imageRef}>
        {choiceImage && <Image style={{ height: 80, width: 80, resizeMode: 'contain' }} source={choiceImage} />}
      </Animatable.View>
    );
  };
  

  const choiceImages = {
    Colorless: require('../../assets/colorless.png'),
    Psychic: require('../../assets/psychic.png'),
    Fire: require('../../assets/fire.png'),
    Grass: require('../../assets/grass.png'),
    Fairy: require('../../assets/fairy.png'),
    Fighting: require('../../assets/fighting.png'),
    Metal: require('../../assets/metal.png'),
    Dragon: require('../../assets/dragon.png'),
    Water: require('../../assets/water.png'),
    Dark: require('../../assets/dark.png'),
  };

const playerRef = useRef(null);
const computerRef = useRef(null);

  return (
    <ScrollView>
<View style={styles.container}>
        <View style={styles.player}>
        <Image source={require('../../assets/player.png')} style={styles.avatar}/>
        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.choiceImg}>
        {renderChoiceImage(playerChoice)}
        </Animatable.View>
          <View style={styles.scoreCount}>
          <Text style={styles.scoreText}>{playerScore}</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
          {types.map((type, index) => (
            <PlayCards
              key={index}
              type={type}
              onPress={play}
            />
          ))}
        </ScrollView>
      <Text style={styles.result}>
        {result}
      </Text>
      <View style={styles.scoreContainer}>
      <View style={styles.choices}>
      <View style={styles.scoreContainer}>
  <View style={styles.choices}>
    <View>
      {renderPlayImage(playerChoice, true)}
    </View>    
    <View>
      {renderPlayImage(computerChoice, false)}
    </View>
  </View>
</View>
      </View>
      </View>
      <View style={styles.player}>
      <Image source={require('../../assets/complayer.png')} style={styles.avatar}/>
      <Animatable.View animation="pulse" easing="ease-in-back" iterationCount="infinite" style={styles.choiceImg}>
        {renderChoiceImage(computerChoice)}
        </Animatable.View>
          <View style={styles.scoreCount}>
          <Text style={styles.scoreText}>{computerScore}</Text>
          </View>
      </View>
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
    {types.map((type, index) => (
      <PlayCards
        key={index}
        type={type}
        onPress={() => {}}
        disabled={true}
      >
      </PlayCards>
    ))}
    </ScrollView>

</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  choices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
  },
  result: {
    height: 20,
    fontSize: 16,
    marginBottom: 0,
  },
  scoreContainer: {
    flexDirection: 'row',
    margin: 25,
    justifyContent: 'space-between',
    width: '70%',
  },
  scoreText: {
    fontSize: 16,
  },
avatar: {
  height: 50,
  width: 50,
  resizeMode: 'contain',
  alignSelf: 'flex-start',
  borderWidth: 1,
  margin: 5,
  borderRadius: 8,
  resizeMode: 'cover',
  backgroundColor: 'white',
},
player: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  margin: 15,
  paddding: 10,
  width: '100%',
  borderRadius: 10,
  borderWidth: 1,
},
scoreCount: {
  height: 30,
  width: 30,
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
  marginLeft: 300,
  backgroundColor: 'white',
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 4,
  position: 'absolute',
},
choiceImg: {
  position: 'absolute',
  marginLeft: 80,
  borderWidth: 1,
  borderRadius: 20,
}
});

export default PokemonGame;