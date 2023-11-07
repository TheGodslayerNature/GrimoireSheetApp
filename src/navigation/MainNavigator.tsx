import React from "react";

import StatusScreen from "./screens/CreatingCharacter";
import CreatingPersona from "./screens/CreatingPersona";
import CharacterScreen from "./screens/CharacterScreen";
import HomeScreen from "./screens/HomeScreen";
import PersonaStatus from "./screens/forCharacter/forPersona/PersonaStatus";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Persona } from "model/persona/Persona";
import { Character } from "model/character/Character";

const RootStack = createNativeStackNavigator<RootStackParamList>();

type SavePersonaCallback = {
  call: (persona: Persona) => void;
};

export type RootStackParamList = {
  HomeScreen: {characterIds: string[]} | undefined;
  StatusScreen: { createdPersona: Persona } | undefined;
  CreatingPersona: undefined;
  CharacterScreen: {character: Character};
  PersonaStatus: {character: Character};
};

const MainNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={"HomeScreen"}>
      <RootStack.Screen name={"HomeScreen"} component={HomeScreen} />
      <RootStack.Screen name={"StatusScreen"} component={StatusScreen} />
      <RootStack.Screen name={"CreatingPersona"} component={CreatingPersona} />
      <RootStack.Screen name={"CharacterScreen"} component={CharacterScreen} />
      <RootStack.Screen name={"PersonaStatus"} component={PersonaStatus}/>
    </RootStack.Navigator>
  );
};

export default MainNavigator;
