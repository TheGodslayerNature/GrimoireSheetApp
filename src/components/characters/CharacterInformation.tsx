import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ThemedCard from "@rneui/themed/dist/Card";
import { Character } from "../../model/character/Character";


type Props = {
    character:Character;
}

export default function CharacterInformation({character}:Props) {
  return (
    <View style={styles.container}>
      <ThemedCard>
        <Image
          style={styles.imgPortrait}
          source={require("../../../assets/imgs/anne.jpg")}
        />
        <View style={styles.characterInformationContainer}>
          <Text style={styles.informationTextStyle}>
            Nome: {character.user.userName}
          </Text>
          <Text style={styles.informationTextStyle}>
            Nivel: {character.user.userLevel}
          </Text>
          <Text style={styles.informationTextStyle}>
            Classe: {character.klass.name}
          </Text>
          <Text style={styles.informationTextStyle}>
            Arcana: {character.arcanas.arcanaName}
          </Text>
          <Text style={styles.informationTextStyle}>
            Redução de dano: {character.damageReduction}
          </Text>
          <Text style={styles.informationTextStyle}>
            Movimentação: {character.user.statusPoints[4] + 3}
          </Text>
          <Text style={styles.informationTextStyle}>
            Iniciativa: 1D12 + {character.user.statusPoints[4]}
          </Text>
        </View>
      </ThemedCard>
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
  characterInformationContainer: {},
  informationTextStyle: {
    fontSize: 14,
  },
});
