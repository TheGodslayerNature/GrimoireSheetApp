import { View, Text } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import React, {useState} from 'react'

export default function MagTypes(props: any) {

  return (
    <View>
        <Picker style={{ width: 150, height: 50 }}
        selectedValue={props.magTypeIndex}
        onValueChange={(i) => props.setMagTypeIndex(i)}
        >
          <Picker.Item key={props.magTypeIndex} value={props.magTypeIndex} label={props.mag}/>
          
        </Picker>
    </View>
  )
}