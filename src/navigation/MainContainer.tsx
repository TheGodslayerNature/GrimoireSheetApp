import { View, Text } from 'react-native'
import React from 'react'

import StatusScreen from './screens/StatusScreen'
import CharacterScreen from './screens/CharacterScreen'
import CreatingCharacterScreen from './screens/CreatingCharacterScreen'
import CreatingPersona from './screens/CreatingPersona'
import CharacterStatus from './screens/CharacterStatus'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'  

const homeName = "Home";
const statusScreenName = "Status";
const CharacterScreenName = "Character";
const CharacterCreatingScreenName = "Creating Character";
const creatingPesonaScreen = "CreatingPersona";
const characterStatus = "Character Status"

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={CharacterCreatingScreenName}>
      <Stack.Screen name={CharacterScreenName} component={CharacterScreen}/>
        <Stack.Screen name={statusScreenName} component={StatusScreen}/>
        <Stack.Screen name={creatingPesonaScreen} component={CreatingPersona}/>
        <Stack.Screen name={characterStatus} component={CharacterStatus}/>
      </Stack.Navigator>
    </NavigationContainer>
    /*
    <NavigationContainer>
      <Tab.Navigator initialRouteName={homeName}>
        <Tab.Screen name={homeName}component={HomeScreen} options={{ tabBarStyle: {display:'none'}}}/>
        <Tab.Screen name={statusScreeeName}component={StatusScreen}/>
        <Tab.Screen name={CharacterScreenName}component={CharacterScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    */
  )
}