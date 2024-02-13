import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DecksScreen from './screens/DecksScreen';
import FullSizeImageScreen from './screens/FullSizeImageScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Decks" component={DecksScreen} />
        <Stack.Screen name="FullSizeImage" component={FullSizeImageScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
