import React from "react";

import StatusScreen from "./screens/CreatingCharacter";
import CreatingPersona from "./screens/CreatingPersona";
import CharacterScreen from "./screens/CharacterScreen";
import HomeScreen from "./screens/HomeScreen";
import PersonaScreen from "./screens/forCharacter/forPersona/PersonaScreen";
import PersonasEdit from "./screens/forCharacter/PersonasEdit"

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
  PersonasEdit: {character: Character};
  PersonaScreen: {persona: Persona, character: Character};
};

const MainNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={"HomeScreen"}>
      <RootStack.Screen name={"HomeScreen"} component={HomeScreen} />
      <RootStack.Screen name={"StatusScreen"} component={StatusScreen} />
      <RootStack.Screen name={"CreatingPersona"} component={CreatingPersona} />
      <RootStack.Screen name={"CharacterScreen"} component={CharacterScreen} />
      <RootStack.Screen name={"PersonasEdit"} component={PersonasEdit} />
      <RootStack.Screen name={"PersonaScreen"} component={PersonaScreen}/>
    </RootStack.Navigator>
  );
};

export default MainNavigator;
