import { View, Text } from 'react-native'
import React from 'react'

import HomeScreen from './screens/HomeScreeen'
import StatusScreen from './screens/StatusScreen'
import CharacterScreen from './screens/CharacterScreen'
import CreatingCharacterScreen from './screens/CreatingCharacterScreen'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'  
import Ionicons from 'react-native-ionicons';


const homeName = "Home";
const statusScreenName = "Status";
const CharacterScreenName = "Character";
const CharacterCreatingScreenName = "Creating Character";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name={statusScreenName} component={StatusScreen}/>
        <Stack.Screen name={CharacterScreenName} component={CharacterScreen}/>
        <Stack.Screen name={CharacterCreatingScreenName} component={CreatingCharacterScreen}/>
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