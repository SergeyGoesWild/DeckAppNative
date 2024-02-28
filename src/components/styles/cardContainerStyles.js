import { StyleSheet } from 'react-native';
import * as colors from './colors'

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    margin: 10,
    width: '100%',
    alignItems: 'center', 
  },
  cardImage: {
    width: 200,
    height: 200, 
    resizeMode: 'contain',
  },
  overlay : {
    flex: 1,
    margin: 10,
    width: 35,
    backgroundColor: colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.shadow,
    padding: 20,
  },
});

export default style