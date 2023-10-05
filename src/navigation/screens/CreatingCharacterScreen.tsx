import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React from 'react'

const arcanas:String[] = ["Fool", "Mage", "Priestess"];
const klasses:String[] = ["Carta-Coringa", "Emergente", "Sombra", "Supressor", "Tochas"];

export default function CreatingCharacterScreen({navigation}:any) {
  return (
    <View style={styles.container}>

        <View style={styles.inputContainerStyle}>
        <TextInput placeholder='Digite seu Nome' style={styles.inputStyle}/>
        <TextInput placeholder='Jogador'style={styles.inputStyle}/>

        <Picker style={{width: 150, height: 50}}>
            {arcanas.map((arc) => ( 
                <Picker.Item key={0} value={""} label={arc.toString()}/>
            ))}
        </Picker>
        <TextInput placeholder='Digite seu nivel' inputMode='numeric'style={styles.inputStyle}/>

        <Picker style={{width: 150, height: 50}}>
            {klasses.map((kla) => (
                <Picker.Item key={0} value={""} label={kla.toString()}/>
            ))}
        </Picker>

        <TextInput placeholder='Pontos de vida'style={styles.inputStyle}/>

        <TextInput placeholder='Pontos de energia'style={styles.inputStyle}/>

        </View>

        <TouchableOpacity style={styles.btnCriar}
        onPress={ () => navigation.navigate("CreatingPersona")}
        >
            <Text>Criar Ficha de Personagem</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputStyle: {
        width: 150,
        borderWidth: 1.5,
        borderColor: 'gold',
    },
    btnCriar: {
        padding: 10,
        width: 200,
        backgroundColor: 'gold'
    }
  })