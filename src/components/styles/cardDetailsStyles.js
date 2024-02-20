import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  paragraph: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  },
    container: {
      backgroundColor: '#fff',
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
      fontSize: 10,
      textAlign: 'center',
      margin: 3,
      padding: 3,
    },
    setname : {
      fontSize: 12,
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
    attackCost : {
      textAlign: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });

  export default style