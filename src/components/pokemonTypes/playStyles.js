import { StyleSheet } from 'react-native';
import * as colors from '../styles/colors'

const styles = StyleSheet.create({
    renderCost : {
      height: 60,
      width: 60,
      resizeMode: 'cover',
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: colors.plainGrey,
      marginHorizontal: 5,
      marginBottom: 10,
      borderRadius: 8,
      borderWidth: 1,
      elevation: 5,
      shadowColor: colors.black, 
    },
    buttonText: {
      fontSize: 18,
    },
  });

  export default styles