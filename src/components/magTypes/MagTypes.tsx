import { View, Text } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import React from 'react'

const magicTypes: String[] = [ "Select an magic","PHYSICAL" ,"FIRE", "ICE", "WIND", "LIGHTNING", "LIGHT", "DARKNESS", "OMNIPOTENT", "HEALING", "DEFENSE", "BUFF", "DEBUFF", "STATUS", "INTEL", "MISCELLANEOUS"];


{
  for (let index = 0; index < magicTypes.length; index++) {
    const element = magicTypes[index];
    console.log(magicTypes.indexOf(element))
  }

}
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