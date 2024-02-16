import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FullSizeImageScreen from "./src/screens/FullSizeImageScreen";
import ErrorScreen from "./src/screens/ErrorScreen";
import FirstScreen from "./src/screens/FirstScreen";
import TabsScreen from "./src/screens/TabsScreen";

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
        <Stack.Screen name="FullSizeImage" component={FullSizeImageScreen} />
        <Stack.Screen name="Error" component={ErrorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
