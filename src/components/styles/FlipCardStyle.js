import { StyleSheet } from "react-native";
import * as colors from './colors'

export const styles = StyleSheet.create({
        card: {
          width: 150,
          height: 220,
          justifyContent: 'center',
          alignItems: 'center',
          backfaceVisibility: 'hidden',
        },
        cardBack: {
          transform: [{ rotateY: '180deg' }],
        },
        cardImage: {
          width: '108%',
          height: '100%',
          resizeMode: 'cover',
        },
        flipCardContainer: {
          width: 150,  
          height: 220, 
          margin: 5,   
        },
      });