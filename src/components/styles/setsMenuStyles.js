import * as colors from './colors'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    itemContainer: {
      flex: 1,
      margin: 5,
      borderRadius: 10,
      backgroundColor: colors.plainGrey,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default styles