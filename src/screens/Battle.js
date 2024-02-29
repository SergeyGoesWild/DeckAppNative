import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Modal,
  Button,
} from "react-native";
import * as Animatable from "react-native-animatable";
import PlayCards from "../components/pokemonTypes/PlayCards";
import styles from "../components/styles/battleStyles";
import { choiceImages } from "../components/imageData";

const PokemonGame = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerName, setPlayerName] = useState("Player");
  const [playerHealth, setPlayerHealth] = useState(10);
  const [computerHealth, setComputerHealth] = useState(10);
  const [showPlayerDefeatModal, setShowPlayerDefeatModal] = useState(false);
  const [showComputerVictoryModal, setShowComputerVictoryModal] =
    useState(false);

  const types = ["Grass", "Fire", "Water"];

  const typeMatchups = {
    Fire: ["Water"],
    Grass: ["Fire"],
    Water: ["Grass"],
  };

  const play = (choice) => {
    const computerChoice = types[Math.floor(Math.random() * types.length)];
    const roundResult = getRoundResult(choice, computerChoice);

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(roundResult);

    if (roundResult === "You win!") {
      setPlayerScore(playerScore + 1);
      setComputerHealth(computerHealth - 1);
    } else if (roundResult === "Computer wins!") {
      setComputerScore(computerScore + 1);
      setPlayerHealth(playerHealth - 1);
    } else {
      setComputerScore(computerScore + 0);
      setPlayerHealth(playerHealth + 0);
    }

    if (playerHealth === 0) {
      setShowPlayerDefeatModal(true);
    } else if (computerHealth === 0) {
      setShowComputerVictoryModal(true);
    }
  };

  const getRoundResult = (playerChoice, computerChoice) => {
    if (
      typeMatchups[playerChoice] &&
      typeMatchups[playerChoice].includes(computerChoice)
    ) {
      return "You win!";
    } else if (playerChoice === computerChoice) {
      return "It's a draw!";
    } else {
      return "Computer wins!";
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setPlayerScore(0);
    setComputerScore(0);
    setPlayerHealth(10);
    setComputerHealth(10);
    setShowPlayerDefeatModal(false);
    setShowComputerVictoryModal(false);
  };

  const renderChoiceImage = (choice) => {
    const choiceImage = choiceImages[choice];
    if (choiceImage) {
      return <Image style={styles.renderChoiceSmall} source={choiceImage} />;
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
        {choiceImage && (
          <Image style={styles.renderChoice} source={choiceImage} />
        )}
      </Animatable.View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.player}>
          <Image
            source={require("../../assets/player.png")}
            style={styles.avatar}
          />
          <View style={styles.playerInfo}>
            <TextInput
              style={styles.input}
              placeholder="Chose your name"
              onChangeText={setPlayerName}
              value={playerName}
            />
          </View>
          <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={styles.choiceImg}
          >
            {renderChoiceImage(playerChoice)}
          </Animatable.View>
          <View style={styles.scoreCount}>
            <Text style={styles.scoreText}>{playerScore}</Text>
          </View>
        </View>
        <View style={styles.healthBarContainer}>
          <View style={styles.healthBar}>
            <View
              style={[
                styles.healthBarFill,
                { width: `${(playerHealth / 10) * 100}%` },
              ]}
            ></View>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
          {types.map((type, index) => (
            <PlayCards key={index} type={type} onPress={play} />
          ))}
        </ScrollView>
        <Text style={styles.result}>{result}</Text>
        <View style={styles.scoreContainer}>
          <View style={styles.choices}>
            <View style={styles.scoreContainer}>
              <View style={styles.choices}>
                <View>{renderPlayImage(playerChoice, true)}</View>
                <View>{renderPlayImage(computerChoice, false)}</View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.player}>
          <Image
            source={require("../../assets/complayer.png")}
            style={styles.avatar}
          />
          <Text>DreamDeck</Text>
          <Animatable.View
            animation="pulse"
            easing="ease-in-back"
            iterationCount="infinite"
            style={styles.choiceImg}
          >
            {renderChoiceImage(computerChoice)}
          </Animatable.View>
          <View style={styles.scoreCount}>
            <Text style={styles.scoreText}>{computerScore}</Text>
          </View>
        </View>
        <View style={styles.healthBarContainer}>
          <View style={styles.healthBar}>
            <View
              style={[
                styles.healthBarFill,
                { width: `${(computerHealth / 10) * 100}%` },
              ]}
            ></View>
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
            ></PlayCards>
          ))}
        </ScrollView>
        <Modal
          visible={showPlayerDefeatModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={require("../../assets/comwingif.gif")}
                style={styles.sprite}
              />
              <Animatable.Image
                animation="slideInDown"
                iterationCount="infinite"
                direction="alternate"
                source={require("../../assets/youlost.png")}
                style={styles.modalResult}
              />
              <TouchableOpacity style={styles.modalButton} onPress={resetGame}>
                <Text style={styles.buttonText}>Play Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          visible={showComputerVictoryModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={require("../../assets/playwingif.gif")}
                style={styles.sprite}
              />
              <Animatable.Image
                animation="slideInDown"
                iterationCount="infinite"
                direction="alternate"
                source={require("../../assets/youwon.png")}
                style={styles.modalResult}
              />
              <TouchableOpacity style={styles.modalButton} onPress={resetGame}>
                <Text style={styles.buttonText}>Play Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default PokemonGame;
