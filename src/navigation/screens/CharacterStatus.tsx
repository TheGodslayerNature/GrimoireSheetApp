import { View, Text } from 'react-native'
import ThemedCard from "@rneui/themed/dist/Card";
import React from 'react'

export default function CharacterStatus({navigation}:any) {
  return (
    <View>
      <ThemedCard>
        <Text>Funcionando</Text>
      </ThemedCard>
    </View>
  )
}