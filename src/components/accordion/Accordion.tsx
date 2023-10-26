import { View, Text } from "react-native";
import React, { useState} from "react";
import { ListItem } from "@rneui/themed";
import { Icon } from "react-native-elements";
import { Mag, MagType } from "../mag/Mag";
import magias from "../mag/mags.json"

const categoria: string = "Atordoar, Status, Físico(A)";
const alcance: string = "1 alvo dentro de 5 metros";
const efeito: string =
  "Acerto: FORd6 dano Físico e Chance de Atordoar: 20%+5% para cada ponto da rolagem de acerto acima da esquiva do inimigo.";
const descricao: string = "Um golpe vertical mirando no topo da cabeça.";

let magia: Mag = new Mag(
  MagType.PHYSICAL,
  1,
  "Rachador",
  categoria,
  alcance,
  efeito,
  descricao
);

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
          <ListItem key={i} onPress={() => {console.log("ei")}} bottomDivider>
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
