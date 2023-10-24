import { View, Text, FlatList } from 'react-native'
import React from 'react'


export default function DificultyTest(props:any) {
  const { character } = props.route.params;

  return (
    <View>
      <FlatList 
      data={character.user.statusPoints}
      renderItem={({item}) => (
        <Text>{item + " "}</Text>
      )}
      />
    </View>
  )
}