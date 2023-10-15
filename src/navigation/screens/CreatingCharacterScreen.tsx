import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import StatusScreen from './StatusScreen';

export default async function CreatingCharacterScreen({navigation}:any) {
    
  return (
      <View style={styles.container}>
      <StatusScreen></StatusScreen>
      <Pressable onPress={ () => navigation.navigate("CreatingPersona")}
      style={styles.btnCriar}
      >
        <Text>Criar Persona</Text>
      </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainerStyle: {
        alignItems: 'center',
    },
    inputStyle: {
        width: 150,
        borderWidth: 1.5,
        borderColor: 'gold',
        margin: 20, 
    },
    btnCriar: {
        padding: 10,
        margin: 50,
        width: 200,
        backgroundColor: 'gold'
    }
  })