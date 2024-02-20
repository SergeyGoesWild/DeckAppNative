import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      margin: 10,
      width: '100%',
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingBottom: 10,
    },
    tab: {
      paddingVertical: 5,
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: 'blue',
    },
    tabText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      padding: 10,
      margin: 10,
    },
    cardImage: {
      width: 400,
      height: 400,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
  });

export default style