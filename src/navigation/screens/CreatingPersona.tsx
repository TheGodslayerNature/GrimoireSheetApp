import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Persona } from "../../model/persona/Persona";
import { Arcanas } from "../../model/character/Arcanas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MagType } from "../../model/mag/Mag";
import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/MainNavigator";

interface Props
  extends NativeStackScreenProps<RootStackParamList, "CreatingPersona"> {}

// type ParamList = {
//   onSavePersona: (persona: Persona) => void;
// }

const selectMagicOptions = [
  { id: 0, value: { name: "Selecione uma tipo de magia", MagType: [] } },
  { id: 1, value: { name: MagType.PHYSICAL, type: MagType.PHYSICAL } },
  { id: 2, value: { name: MagType.FIRE, type: MagType.FIRE } },
  { id: 3, value: { name: MagType.ICE, type: MagType.ICE } },
  { id: 4, value: { name: MagType.WIND, type: MagType.WIND } },
  { id: 5, value: { name: MagType.LIGHTNING, type: MagType.LIGHTNING } },
  { id: 6, value: { name: MagType.LIGHT, type: MagType.LIGHT } },
  { id: 7, value: { name: MagType.DARKNESS, type: MagType.DARKNESS } },
  { id: 8, value: { name: MagType.OMNIPOTENT, type: MagType.OMNIPOTENT } },
  { id: 9, value: { name: MagType.HEALING, type: MagType.HEALING } },
  { id: 10, value: { name: MagType.DEFENSE, type: MagType.DEFENSE } },
  { id: 11, value: { name: MagType.BUFF, type: MagType.BUFF } },
  { id: 12, value: { name: MagType.DEBUFF, type: MagType.DEBUFF } },
  { id: 13, value: { name: MagType.STATUS, type: MagType.STATUS } },
  { id: 14, value: { name: MagType.INTEL, type: MagType.INTEL } },
  { id: 15, value: { name: MagType.MISCELLANEOUS, type: MagType.MISCELLANEOUS } },
];

export default function CreatingPersona(props: Props) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(0);
  const [pm, setPm] = useState(0);
  const [conviction, setConviction] = useState("");
  const [naturalSkill, setNaturalSkill] = useState("");
  const [magTypeIndex, setMagTypeIndex] = useState<number>(0);
  const [secondMagTypeIndex, setSecondMagTypeIndex] = useState<number>(0);
  const [thirdMagTypeIndex, setThirdMagTypeIndex] = useState<number>(0);

  let types = [
    MagType.PHYSICAL,
    MagType.FIRE,
    MagType.ICE,
    MagType.WIND,
    MagType.LIGHTNING,
    MagType.LIGHT,
    MagType.DARKNESS,
    MagType.OMNIPOTENT,
    MagType.HEALING,
    MagType.DEFENSE,
    MagType.BUFF,
    MagType.DEBUFF,
    MagType.STATUS,
    MagType.INTEL,
    MagType.MISCELLANEOUS,
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TextInput
            placeholder="Nome da persona"
            style={styles.inputStyle}
            onChangeText={(personaName) => {
              setName(personaName);
            }}
          />
          <TextInput
            placeholder="Nivel"
            style={styles.boxInput}
            onChangeText={(personaLevel) => setLevel(Number(personaLevel))}
          />

          <TextInput
            placeholder="PM"
            inputMode="numeric"
            style={styles.boxInput}
            onChangeText={(pm) => setPm(Number(pm))}
          />
        </View>

        <View
          style={{
            // flexDirection: "row",
            margin: 20,
          }}
        >
          <TextInput
            multiline={true}
            numberOfLines={10}
            placeholder="Convicção"
            style={styles.textBox}
            onChangeText={(conviction) => setConviction(conviction)}
          />

          <TextInput
            multiline={true}
            numberOfLines={10}
            placeholder="Habilidade natural"
            style={styles.textBox}
            onChangeText={(naturalSkill) => setNaturalSkill(naturalSkill)}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            margin: 20,
          }}
        >
          <Picker
            style={{ width: 150, height: 50 }}
            selectedValue={magTypeIndex}
            onValueChange={(i) => setMagTypeIndex(i)}
          >
            {selectMagicOptions.map(({ id, value }) => (
              <Picker.Item key={id} value={id} label={value.name} />
            ))}
          </Picker>

          <Picker
            style={{ width: 150, height: 50 }}
            selectedValue={secondMagTypeIndex}
            onValueChange={(i) => setSecondMagTypeIndex(i)}
          >
            {selectMagicOptions.map(({ id, value }) => (
              <Picker.Item key={id} value={id} label={value.name} />
            ))}
          </Picker>

          <Picker
            style={{ width: 150, height: 50 }}
            selectedValue={thirdMagTypeIndex}
            onValueChange={(i) => setThirdMagTypeIndex(i)}
          >
            {selectMagicOptions.map(({ id, value }) => (
              <Picker.Item key={id} value={id} label={value.name} />
            ))}
          </Picker>

{/* 
          <Picker
            style={{ width: 150, height: 50 }}
            selectedValue={secondMagTypeIndex}
            onValueChange={(i) => setSecondMagTypeIndex(i)}
          >
            {Object.keys(MagType).map((magType, index) => (
              <Picker.Item key={index} value={index} label={magType} />
            ))}
          </Picker>

          <Picker
            style={{ width: 150, height: 50 }}
            selectedValue={thirdMagTypeIndex}
            onValueChange={(i) => setThirdMagTypeIndex(i)}
          >
            {Object.keys(MagType).map((magType, thirdMagTypeIndex) => (
              <Picker.Item
                key={thirdMagTypeIndex}
                value={thirdMagTypeIndex}
                label={magType}
              />
            ))}
          </Picker> */}
        </View>

        <Pressable
          style={styles.criarBtn}
          onPress={() => {
            if (!magTypeIndex) {
              console.log("magia nao selecionada");
              return;
            }

            let mag = selectMagicOptions[magTypeIndex].value.type!;
            let secondMag = selectMagicOptions[secondMagTypeIndex].value.type!;
            let thirdMag = selectMagicOptions[thirdMagTypeIndex].value.type!;

            let persona = new Persona(
              name,
              Arcanas.CHARIOT,
              conviction,
              naturalSkill,
              pm,
              mag,
              secondMag,
              thirdMag
            );
            persona.setPersonaLevel(level);
            

            props.navigation.navigate("StatusScreen", {
              createdPersona: persona,
            });
          }}
        >
          <Text>Criar Persona</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#084d6e",
  },
  checkBoxContainer: {
    marginBottom: 20,
  },
  checkBoxStyle: {
    alignSelf: "center",
  },
  inputStyle: {
    width: 150,
    borderWidth: 2,
    borderColor: "#FDED00",
    margin: 15,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  boxInput: {
    height: 50,
    width: 50,
    borderWidth: 2,
    margin: 15,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderColor: "#FDED00",
  },
  criarBtn: {
    width: "20%",
    height: 50,
    borderWidth: 2.5,
    borderColor: "#FDED00",
    borderRadius: 20,
    paddingRight: 40,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  textBox: {
    width: 250,
    borderWidth: 2,
    borderColor: "#FDED00",
    margin: 15,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
});
