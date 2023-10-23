import React from "react";

import StatusScreen from "./screens/StatusScreen";
import HomeScreen from "./screens/HomeScreen";
import CreatingPersona from "./screens/CreatingPersona";
import CharacterScreen from "./screens/CharacterScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"HomeScreen"}>
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"StatusScreen"} component={StatusScreen} />
      <Stack.Screen name={"CreatingPersona"} component={CreatingPersona} />
      <Stack.Screen name={"CharacterScreen"} component={CharacterScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
