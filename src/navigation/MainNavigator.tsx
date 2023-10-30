import React from "react";

import StatusScreen from "./screens/CreatingCharacter";
import HomeScreen from "./screens/HomeScreen";
import CreatingPersona from "./screens/CreatingPersona";
import CharacterScreen from "./screens/CharacterScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Persona } from "model/persona/Persona";

const RootStack = createNativeStackNavigator<RootStackParamList>();

type SavePersonaCallback = {
  call: (persona: Persona) => void;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  StatusScreen: { createdPersona: Persona } | undefined;
  CreatingPersona: undefined;
  CharacterScreen: undefined;
};

const MainNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={"HomeScreen"}>
      <RootStack.Screen name={"HomeScreen"} component={HomeScreen} />
      <RootStack.Screen name={"StatusScreen"} component={StatusScreen} />
      <RootStack.Screen name={"CreatingPersona"} component={CreatingPersona} />
      <RootStack.Screen name={"CharacterScreen"} component={CharacterScreen} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
