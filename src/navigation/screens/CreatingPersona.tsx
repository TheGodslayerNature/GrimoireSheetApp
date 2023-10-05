import { View, Text, StyleSheet, TextInput, CheckBox} from "react-native";

import React from "react";

export default function CreatingPersona() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" style={styles.inputStyle}/>
      <TextInput placeholder="Nivel" style={styles.inputStyle}/>
      <TextInput placeholder="Convicção" style={styles.inputStyle}/>
      <TextInput placeholder="habilidade natural" style={styles.inputStyle}/>
      <TextInput placeholder="Pontos de Magia" inputMode="numeric" style={styles.inputStyle}/>

      <View style={styles.checkBoxContainer}>
      <CheckBox style={styles.checkBoxStyle}/><Text >PHYSICAL</Text>
      <CheckBox /><Text>Fire</Text>
      <CheckBox /><Text>ICE</Text>
      <CheckBox /><Text>WIND</Text>
      <CheckBox /><Text>LIGHTNING</Text>
      <CheckBox /><Text>LIGHT</Text>
      <CheckBox /><Text>DARKNESS</Text>
      <CheckBox /><Text>OMNIPOTENT</Text>
      <CheckBox /><Text>HEALING</Text>
      <CheckBox /><Text>DEFENSE</Text>
      <CheckBox /><Text>BUFF</Text>
      <CheckBox /><Text>DEBUFF</Text>
      <CheckBox /><Text>STATUS</Text>
      <CheckBox /><Text>INTEL</Text>
      <CheckBox /><Text>MISCELLANEOUS</Text>
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
