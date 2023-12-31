import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "navigation/MainNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ModifyPersona from "./ModifyPersona";
import { Icon } from "react-native-elements";
import BuyMagic from "../BuyMagic";

const Tab = createBottomTabNavigator();

interface Props
  extends NativeStackScreenProps<RootStackParamList, "PersonaScreen"> {}

export default function PersonaScreen({ route }: Props) {
  const { persona } = route.params;
  const { character} = route.params;

  return (
    <Tab.Navigator
      initialRouteName={"ModifyPersona"}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        initialParams={{persona, character}}
        name="ModifyPersona"
        component={ModifyPersona}
        options={{
          tabBarIcon: ({}) => <Icon name="dingding" type="antdesign"/>
        }}
      />
      <Tab.Screen
        name={"BuyMagic"}
        initialParams={{ persona, character}}
        component={BuyMagic}
        options={{
          tabBarIcon: ({}) => <Icon name="magic" type="font-awesome" />,
        }}
      />
    </Tab.Navigator>
  );
}
