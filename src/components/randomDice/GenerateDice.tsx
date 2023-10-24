import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

export default function GenerateDice(props:any) {
  return (
    <View>
      <Pressable
        style={styles.btn}
        onPress={() => props.press()}
      >
        <Text>{props.name} d6</Text>
      </Pressable>
      
      <Pressable
        style={styles.btn}
        onPress={() => props.pressd4()}
      >
        <Text>{props.name} d4</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    btn: {
      margin: 10,
      width: 100,
      borderColor: '#FDED00',
      borderWidth: 5,
    }
  })