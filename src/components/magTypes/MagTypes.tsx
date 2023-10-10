import { View, Text } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import React from 'react'
import { MagType } from 'components/mag/Mag';

const magicTypes: String[] = [ "Select an magic","PHYSICAL" ,"FIRE", "ICE", "WIND", "LIGHTNING", "LIGHT", "DARKNESS", "OMNIPOTENT", "HEALING", "DEFENSE", "BUFF", "DEBUFF", "STATUS", "INTEL", "MISCELLANEOUS"];
//const magType:MagType[] = [];

export default function MagTypes() {
  return (
    <View>
        <Picker style={{ width: 150, height: 50 }}>
          {magicTypes.map((arc) => (
            <Picker.Item key={magicTypes.indexOf(arc)} value={""} label={arc.toString()} />
          ))}
        </Picker>
    </View>
  )
}