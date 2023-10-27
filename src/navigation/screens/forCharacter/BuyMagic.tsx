import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Mag, MagType } from "../../../components/mag/Mag";
import Accordion from "../../../components/accordion/Accordion";

//Usar Accordion para o drop

export default function BuyMagic() {
  const [modalVisible, setModalVisible] = useState(false);

  const categoria: string = "Atordoar, Status, Físico(A)";
  const alcance: string = "1 alvo dentro de 5 metros";
  const efeito: string =
    "Acerto: FORd6 dano Físico e Chance de Atordoar: 20%+5% para cada ponto da rolagem de acerto acima da esquiva do inimigo.";
  const descricao: string = "Um golpe vertical mirando no topo da cabeça.";

  let magia: Mag = new Mag(
    MagType.PHYSICAL,
    1,
    "Rachador",
    categoria,
    alcance,
    efeito,
    descricao
  );

  let magias: Mag[] = [magia];

  // let list2: string[] = ["Brazil", "EUA", "CHINA"]

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Adicionar magias</Text>
        </View>

        <View style={{ flexDirection: "row" }}>

          <Accordion/>

        </View>
        <Pressable
          style={{ borderWidth: 10, borderColor: "#FDED00" }}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <Text>Fechar Modal</Text>
        </Pressable>

      </Modal>
      <View style={{ flexDirection: "row" }}>
        <Text>Magic</Text>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.addBtn}
        ><Text> ++</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  addBtn: {
    marginLeft: 60,
    height: 20,
    width: 80,
    backgroundColor: "#FDED00",
    borderWidth: 2,
    borderRadius: 5,
  },
});
