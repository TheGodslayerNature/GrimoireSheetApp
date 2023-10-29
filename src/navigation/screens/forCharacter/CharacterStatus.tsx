import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import ThemedCard from "@rneui/themed/dist/Card";
import React, { useEffect, useState } from "react";
import Bar from "../../../util/bar";
import { getCharacter } from "../../../util/Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CharacterStatus(props: any) {
  const { character } = props.route.params;
  const [life, setLife] = useState(character.lifePoints);
  const [energy, setEnergy] = useState(character.energy);
  const [aspectPoint, setAspectPoint] = useState(character.aspectPoints);

  useEffect(() => {
    (async () => {
      try {
        const value = await getCharacter(character.user.userName);
        console.log(value);
      } catch (error) {
        // Error retrieving data
        console.log(error);
      }
    })();
  }, []);

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
        {/*
        //Modificando a vida funcionando ainda precisa de modificação

*/}
        <Bar
          color="red"
          currentPoints={life}
          totalPoints={character.lifePoints}
          label={"vida"}
          updatePoints={async () => {
            let data = await getCharacter(character.user.userName);
            data.lifePoints--;
            AsyncStorage.setItem(data.user.userName, JSON.stringify(data));
          }}
        />
        <Bar
          color="blue"
          currentPoints={energy}
          totalPoints={character.energy}
          label={"energia"}
          updatePoints={setEnergy}
        />
        <Bar
          color="purple"
          currentPoints={aspectPoint}
          totalPoints={character.aspectPoints}
          label={"Pontos de aspecto"}
          updatePoints={setAspectPoint}
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
