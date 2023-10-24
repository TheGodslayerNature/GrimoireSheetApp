import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React,{useState} from "react";
import { Status } from "../../../components/userStatus/UserStatus";
import GenerateDice from "../../../components/randomDice/GenerateDice";
import { Picker } from "@react-native-picker/picker";

export default function DificultyTest(props: any) {
  const { character } = props.route.params;
  const [indexValue, setIndexValue] = useState<number>();

  let testD6 = (quantidadeDeVezes: number) => {
    const min = 1;
    const max = 6;
    let str = "";
    for (let i = 0; i < quantidadeDeVezes; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      str = randomNumber.toString();
      console.log("valor: " + str + "\n");
    }
  };

  let testD4 = (quantidadeDeVezes: number) => {
    const min = 1;
    const max = 4;
    let str = "";
    for (let i = 0; i < quantidadeDeVezes; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      str = randomNumber.toString();
      console.log("valor: " + str + "\n");
    }
  };
  
  return (
    <View style={styles.container}>
      {/* <View style={{flexDirection: 'row'}}>
        <FlatList
          data={character.user.statusPoints}
          renderItem={({ item, index }) => (
            <Text style={styles.textStyle}>{Status[index] + " " + item}</Text>
          )}
        />

        <FlatList
          data={character.user.statusPoints}
          renderItem={({ item, index }) => (
            <GenerateDice
              name={Status[index]}
              press={() => testD6(item)}
              pressd4={() => testD4(item)}
            />
          )}
        />
      </View> */}

      <Picker
      selectedValue={indexValue}
      onValueChange={(i) => setIndexValue(i)}
      >
        {character.user.statusPoints.map((value:number, index:number) => (
          <Picker.Item key={index} value={index} label={Status[index]}/>
        ))}
      </Picker>
      
      <GenerateDice
      press={() => testD6(character.user.statusPoints[indexValue!])}
      pressd4={() => testD4(character.user.statusPoints[indexValue!])}
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
