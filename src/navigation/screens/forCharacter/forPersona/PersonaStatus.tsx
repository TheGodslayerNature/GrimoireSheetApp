import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "navigation/MainNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ModifyPersona from "./ModifyPersona";

const Tab = createBottomTabNavigator();

interface Props
  extends NativeStackScreenProps<RootStackParamList, "PersonaStatus"> {}

export default function PersonaStatus({ route }: Props) {
  const { character } = route.params;

  return (
    <Tab.Navigator
      initialRouteName={"ModifyPersona"}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        initialParams={{ character }}
        name="ModifyPersona"
        component={ModifyPersona}
        options={{}}
      />
    </Tab.Navigator>
  );
}
