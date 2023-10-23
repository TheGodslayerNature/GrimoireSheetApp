import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import * as Progress from "react-native-progress";
import ThemedCard from "@rneui/themed/dist/Card";
import React, { useState } from "react";
import Bar from "../../../util/bar";
import { Character } from "components/character/Character";

export default function CharacterStatus(props: any) {
    const { character } = props.route.params;
    const [life, setLife] = useState(character.lifePoints);
    const [energy, setEnergy] = useState(character.energy);
    const [aspectPoint, setAspectPoint] = useState(character.aspectPoints);
  
  return (
    <View style={styles.container}>
    <ThemedCard>
        <Image
          style={styles.imgPortrait}
          source={require("../../../../assets/imgs/anne.jpg")}
        />
        <Text>Nome: {character.user.userName}</Text>
        <Text>nivel: {character.user.userLevel}</Text>
        <Text>classe: {character.klass.name}</Text>
        <Text>Arcana: {character.arcanas.arcanaName}</Text>
        <Text>Redução de dano: {character.damageReduction}</Text>
      </ThemedCard>

      <View>
        <Bar
            currentPoints={life}
            totalPoints={character.lifePoints}
          label={"vida"}
          updatePoints={setLife}
        />
        <Bar
            currentPoints={energy}
            totalPoints={character.energy}
          label={"energia"}
          updatePoints={setEnergy}
        />
        <Bar
            currentPoints={aspectPoint}
            totalPoints={character.aspectPoints}
          label={"Pontos de aspecto"}
          updatePoints={setAspectPoint}
        />
        {/* <Bar
          point={"energia :" + energy}
          removePoint={() => setEnergy(energy - 1)}
          putPoint={() => setEnergy(energy + 1)}
        />
        <Bar
          point={"Pontos de aspectos: " + aspectPoint}
          removePoint={() => setAspectPoint(aspectPoint - 1)}
          putPoint={() => setAspectPoint(aspectPoint + 1)}
        /> */}
      </View>
    </View>
  )
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
      borderColor: "#FDED00",
      margin: "auto",
    },
  });
  