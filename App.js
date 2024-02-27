import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DecksScreen from './src/screens/DecksScreen';
import FullSizeImageScreen from './src/screens/FullSizeImageScreen';
import SetScreen from './src/screens/SetScreen';
import CardsBySets from './src/screens/CardsBySets';
import HomePage from './src/screens/HomePage';
import TabsScreen from './src/screens/TabsScreen'
import FirstScreen from './src/screens/FirstScreen';
import ErrorScreen from "./src/screens/ErrorScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
            <Stack.Navigator
        initialRouteName="First"
        screenOptions={{
          animationEnabled: true,
        }}
      >
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Pokemon Decks" component={TabsScreen} />
        <Stack.Screen name="FullSizeImage" component={FullSizeImageScreen} />
        <Stack.Screen name="Error" component={ErrorScreen} />
        <Stack.Screen name="CardsBySets" component={CardsBySets} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
