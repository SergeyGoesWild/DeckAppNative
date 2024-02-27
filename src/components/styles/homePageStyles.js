import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
      },
      heroHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 40,
        resizeMode: 'contain',
      },
      heroText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
      },
    });

  export default style