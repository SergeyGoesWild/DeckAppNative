import { StyleSheet } from 'react-native';
import * as colors from './colors'

const style = StyleSheet.create({
  paragraph: {
    alignSelf: 'center',
    backgroundColor: colors.white,

  },
    container: {
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image : {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    title : {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 3,
      padding: 3,

    },
    name : {
      fontSize: 22,
      textAlign: 'center',
      margin: 3,
      padding: 3,

    },
    types : {
      fontSize: 18,
      textAlign: 'center',
      margin: 3,
      padding: 3,
    },
    description : {
      fontSize: 14,
      textAlign: 'center',
      margin: 3,
      padding: 3,
    },
    rarity : {
      fontSize: 10,
      textAlign: 'center',
      margin: 3,
      padding: 3,
    },
    rarity : {
      fontSize: 14,
      textAlign: 'center',
      margin: 3,
      padding: 3,

    },
    setname : {
      fontSize: 14,
      textAlign: 'center',
      margin: 3,
      padding: 3,

    },
    attacks : {
      fontSize: 12,
      textAlign: 'center',
      margin: 3,
      padding: 3,

    },
    attackName : {
      fontSize: 14,
      textAlign: 'center',
      fontStyle: 'italic'
    },
    attackCost : {
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    typesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    typeItem: {
      flexDirection: 'row',
      margin: 3,
      padding: 3,
      justifyContent: 'center',
    },
    costImg: {
      flexDirection: 'row', 
      alignItems: 'center',
      margin: 5,
    },
    cost: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    renderCost : {
      height: 24,
      width: 24,
      resizeMode: 'cover',
    },
    renderType : {
      height: 24,
      width: 120,
      resizeMode: 'cover',
    }
  });

  export default style