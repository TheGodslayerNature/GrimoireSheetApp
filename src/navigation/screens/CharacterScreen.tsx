import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";

import BuyMagic from "./forCharacter/BuyMagic";
import CharacterStatus from "./forCharacter/CharacterStatus";
import DificultyTest from "./forCharacter/DificultyTest";
import { RootStackParamList } from "navigation/MainNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements";
import PersonaScreen from "./forCharacter/PersonaScreen";

const Tab = createBottomTabNavigator();

interface Props
  extends NativeStackScreenProps<RootStackParamList, "CharacterScreen"> {}

export default function CharacterScreen({ route }: Props) {
  const { character } = route.params;

  return (
    <Tab.Navigator
      initialRouteName={"CharacterStatus"}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={"CharacterStatus"}
        initialParams={{ character }}
        component={CharacterStatus}
        options={{ tabBarIcon: ({}) => <Icon name="user" type="antdesign" /> }}
      />
      <Tab.Screen
        name={"DificultyTest"}
        initialParams={{ character }}
        component={DificultyTest}
        options={{ tabBarIcon: ({}) => <Icon name="game-controller" type="entypo"/> }}
      />
      <Tab.Screen
        name={"BuyMagic"}
        initialParams={{ character }}
        component={BuyMagic}
        options={{
          tabBarIcon: ({}) => <Icon name="magic" type="font-awesome" />,
        }}
      />
      <Tab.Screen
        name={"PersonaScreen"}
        initialParams={{ character}}
        component={PersonaScreen}
        options={{
          tabBarIcon: ({}) => <Icon name="tripadvisor" type="entypo" />,
        }}
      />
    </Tab.Navigator>
  );
}
