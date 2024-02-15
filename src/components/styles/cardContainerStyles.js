import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  cardContainer: {
    flex: 1,
    margin: 10,
    width: 35, 
  },
  cardImage: {
    width: '100%',
    height: 200, 
    resizeMode: 'contain',
  },
});

export default style