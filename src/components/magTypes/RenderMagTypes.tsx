import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { MagType } from "../../model/mag/Mag";

type Props = {
  types: MagType[];
};
export default function RenderMagTypes(props: Props) {
  return (
    <View>
      <Text>
        Tipos : <FlatList numColumns={2} data={props.types} renderItem={({item}) => (
          <Text style={styles.textStyle}> {item}      </Text>
        )} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14
  }
})
