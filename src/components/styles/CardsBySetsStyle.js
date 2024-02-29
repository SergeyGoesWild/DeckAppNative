import { StyleSheet } from "react-native";
import * as colors from './colors'

export const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 10,
        },
        cardContainer: {
          flex: 1,
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: colors.plainGrey,
        },
        image: {
          width: 200,
          height: 200,
          resizeMode: 'contain',
          alignSelf: 'center',
        }
      });