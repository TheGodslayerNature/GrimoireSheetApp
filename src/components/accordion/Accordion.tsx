import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { Mag, MagType } from "../../model/mag/Mag";
import magias from "../../model/mag/mags.json";
import { Character } from "../../model/character/Character";
import { saveCharacter } from "../../util/Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

let tier1: Mag[] = magias.physical.Tier1 as Mag[];

type Props = {
  chrac: Character;
};

export default function Accordion({ chrac }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <FlatList
      data={tier1}
      renderItem={({item, index}) => (
        <ListItem.Accordion
        content={
          <ListItem.Title>{item.name}</ListItem.Title>
        }
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)}
        >
          <ListItem.Content>
          <ListItem.Title>{"Tier: " + item.tier}</ListItem.Title>
          <Text>{item.efeito}</Text>
          <Pressable onPress={() => {}}><Text>Adicionar</Text></Pressable>
          </ListItem.Content>
        </ListItem.Accordion>
      )}
      />
      {/* <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title>
              <FlatList
                data={tier1}
                renderItem={({ item, index }) => <Text>{item.name}
                </Text>}
              />
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        {tier1.map((l, i) => (
          <ListItem key={i}>
            <ListItem.Content>
              <ListItem.Title>{"Tier: " + l.tier}</ListItem.Title>
              <Text>{l.efeito}</Text>
              <Pressable
                style={styles.btn}
                onPress={async () => {
                  chrac.persona[0].magDeck.push(tier1[0]);
                  await AsyncStorage.setItem(
                    chrac.user.userName,
                    JSON.stringify(chrac)
                  );
                }}
              >
                <Text>Adiconar</Text>
              </Pressable>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion> */}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 90,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
  },
});
