import { View, Text } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import React, {useState} from 'react'
import { MagType } from '../../components/mag/Mag';

export default function MagTypes(props: any) {
  //const [magTypeIndex, setMagTypeIndex] = useState<number>();

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

{/* {Object.keys(MagType).map( (magType, i) => (
            <Picker.Item key={i} value={i} label={props.magTypeIndex}/>
          ))} */}