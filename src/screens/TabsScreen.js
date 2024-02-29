import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import DecksScreen from "./DecksScreen";
import ErrorScreen from "./ErrorScreen";
import SetScreen from './SetScreen';
import Battle from './Battle';

const Tab = createMaterialTopTabNavigator();

const TabsScreen = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarInactiveTintColor: 'black',
    }}>
      <Tab.Screen name="Search" component={HomeScreen}/>
      <Tab.Screen name="Decks" component={DecksScreen} />
      <Tab.Screen name="Sets" component={SetScreen}/>
      <Tab.Screen name='Battle' component={Battle}/>
    </Tab.Navigator>
  );
};

export default TabsScreen;
