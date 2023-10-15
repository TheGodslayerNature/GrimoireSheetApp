import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, {useState} from "react";
import MagTypes from "../../components/magTypes/MagTypes";
import personagens from "../../data/personagens.json";
import { Persona } from "../../components/persona/Persona";
import { Arcana } from "components/character/Character";
import { Arcanas } from "../../components/character/Arcanas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MagType } from "../../components/mag/Mag";


export default function CreatingPersona({navigation}:any) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(0);
  const [magType, setMagType] = useState();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TextInput placeholder="Nome da persona" style={styles.inputStyle} 
        onChangeText={(personaName) => {
          setName(personaName); 
         }}
        />
        <TextInput placeholder="Nivel" style={styles.boxInput} 
        onChangeText={(personaLevel) => setLevel(Number(personaLevel))}
        />

        <TextInput
          placeholder="PM"
          inputMode="numeric"
          style={styles.boxInput}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 20,
        }}
      >
        <TextInput placeholder="Convicção" style={styles.inputStyle} />
        <TextInput placeholder="Habilidade natural" style={styles.inputStyle} />

      </View>

      <View
        style={{
          flexDirection: "column",
          margin: 20,
        }}
      >
        <MagTypes></MagTypes>
        <MagTypes></MagTypes>
        <MagTypes></MagTypes>
      </View>

      <Pressable style={styles.criarBtn}
      onPress={() => {

        let persona = new Persona(name,Arcanas.CHARIOT,"","",6, MagType.BUFF);

       AsyncStorage.getItem("personas").then((ids) => {
       let personas = ids ? (JSON.parse(ids!) as Array<string>) : [];
       personas.push(persona.name);
       console.log(personas);

       AsyncStorage.multiSet([
              ["personas", JSON.stringify(personas)],
              [persona.name, JSON.stringify(persona)],
            ]).then(() => console.log("saved!!"));
       })

        navigation.navigate("Character")
      }}
      >
        <Text>Criar Persona</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#084d6e',
  },
  checkBoxContainer: {
    marginBottom: 20,
  },
  checkBoxStyle: {
    alignSelf: "center",
  },
  inputStyle: {
    width: 150,
    borderWidth: 1.5,
    borderColor: "gold",
    margin: 15,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: 'bold',
  },
  boxInput: {
    height: 50,
    width: 50,
    borderWidth: 1.5,
    margin: 15,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderColor: "gold",
  },
  criarBtn: {
    width: '20%',
    height: 50,
    borderWidth: 2.5,
    borderColor: "gold",
    borderRadius: 20,
    paddingRight: 40,
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
