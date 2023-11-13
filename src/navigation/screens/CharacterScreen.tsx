import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component, useState } from "react";

import CharacterStatus from "./forCharacter/CharacterStatus";
import DificultyTest from "./forCharacter/DificultyTest";
import { RootStackParamList } from "navigation/MainNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Icon } from "react-native-elements";
import PersonasEdit from "./forCharacter/PersonasEdit";
import NewPersona from "./forCharacter/CreatePersona";
import BuyItem from "./forCharacter/BuyItem";
import WeaponScreen from "./forCharacter/WeaponScreen";

const Tab = createBottomTabNavigator();

interface Props
  extends NativeStackScreenProps<RootStackParamList, "CharacterScreen"> {}

export default function CharacterScreen(props: any) {
  const { character } = props.route.params;

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
        options={{
          tabBarIcon: ({}) => <Icon name="game-controller" type="entypo" />,
        }}
      />
      <Tab.Screen
        name={"PersonasEdit"}
        initialParams={{ character }}
        component={PersonasEdit}
        options={{
          tabBarIcon: ({}) => <Icon name="tripadvisor" type="entypo" />,
        }}
      />
      <Tab.Screen
        name={"NewPersona"}
        initialParams={{ character }}
        component={NewPersona}
        options={{
          tabBarIcon: ({}) => <Icon name="new" type="entypo"/>
        }}
      />
      <Tab.Screen
        name={"BuyItem"}
        initialParams={{ character }}
        component={BuyItem}
        options={{
          tabBarIcon: ({}) => <Icon name="new" type="entypo"/>
        }}
      />
       <Tab.Screen
        name={"WeaponScreen"}
        initialParams={{ character }}
        component={WeaponScreen}
        options={{
          tabBarIcon: ({}) => <Icon name="new" type="entypo"/>
        }}
      />
    </Tab.Navigator>
  );
}
