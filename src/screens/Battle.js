import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import History from '../components/History';

const PokemonGame = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [history, setHistory] = useState([]);

  const types = ['Colorless', 'Psychic', 'Fire', 'Grass', 'Fairy', 'Fighting', 'Metal', 'Dragon', 'Water', 'Dark', 'Rock'];

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
    Rock: ['Fire', 'Ghost']
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your Pokémon type:</Text>
      <View style={styles.choices}>
        {types.map((type, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => play(type)}
          >
            <Text style={styles.buttonText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your score: {playerScore}</Text>
        <Text style={styles.scoreText}>Computer's score: {computerScore}</Text>
      </View>
      {playerChoice && computerChoice && (
        <View style={styles.choices}>
          <Text>You chose: {playerChoice}</Text>
          <Text>Computer chose: {computerChoice}</Text>
        </View>
      )}
      <History history={history} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  choices: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 5,
    marginBottom: 10,
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
