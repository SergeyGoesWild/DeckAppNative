import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Animated, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import DisplayResult from '../components/DisplayResult'
import Actions from '../components/Actions'

export default function RockPaper() {
    const [userChoice, setUserChoice] = useState(0);
    const [computerChoice, setComputerChoice] = useState(0);
    const [result, setResult] = useState('');
    const [canPlay, setPlay] = useState(true);

    // For Animation
    const fadeAnimation = useRef(new Animated.Value(1)).current;

    function play(choice){
        // Set choices, 1 2 3

        const randomComputerChoice = Math.floor(Math.random() * 3 ) + 1;
        let resultString = '';

        if (choice === 1) {
            resultString = randomComputerChoice === 3 ? 'WIN' : 'LOSE';
        }
        else if (choice === 2){
            resultString = randomComputerChoice === 1 ? 'WIN' : 'LOSE';
        }
        else {
            resultString = randomComputerChoice === 2 ? 'WIN' : 'LOSE';
        }
        if (choice === randomComputerChoice) {
            resultString = 'DRAW';
        }

        setUserChoice(choice);
        setComputerChoice(randomComputerChoice);

        // wait animation hide old result
        setTimeout(() => {
            setResult(resultString);
        }, 300);

        // Animation hide old and show new result
        Animated.sequence([
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }),
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }),
    ]).start();

    // Disable action when animation running
    setPlay(false);
    setTimeout(() => {
        setPlay(true);
    }, 600);
 }

 // return the view 
    return(
        <ScrollView>
        <SafeAreaView style={StyleSheet.container}>
            <View style={StyleSheet.content}>
                <View style={StyleSheet.result}>
                    <Animated.Text
                    style={[styles.resultText, {opacity: fadeAnimation}]}
                    >
                        {result}
                    </Animated.Text>
                </View>
                <View style={styles.screen}>
                    {!result ? (
                        <Text style={styles.readyText}>Let's Play</Text>
                    ) : (
                        <DisplayResult
                        userChoice={userChoice}
                        computerChoice={computerChoice}
                        />
                    )}
                </View>
                <Actions play={play} canPPlay={canPlay} />
            </View>
        </SafeAreaView>
        </ScrollView>
    );
}

    const styles = StyleSheet.create({
        container : {
        flex: 1,
        padding: 10,
    },
    content : {
        flex: 1,
        marginBottom: 5,
        backgroundColor: 'grey'
    },
    result : {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    resultText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    screen: {
        flex: 1,
        flexDirection: 'row'
    },
    readyText: {
        marginTop: -48,
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%',
        fontSize: 48,
        fontWeight: 'bold'
    },
    })


