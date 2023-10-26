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
import ListMagic from "../../../components/listMagic/ListMagic";

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

  let magias:Mag[] = [magia]

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Adicionar magias</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Pressable
          onPress={() => {}}
          >
          <Text>Nome: {magia.name}</Text>
          </Pressable>
          <Pressable style={styles.addBtn}>
            <Text>Adicionar</Text>
          </Pressable>
        </View>

        <View>
        <Text>----------------</Text>
        <Text>tipo de magia: {magia.magType}</Text>
        <Text>categoria: {magia.categoria}</Text>
        <Text>Tier: {magia.tier}</Text>
        <Text>Alcance: {magia.alcance}</Text>
        <Text>----------------</Text>
        <Text>efeito: {magia.efeito}</Text>
        <Text>descrição: {magia.descricao}</Text>

        </View>

       {/* <FlatList
       data={magias}
       renderItem={({item}) => <ListMagic magia={item}/>}
       /> */}
        <Pressable
          style={{ borderWidth: 10, borderColor: "#FDED00" }}
          onPress={() => { setModalVisible(false)}}
        >
          <Text>Fechar Modal</Text>
        </Pressable>
        
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <Text>Magic</Text>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={{ borderWidth: 10, borderColor: "#FDED00" }}
        >
          <Text> Adicionar</Text>
        </Pressable>
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
