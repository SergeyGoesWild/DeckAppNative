import { StyleSheet } from "react-native";
import * as colors from './colors'

export const styles = StyleSheet.create({
        boosterImage: {
          width: 200,
          height: 300,
          resizeMode: 'contain',
        },
        boosterContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100, 
        },
        modalImage: {
          width: '48%',
          height: 100,
          resizeMode: 'contain',
          margin: '1%',
        },
        centeredView: {
          flex: 1,
        },
        modalView: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        cardsContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          marginBottom: 20,
        },
        card: {
          width: 150,  
          height: 220,
          margin: 5,   
          justifyContent: 'center',
          alignItems: 'center',
          backfaceVisibility: 'hidden',
        },
        cardImage: {
          width: '108%',  
          height: '100%', 
          resizeMode: 'cover', 
        },
        overlayContainer: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        },
        centerImage: {
          position: 'absolute',
          width: 100, 
          height: 100, 
          resizeMode: 'contain',
        },
        buttonContainer: {
          flexDirection: 'row', 
          justifyContent: 'space-evenly', 
          alignItems: 'center', 
          marginTop: 20, 
          marginBottom: 50, 
          gap: 125,
        },
        pageContainer: {
          flex: 1, 
          marginTop: 30, 
        },
        boutonImage: {
          width: 50,
          height: 50,
        },
        openBoosterButton: {
            backgroundColor: colors.buttonBlue, 
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
          },
          openBoosterButtonText: {
            color: colors.white, 
            fontSize: 16,
          },
      });