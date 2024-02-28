import { StyleSheet } from 'react-native';
import * as colors from './colors'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    title: {
      fontSize: 18,
      marginBottom: 20,
    },
    choices: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    buttonText: {
      fontSize: 18,
    },
    result: {
      fontSize: 16,
      marginBottom: 0,
    },
    scoreContainer: {
      flexDirection: 'row',
      margin: 25,
      justifyContent: 'space-between',
      width: '70%',
    },
    scoreText: {
      fontSize: 16,
    },
  avatar: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    borderWidth: 1,
    margin: 5,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
  player: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.plainGrey,
    margin: 10,
    paddding: 10,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
  },
  scoreCount: {
    height: 30,
    width: 30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 300,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 4,
    position: 'absolute',
  },
  choiceImg: {
    position: 'absolute',
    marginLeft: 230,
    borderWidth: 1,
    borderRadius: 20,
  },
  input: {
    height: 50,
    borderColor: colors.black,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%',
    backgroundColor: colors.white,
  },
  healthBarContainer: {
    marginBottom: 5,
  },
  healthBar: {
    flexDirection: 'row',
    height: 10,
    width: '100%',
    backgroundColor: colors.plainGrey,
    borderRadius: 5,
    overflow: 'hidden',
  },
  healthBarFill: {
    height: '100%',
    backgroundColor: colors.green,
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.shadow,
  },
  modalContent: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalButton: {
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.plainGrey,
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  modalResult: {
    height : 400,
    width: 400,
    resizeMode: 'contain',
    position: 'absolute',
  },
  sprite : {
    height : 120,
    width: 120,
  },
  renderChoice : {
    height: 80,
    width: 80,
    resizeMode: 'cover',
  },
  renderChoiceSmall : {
    height: 24,
    width: 24,
    resizeMode: 'cover',
  },
  });

  export default styles