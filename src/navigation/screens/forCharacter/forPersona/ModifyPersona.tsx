import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import PersonaInformation from "../../../../components/Persona/PersonaInformation";
import MagicPicker from "../../../../components/MyPickers/MagicPicker";
import { Persona } from "../../../../model/persona/Persona";
import { Character } from "../../../../model/character/Character";
import { MagType } from "../../../../model/mag/Mag";
import { Picker } from "@react-native-picker/picker";

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
  {
    id: 15,
    value: { name: MagType.MISCELLANEOUS, type: MagType.MISCELLANEOUS },
  },
];

export default function ModifyPersona(props: any) {
  const { persona } = props.route.params;
  const { character } = props.route.params;
  const [modalState, setModalState] = useState(false);
  const [magTypeIndex, setMagTypeIndex] = useState<number>(0);

  return (
    <View style={styles.container}>
      <PersonaInformation persona={persona} />

      <Modal visible={modalState} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Level"
            style={styles.inputStyle}
            onChangeText={(point) => {
              character.persona.forEach((perso: Persona) => {
                if (perso.name == persona.name) {
                  perso.personaLevel = Number(point);
                }
              });
            }}
          />
          <TextInput
            placeholder="Pontos de magia"
            style={styles.inputStyle}
            onChangeText={(value) => {
              character.persona.forEach((perso: Persona) => {
                if (perso.name == persona.name) {
                  perso.pm = Number(value);
                }
              });
            }}
          />

          <Text>Adicione mais tipos de magia</Text>
          <MagicPicker
            magTypeIndex={magTypeIndex}
            update={(i) => {
              setMagTypeIndex(i);
              console.log(i);
              let mag = selectMagicOptions[i].value.type!;
              character.persona.forEach((perso: Persona) => {
                if (perso.name == persona.name) {
                  perso.magTypes.push(mag);
                }
              });
            }}
          />

          <Pressable
            onPress={() => {
              setModalState(!modalState);
              console.log(character);
            }}
          >
            <Text>Voltar</Text>
          </Pressable>
        </View>
      </Modal>

      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => setModalState(!modalState)}
        >
          <Text>Editar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084d6e",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
  },
  inputStyle: {
    width: "42%",
    height: "5%",
    borderWidth: 1.3,
    borderColor: "yellow",
    margin: 5,
  },
  pickerStyle: {
    height: 40,
    margin: 10,
  },
  btnContainer: {
    
  },
  btn: {
    borderRadius: 5,
    height: 20,
    width: 70,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#FDED00",
    alignItems: "center",
  },
});
