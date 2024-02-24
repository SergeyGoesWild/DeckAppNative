import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import History from '../components/History';
import * as Animatable from "react-native-animatable";
import Colorless from '../components/pokemonTypes/Colorless'

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
    Water: ['Fire', 'Rock'],
    Dark: ['Psychic', 'Ghost'],
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
      return <Image style={{ height: 50, width: 50, resizeMode: 'contain' }} source={choiceImage} />;
    }
    return null;
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

  return (
    <ScrollView>
      <View style={styles.container}>
      {/* <Text style={styles.title}>Choose your Pokémon type:</Text> */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
          {types.map((type, index) => (
            <Colorless
              key={index}
              type={type}
              onPress={play}
            />
          ))}
        </ScrollView>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your score: {playerScore}</Text>
        <Text style={styles.scoreText}>Computer's score: {computerScore}</Text>
      </View>
      {playerChoice && computerChoice && (
        <View style={styles.choices}>

          <View>
          <Text>You chose: {playerChoice} </Text>
          {renderChoiceImage(playerChoice)}
          </View>

          <View>
          <Text>Computer chose: {computerChoice} </Text>
          {renderChoiceImage(computerChoice)}
          </View>
          
        </View>
      )}
      <View style={styles.choices}>
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
    {types.map((type, index) => (
      <Colorless
        key={index}
        type={type}
        onPress={() => {}}
        disabled={true}
      >
      </Colorless>
    ))}
    </ScrollView>
  </View>
      <History history={history} />
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
    fontSize: 24,
    marginBottom: 20,
  },
  choices: {
    flexDirection: 'column',
    marginBottom: 20,
    height: 120,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
  },
  result: {
    fontSize: 24,
    marginBottom: 20,
  },
  scoreContainer: {
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 16,
  },
});

export default PokemonGame;