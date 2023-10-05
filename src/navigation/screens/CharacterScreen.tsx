import { View, Text, StyleSheet, FlatList, Pressable} from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import { Character } from "../../components/character/Character";
import { Player } from "../../components/player/Player";
import { CharacterClass, Klass } from "../../components/character/CharacterClass";
import { User } from "../../components/user/User";
import { Arcanas } from "../../components/character/Arcanas";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const player: Player = new Player("jj@gmail.com", "zetaman12");
const klass:CharacterClass = new CharacterClass(Klass.JOKER); 
var kaleesi:User = new User("Kaleesi", 1);

const lessi:Character = new Character(kaleesi, player, Arcanas.CHARIOT, klass);
const characters:Character[] = [lessi];

export default function CharacterScream({navigation}:any) {
  return (
    <View style={styles.container}>
      <Pressable 
      style={styles.btnStyle}
      onPress={() => {
        navigation.navigate('Creating Character');
      }}>
        <Text style={styles.btnTextStyle}>Criar Ficha</Text>
      </Pressable>
      <FlatList
      data={characters}
      renderItem={({item}) => <Text>O nome da personagem é: {item.user.getName()}</Text>}
      />
      
      <Pressable style={styles.btnStyle}
      onPress={ () => navigation.navigate("Status")
      }
      >
        <Text>Ir para status Screen</Text>
      </Pressable>
    </View>
  
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '12%',
    backgroundColor: '#E1D200'
  },
  btnTextStyle: {
    fontWeight: 'bold',
    color: '#0066FF',
  }
})