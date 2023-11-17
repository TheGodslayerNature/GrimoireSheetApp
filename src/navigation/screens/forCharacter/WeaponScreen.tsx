import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import {Mag} from "../../../model/mag/Mag"
import DefaultAccordionForItem from '../../../components/accordion/DefaultAccordionForItem'

import consumables from "../../../data/consumableItem.json"
import weapons from "../../../data/itemJson.json"
import magias from "../../../model/mag/mags.json"
import { Item, WeaponItem } from '../../../model/item/Item'
import ShowItems from '../../../components/accordion/ShowItems'

let myWeapons: WeaponItem[] = weapons as WeaponItem[];

let my = myWeapons as WeaponItem[];

export default function WeaponScreen(props:any) {
    let {character} = props.route.params
    
  return (
    <View style={{flex: 1}}>
      <DefaultAccordionForItem character={character} someArrayLikeItem={myWeapons} />

      <ShowItems character={character} dataItem={character.inventory}/>
    </View>
  )
}