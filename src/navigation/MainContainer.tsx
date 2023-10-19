import { View, Text } from "react-native";
import React from "react";

import StatusScreen from "./screens/StatusScreen";
import CharacterScreen from "./screens/CharacterScreen";
import CreatingCharacterScreen from "./screens/CreatingCharacterScreen";
import CreatingPersona from "./screens/CreatingPersona";
import CharacterStatus from "./screens/CharacterStatus";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const homeName = "Home";
const statusScreenName = "Status";
const CharacterScreenName = "Character";
const CharacterCreatingScreenName = "Creating Character";
const creatingPesonaScreen = "CreatingPersona";
const characterStatus = "Character Status";

// const Tab = createBottomTabNavigator();

type AppStackParamList = {
  CharacterScreen: undefined;
  StatusScreen: undefined;
  CreatingPersona: undefined;
  CharacterStatus: undefined;
};

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: "CharacterScreen",
    component: CharacterScreen,
  },
  {
    name: "StatusScreen",
    component: StatusScreen,
  },
  {
    name: "CreatingPersona",
    component: CreatingPersona,
  },
  {
    name: "CharacterStatus",
    component: CharacterStatus,
    initialParams: {character: 'sdadsaf'}
  },
];

const Stack = createNativeStackNavigator();
// const Stack = createNativeStackNavigator<AppStackParamList>();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'CharacterScreen'}>
        <Stack.Screen name={'CharacterScreen'} component={CharacterScreen} />
        <Stack.Screen name={'StatusScreen'} component={StatusScreen} />
        <Stack.Screen name={'CreatingPersona'} component={CreatingPersona} />
        <Stack.Screen name={'CharacterStatus'} component={CharacterStatus} />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="CharacterScreen">
    //     {routes.map((routeConfig) => (
    //       <Stack.Screen key={routeConfig.name} initialParams={{character: ' '}} {...routeConfig} />
    //     ))}
    //   </Stack.Navigator>
    // </NavigationContainer>

    /*
    <NavigationContainer>
      <Tab.Navigator initialRouteName={homeName}>
        <Tab.Screen name={homeName}component={HomeScreen} options={{ tabBarStyle: {display:'none'}}}/>
        <Tab.Screen name={statusScreeeName}component={StatusScreen}/>
        <Tab.Screen name={CharacterScreenName}component={CharacterScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    */
  );
}
