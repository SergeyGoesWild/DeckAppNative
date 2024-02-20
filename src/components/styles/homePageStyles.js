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
        resizeMode: 'cover',
      },
      heroText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
      },
      comingSoon: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 20,
        paddingHorizontal: 20,
      },
      comingSoonText: {
        fontSize: 24,
        textAlign: 'center',
      },
    });

  export default style