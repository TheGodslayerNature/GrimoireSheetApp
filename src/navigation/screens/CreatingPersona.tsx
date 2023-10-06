import { View, Text, StyleSheet, TextInput} from "react-native";
import { Picker } from '@react-native-picker/picker'
import React from "react";

export default function CreatingPersona() {
  const magicTypes:String[] = ["Fire", "Ice"];
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" style={styles.inputStyle}/>
      <TextInput placeholder="Nivel" style={styles.inputStyle}/>
      <TextInput placeholder="Convicção" style={styles.inputStyle}/>
      <TextInput placeholder="habilidade natural" style={styles.inputStyle}/>
      <TextInput placeholder="Pontos de Magia" inputMode="numeric" style={styles.inputStyle}/>

      <View style={styles.checkBoxContainer}>
      <Picker style={{width: 150, height: 50}}>
            {magicTypes.map((arc) => ( 
                <Picker.Item key={0} value={""} label={arc.toString()}/>
            ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkBoxContainer: {
    marginBottom: 20,
  },
  checkBoxStyle: {
    alignSelf: 'center',
  },
  inputStyle: {
    width: 150,
    borderWidth: 1.5,
    borderColor: 'gold',
  }
});
