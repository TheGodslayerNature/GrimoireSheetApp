import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import BuyMagic from "./forCharacter/BuyMagic";
import CharacterStatus from "./forCharacter/CharacterStatus";
import DificultyTest from "./forCharacter/DificultyTest";

const Tab = createBottomTabNavigator();

export default function CharacterScreen({ route }: any) {
  const { character } = route.params;

  return (
    <Tab.Navigator initialRouteName={"CharacterStatus"} screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={"CharacterStatus"}
        initialParams={{ character }}
        component={CharacterStatus}
      />

      <Tab.Screen name={"DificultyTest"} component={DificultyTest} />
      <Tab.Screen name={"BuyMagic"} component={BuyMagic} />
    </Tab.Navigator>
  );
}
