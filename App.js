import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DecksScreen from './src/screens/DecksScreen';
import FullSizeImageScreen from './src/screens/FullSizeImageScreen';
import SetScreen from './src/screens/SetScreen';
import CardsBySets from './src/screens/CardsBySets';
import HomePage from './src/screens/HomePage';
import TabScreen from './src/screens/TabScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
            <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          animationEnabled: true,
        }}
      >
        <Stack.Screen name="HomePage" component={TabScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Decks" component={DecksScreen} />
        <Stack.Screen name="FullSizeImage" component={FullSizeImageScreen} /> 
        <Stack.Screen name="Sets" component={SetScreen} />
        <Stack.Screen name="CardsBySets" component={CardsBySets} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
