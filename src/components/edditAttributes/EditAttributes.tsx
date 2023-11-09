import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import RenderStatus from "../../components/renderStatus/RenderStatus";

type Props = {
    onPress: () => void; 
}

export default function EditAttributes(props:Props) {
  const [statusPoints, setStatusPoints] = useState<Array<number>>();

  return (
    <View>
        <RenderStatus submit={setStatusPoints} />

        <Pressable onPress={props.onPress}>
            <Text>Voltar</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
    width: "100%",
    borderWidth: 2,
    borderColor: "yellow",
    alignItems: "center",
  },
  attContainer: {},
});
