import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ListItem } from '@rneui/themed'
import { WeaponItem } from '../../../model/item/Item'

export default function WeaponScreen(props:any) {
    let {character} = props.route.params
  return (
    <View>
        {/* <FlatList
        data={character.inventory}
        /> */}
        {/* <ListItem.Accordion>

        </ListItem.Accordion> */}
        <Pressable onPress={() => { console.log(character.inventory)}}>
            <Text>Clique</Text>
        </Pressable>
    </View>
  )
}