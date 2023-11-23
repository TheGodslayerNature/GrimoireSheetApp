import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import PopModal from "../../components/myModals/PopModal";
export default function GenerateDice(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [stringFormatter, setStringeFormatter] = useState<string>();

  let generateNumber = (dice:number, quantidadeDeVezes:number) => {
    const min = 1;
    const max = dice;
    let str = "";
    let sum = 0;
    let otherStr = '';

    for(let i = 0; i < quantidadeDeVezes; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      sum += randomNumber;
      otherStr += `[${randomNumber.toString()}]`
      str = str + "roll " + randomNumber.toString() + ", ";
    }
    console.log("valor: " + str + "\n");
    console.log(`A soma dos dados é ${sum}`)
    console.log(`Dados: ${otherStr} = ${sum}`);

    setStringeFormatter(`Dados: ${otherStr} = ${sum}`); 
  }

  return (
    <View style={{ alignItems: 'center'}}>

      <View style={styles.atributosView}>
      <Pressable
      style={styles.btnAtt}
      onPress={() => 
        {  generateNumber(props.diceType! ,props.numberToRoll);
          setModalVisible(true);
        }
      }
      >
        <Text>{props.numberToRoll}</Text>
        <Text>--</Text>
        <Text>{props.attType}</Text>
      </Pressable>

      <PopModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      attribute={props.attType}
      dice={stringFormatter}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnAtt: {
    borderWidth: 3, 
    borderColor: 'black',
    borderRadius: 20,
    width: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40
  },
  btnView: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  atributosView: {
    flexDirection: 'column',
    marginTop: 20,
  }
});
