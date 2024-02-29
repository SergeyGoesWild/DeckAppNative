import { StyleSheet } from 'react-native';
import * as colors from './colors'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "scale",
    justifyContent: "center"
  },
  centered: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: colors.shadowLight,
  },
  heroText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  startButton: {
    alignSelf: 'center',
    backgroundColor: colors.shadowWhite,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  dreamdeck: {
    width: 600,
    height: 100,
    resizeMode: 'contain',
  },
  innerBackgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default styles;
