import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import ThemedCard from "@rneui/themed/dist/Card";
import React, { useEffect, useState } from "react";
import Bar from "../../../util/bar";
import { getCharacter } from "../../../util/Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CharacterStatus(props: any) {
  const { character } = props.route.params;
  const [life, setLife] = useState(character.lifePoints);
  const [currentLife, setCurrentLife] = useState<number>(character.currentLife);
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
          color="red"
          currentPoints={character.currentLife}
          totalPoints={character.lifePoints}
          label={"vida"}
          lessPoints={async () => {
            let data = await getCharacter(character.user.userName);
            let v = character.currentLife
            setCurrentLife(--v);
            data.currentLife = --character.currentLife;
            console.log(`data : ${data.currentLife}`)
            AsyncStorage.setItem(data.user.userName, JSON.stringify(data))
          }}
        />
        <Bar
          color="blue"
          currentPoints={energy}
          totalPoints={character.energy}
          lessPoints={() => {}}
          label={"energia"}
          // updatePoints={setEnergy}
        />
        <Bar
          color="purple"
          currentPoints={aspectPoint}
          totalPoints={character.aspectPoints}
          label={"Pontos de aspecto"}
          lessPoints={() => {}}
          // updatePoints={setAspectPoint}
        />
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
    borderColor: "#FDED00",
    margin: "auto",
  },
});
