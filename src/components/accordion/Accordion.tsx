import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { Mag, MagType } from "../../model/mag/Mag";
import magias from "../../model/mag/mags.json";
import { Character } from "../../model/character/Character";
import { saveCharacter } from "../../util/Storage";

let tier1: Mag[] = magias.physical.Tier1 as Mag[];

type Props = {
  chrac:Character;
}

export default function Accordion({chrac}:Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <ListItem.Accordion
        content={
          <>
            {/* <Icon name="place" size={30} /> */}
            <ListItem.Content>
              <ListItem.Title>{tier1[0].name}</ListItem.Title>
            </ListItem.Content>
          </>
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
              {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
              <Pressable style={styles.btn}
              onPress={() => { 
                chrac.persona[0].magDeck.push(tier1[0]);
                saveCharacter(chrac);
              }}
              >
                <Text>Adiconar</Text>
              </Pressable>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ListItem.Accordion>
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
