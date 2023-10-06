import { View, Text } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import React from 'react'

const magicTypes: String[] = [ "Select an magic","PHYSICAL" ,"FIRE", "ICE", "WIND", "LIGHTNING", "LIGHT", "DARKNESS", "OMNIPOTENT", "HEALING", "DEFENSE", "BUFF", "DEBUFF", "STATUS", "INTEL", "MISCELLANEOUS"];

export default function MagTypes() {
  return (
    <View>
        <Picker style={{ width: 150, height: 50 }}>
          {magicTypes.map((arc) => (
            <Picker.Item key={0} value={""} label={arc.toString()} />
          ))}
        </Picker>
    </View>
  )
}