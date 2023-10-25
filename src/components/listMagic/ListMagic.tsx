import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function ListMagic(props:any) {
  return (
    <View>
      
        <View style={{flexDirection: 'row'}}>
          <Text>Nome: {props.magia.name}</Text>
          <Pressable style={styles.addBtn}>
            <Text>Adicionar</Text>
          </Pressable>
        </View>

        <Text>----------------</Text>
        <Text>tipo de magia: {props.magia.magType}</Text>
        <Text>categoria: {props.magia.categoria}</Text>
        <Text>Tier: {props.magia.tier}</Text>
        <Text>Alcance: {props.magia.alcance}</Text>
        <Text>----------------</Text>
        <Text>efeito: {props.magia.efeito}</Text>
        <Text>descrição: {props.magia.descricao}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    addBtn: {
        height: 20,
        width: 80,
        backgroundColor: "#FDED00",
        borderWidth: 2,
        borderRadius: 5,
    }
})