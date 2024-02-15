import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DecksScreen from "./screens/DecksScreen";
import FullSizeImageScreen from "./screens/FullSizeImageScreen";
import ErrorScreen from "./screens/ErrorScreen";
import FirstScreen from "./screens/FirstScreen";
import TabsScreen from "./screens/TabsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="First"
        screenOptions={{
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Pokemon Decks" component={TabsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Decks" component={DecksScreen} />
        <Stack.Screen name="FullSizeImage" component={FullSizeImageScreen} />
        <Stack.Screen name="Error" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
