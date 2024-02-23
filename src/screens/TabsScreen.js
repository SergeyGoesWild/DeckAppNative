import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import DecksScreen from "./DecksScreen";
<<<<<<< HEAD
import SetScreen from './SetScreen';
import Battle from './Battle';
=======
import ErrorScreen from "./ErrorScreen";
>>>>>>> b18c7bcbddedfc53d0cccf5a744cdc78c8ffb58e

const Tab = createMaterialTopTabNavigator();

const TabsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Decks" component={DecksScreen} />
      <Tab.Screen name="Sets" component={SetScreen}/>
      <Tab.Screen name='Battle' component={Battle}/>
    </Tab.Navigator>
  );
};

export default TabsScreen;
