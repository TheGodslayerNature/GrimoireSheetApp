import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {Mag} from "../../../model/mag/Mag"
import DefaultAccordionForItem from '../../../components/accordion/DefaultAccordionForItem'

import consumables from "../../../data/consumableItem.json"
import weapons from "../../../data/itemJson.json"
import magias from "../../../model/mag/mags.json"
import { WeaponItem } from '../../../model/item/Item'

let myWeapons: WeaponItem[] = weapons as WeaponItem[];

let my = new WeaponItem("","","",1,5,2,"","")

export default function WeaponScreen(props:any) {
    let {character} = props.route.params
    
  return (
    <View>
      <DefaultAccordionForItem character={character} consumables={myWeapons} />

      <Pressable onPress={() => {
        if((myWeapons[0]).reach){
          console.log("existe")
        }
      }}><Text>Aperte</Text></Pressable>
    </View>
  )
}