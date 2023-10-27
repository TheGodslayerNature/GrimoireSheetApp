import { View, Text } from "react-native";
import React, { useState} from "react";
import { ListItem } from "@rneui/themed";
import { Mag, MagType } from "../../model/mag/Mag";
import magias from "../../model/mag/mags.json"

let tier1:Mag[] = magias.physical.Tier1 as Mag[];

export default function Accordion() {
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
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ListItem.Accordion>
    </View>
  );
}
