import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MagType } from "../../model/mag/Mag";
import { Picker } from "@react-native-picker/picker";

const selectMagicOptions = [
  { id: 0, value: { name: "Selecione um tipo de magia", MagType: [] } },
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

export default function MagicPicker({ update, magTypeIndex }: Props) {
  return (
    <View style={styles.container}>
      <Pressable>
        <Picker
          style={styles.pickerStyle}
          selectedValue={magTypeIndex}
          onValueChange={(i) => update(i)}
        >
          {selectMagicOptions.map(({ id, value }) => (
            <Picker.Item key={id} value={id} label={value.name} />
          ))}
        </Picker>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickerStyle: {
    // width: 150,
    height: 40,
    margin: 10,
  },
});

type Props = {
  update(value: number): void;
  magTypeIndex: number;
};
