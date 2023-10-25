import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React,{useState} from "react";
import { Status } from "../../../components/userStatus/UserStatus";
import GenerateDice from "../../../components/randomDice/GenerateDice";
import { Picker } from "@react-native-picker/picker";

export default function DificultyTest(props: any) {
  const { character } = props.route.params;
  const [indexValue, setIndexValue] = useState<number>();
  
  return (
    <View style={styles.container}>

      <Picker
      selectedValue={indexValue}
      onValueChange={(i) => setIndexValue(i)}
      >
        {character.user.statusPoints.map((value:number, index:number) => (
          <Picker.Item key={index} value={index} label={Status[index]}/>
        ))}
      </Picker>
      
      <GenerateDice
      numberToRoll={character.user.statusPoints[indexValue!]}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {

  }
});
