import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity,StatusBar} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import MultiSelect from 'react-native-multiple-select'

import StatusPoints from './src/components/statusPoints/statusPoints';

export default function App() {
  const [userLevel, setUserLevel] = useState(0);
  const [userName, setUserName] = useState('');

    classes = [
    { name: "coringa" }, 
    { name: "emergente"}, 
    { name: "sombra"},
    { name: "supressor"}
  ];

  onSelectedItemsChange = selectItems => {
    classes = [];
  }

    var valor = 0;
  return (
    <SafeAreaView style= {styles.container}>
    <StatusBar/>

    <TextInput
    style={styles.characterInput}
    placeholder='Nome do personagem'
    onChangeText={(name) => setUserName(name)}
    />

    <TextInput
    style={styles.characterInput}
    placeholder='Nivel do personagem'
    inputMode='numeric'
    onChangeText={(level) => setUserLevel(level)}
    />

    <MultiSelect
    items={this.classes}
    onSelectedItemsChange={this.onSelectedItemsChange}
    selectText='Escolha a classe'
    />

    {/* Procurar como funciona os input multiSelect */}


    {/* <MultiSelect style={{flex: 1}}
          items={classes}
          selectText="Escolha uma Classe"
    /> */}


    <StatusPoints
    statusName="FOR"
    points={valor}
    />
    <StatusPoints
    statusName="TEC"
    />
    <StatusPoints
    statusName="MAG"
    />
    <StatusPoints
    statusName="AGI"
    />  
    <StatusPoints
    statusName="SOR"
    />

    <Text>Quantidade de pontos adicionadas = {valor}</Text>

    <TouchableOpacity style={styles.btn}
    onPress={console.log(valor)}
    >
    <Text>Adicinar Pontos</Text>

    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterInput: {
    height: 50,
    width: '80%',
    borderWidth: 2,
    textAlign: 'center',
    margin: 10
  },
  statusPoints: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    borderWidth: 2,
    textAlign: 'center'
  },
  btn: {
    height: 50,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "black",
    margin: 10
  }
});
