import { View, Text } from 'react-native'
import React from 'react'

import HomeScream from './screens/HomeScreeen'
import StatusScream from './screens/StatusScreen'
import CharacterScream from './screens/CharacterScreen'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'  
import Ionicons from 'react-native-ionicons';


const homeName = "Home";
const statusScreeeName = "Status";
const CharacterScreenName = "Character";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={homeName}
      /*
      screenOptions={({route}) => ({
        tabBarIcon: ({focused,color,size}) => {
        let iconName;
        let rn = route.name;

        if(rn === homeName){
          iconName = focused ? "home": 'home-outline'
        } 
        else if( rn === statusScreeeName) {
          iconName = focused ? "list": 'list-outline'
        }
        else if( rn === CharacterScreenName) {
          iconName = focused ? "settings": 'settings-outline'
        }

        return <Ionicons
        name={iconName}
        size={size}
        color={color}
        />
        }
        
      })}
      */
      >

        <Tab.Screen name={homeName}component={HomeScream}/>
        <Tab.Screen name={statusScreeeName}component={StatusScream}/>
        <Tab.Screen name={CharacterScreenName}component={CharacterScream}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}