import { StyleSheet } from "react-native";
import * as colors from './colors'

export const styles = StyleSheet.create({
        card: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          backgroundColor: colors.white,
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
        },
        text: {
          flex: 1,
        },
        imageContainer: {
          width: 55,
          height: 55,
          overflow: 'hidden',
        },
        image: {
          width: '183%',
          height: '210%',
          position: 'absolute',
          top: '-8%',
          left: '-40%',
        },
      });