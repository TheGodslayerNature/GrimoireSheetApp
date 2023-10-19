import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import * as Progress from 'react-native-progress';
import ThemedCard from "@rneui/themed/dist/Card";
import React, { useState } from "react";

export default function CharacterStatus(props: any) {
  const [life,setLife] = useState(42);
  const { character } = props.route.params;

  return (
    <View style={styles.container}>
      <ThemedCard>
        <Image
          style={styles.imgPortrait}
          source={require("../../../assets/imgs/anne.jpg")}
        />
        <Text>Nome: {character.user.userName}</Text>
        <Text>nivel: {character.user.userLevel}</Text>
        <Text>classe: {character.klass.name}</Text>
        <Text>Arcana: {character.arcanas.arcanaName}</Text>
        <Text>Redução de dano: {character.damageReduction}</Text>
      </ThemedCard>

      <View>
        <View style={{flexDirection: 'row'}}>
          <Pressable style={styles.btn}
          onPress={ () => setLife(life - 1)}
          >
            <Text>-1</Text>
          </Pressable>
          <Progress.Bar progress={0.5} width={200} style={{}}>
          <Text>VIDA ATUAL : {character.lifePoints}</Text>
          </Progress.Bar>
          <Pressable style={styles.btn}
          // onPress={ () => setLife(life + 1)}
          onPress={ () => console.log(props.route.params)}
          >
            <Text>+1</Text>
          </Pressable>
        </View>
        <Text>ENERGIA ATUAL: 4</Text>
        <Text>PONTOS DE ASPECTOS ATUAL: 4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgPortrait: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  btn: {
    borderWidth: 5,
    borderColor: '#FDED00',
    margin: 'auto'
  }
});
