import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {Mag} from "../../../model/mag/Mag"
import DefaultAccordion from '../../../components/accordion/DefaultAccordion'

import consumables from "../../../data/consumableItem.json"
import weapons from "../../../data/itemJson.json"
import magias from "../../../model/mag/mags.json"

let tier1Physical: Mag[] = magias.physical.Tier1 as Mag[];

export default function WeaponScreen(props:any) {
    let {character} = props.route.params
    
  return (
    <View>
      <DefaultAccordion character={character} magics={tier1Physical} weapons={weapons} consumables={consumables}/>
    </View>
  )
}