import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import ThemedCard from "@rneui/themed/dist/Card";
import React, { useEffect, useState } from "react";
import Bar from "../../../util/bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CharacterInformation from "../../../components/characters/CharacterInformation";

export default function CharacterStatus(props: any) {
  const { character } = props.route.params;
  const [life, setLife] = useState(character.lifePoints);
  const [currentLife, setCurrentLife] = useState<number>(character.currentLife);
  const [energy, setEnergy] = useState(character.energy);
  const [aspectPoint, setAspectPoint] = useState(character.aspectPoints);

  return (
    <View style={styles.container}>
      <View>
        <CharacterInformation character={character} />

        <Bar
          color="red"
          currentPoints={character.currentLife}
          totalPoints={character.lifePoints}
          label={"vida"}
          updatePoints={async (point: number) => {
            setCurrentLife(point);
            character.currentLife = point;
            await AsyncStorage.setItem(
              character.user.userName,
              JSON.stringify(character)
            );
          }}
        />
        <Bar
          color="blue"
          currentPoints={character.currentEnergy}
          totalPoints={character.energy}
          label={"energia"}
          updatePoints={async (point: number) => {
            setEnergy(point);
            character.currentEnergy = point;
            await AsyncStorage.setItem(
              character.user.userName,
              JSON.stringify(character)
            );
          }}
        />
        <Bar
          color="purple"
          currentPoints={character.currentAspectPoint}
          totalPoints={character.aspectPoints}
          label={"Pontos de aspecto"}
          updatePoints={async (point: number) => {
            setAspectPoint(point);
            character.currentAspectPoint = point;
            await AsyncStorage.setItem(
              character.user.userName,
              JSON.stringify(character)
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084d6e",
  },
  imgPortrait: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  characterInformationContainer: {},
  informationTextStyle: {
    fontSize: 14,
  },
});
