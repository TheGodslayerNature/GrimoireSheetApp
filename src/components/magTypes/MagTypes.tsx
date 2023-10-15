import { View, Text } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import React from 'react'
import { MagType } from '../../components/mag/Mag';

const magicTypes: String[] = [ "Select an magic","PHYSICAL" ,"FIRE", "ICE", "WIND", "LIGHTNING", "LIGHT", "DARKNESS", "OMNIPOTENT", "HEALING", "DEFENSE", "BUFF", "DEBUFF", "STATUS", "INTEL", "MISCELLANEOUS"];

export default function MagTypes(type: any) {
  let types = type.types as MagType; 
  return (
    <View>
        <Picker style={{ width: 150, height: 50 }}
        >
          {Object.keys(MagType).map( (arc, i) => (
            <Picker.Item key={i} value={i} label={arc}/>
          ))}
        </Picker>
    </View>
  )
}