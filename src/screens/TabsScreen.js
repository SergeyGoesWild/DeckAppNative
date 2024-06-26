import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";
import DecksScreen from "./DecksScreen";
import ErrorScreen from "./ErrorScreen";

const Tab = createMaterialTopTabNavigator();

const TabsScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Decks" component={DecksScreen} />
    </Tab.Navigator>
  );
};

export default TabsScreen;
