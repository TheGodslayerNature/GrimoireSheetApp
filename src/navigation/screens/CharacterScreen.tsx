import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import BuyMagic from "./forCharacter/BuyMagic";
import CharacterStatus from "./forCharacter/CharacterStatus";
import DificultyTest from "./forCharacter/DificultyTest";
import { RootStackParamList } from "navigation/MainNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

interface Props
  extends NativeStackScreenProps<RootStackParamList, "CharacterScreen"> {}

export default function CharacterScreen({ route }: Props) {
  const { character } = route.params;

  return (
    <Tab.Navigator initialRouteName={"CharacterStatus"} screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={"CharacterStatus"}
        initialParams={{ character }}
        component={CharacterStatus}
      />
      <Tab.Screen name={"DificultyTest"} initialParams={{ character }} component={DificultyTest} />
      <Tab.Screen name={"BuyMagic"} initialParams={{ character }} component={BuyMagic} />
    </Tab.Navigator>
  );
}
