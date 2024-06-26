import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FullSizeImageScreen from "./src/screens/FullSizeImageScreen";
import FirstScreen from "./src/screens/FirstScreen";
import ErrorScreen from "./src/screens/ErrorScreen";
import TabsScreen from "./src/screens/TabsScreen";
import { SharedProvider } from "./src/components/SharedContext";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SharedProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="First"
          screenOptions={({ navigation }) => ({
            animationEnabled: true,
            headerTintColor: "transparent",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="chevron-back"
                  size={24}
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            ),
          })}
        >
          <Stack.Screen
            name="First"
            component={FirstScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Pokemon Decks" component={TabsScreen} />
          <Stack.Screen name="FullSizeImage" component={FullSizeImageScreen} />
          <Stack.Screen name="Error" component={ErrorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SharedProvider>
  );
};

export default App;
