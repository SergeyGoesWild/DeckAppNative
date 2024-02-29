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
    borderWidth: 0.5,
    borderColor: colors.plainGrey,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    textShadowColor: colors.shadow,
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 0},
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
