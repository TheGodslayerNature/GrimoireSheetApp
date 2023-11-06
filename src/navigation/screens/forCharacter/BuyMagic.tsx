import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Accordion from "../../../components/accordion/Accordion";
import ListMagics from "../../../components/accordion/ListMagics";
import { Icon } from "@rneui/themed";

//Usar Accordion para o drop

export default function BuyMagic(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const { character } = props.route.params;

  return (
    <View style={styles.container}>
      <View>
        <Modal transparent={true} animationType="slide" visible={modalVisible}>
          <View style={styles.ModalContainer}>
            <Pressable
              style={styles.outModalBtn}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Icon name="x" type="octicon" />
            </Pressable>
            <Text style={styles.titleStyle}>Adicionar Magias</Text>

            <Accordion chrac={character} />
          </View>
        </Modal>
      </View>

      <View>
        <View style={styles.topViewContainer}>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.addBtn}
          >
            <Text>Comprar</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.listMagicsContainer}>
        <ListMagics character={character} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#084d6e",
  },
  titleStyle: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ModalContainer: {
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#FDED00",
  },
  outModalBtn: {
    marginLeft: 300,
  },
  addBtn: {
    height: 40,
    width: 80,
    backgroundColor: "#FDED00",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  topViewContainer: {},
  listMagicsContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
});
