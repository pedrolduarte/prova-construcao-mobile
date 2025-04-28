import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text, Title } from "react-native-paper";

const copa = {
  nome: "Copa do Mundo FIFA 2022",
  imagem:
    "https://i.pinimg.com/236x/00/63/15/00631561f4895a630508c2b0d0bdb4d1.jpg",
  local: "Qatar",
  organizacao: "FIFA",
  mascote: "La'eeb",
  edicao: 22,
  ano: 2022,
  campeao: "Argentina",
  viceCampeao: "França",
};

export default function CopaScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={styles.titulo}>
          {copa.nome}
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Sobre a Copa</Title>
            <Text>{`A Copa do Mundo FIFA ${copa.ano} foi realizada no ${copa.local}. Organizada pela ${copa.organizacao}, foi a ${copa.edicao}ª edição do torneio.`}</Text>
            <Text>{`O mascote da Copa foi ${copa.mascote}.`}</Text>
          </Card.Content>
          <Card.Cover source={{ uri: copa.imagem }} />
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Campeão e Vice-Campeão</Title>
            <Text>{`Campeão: ${copa.campeao}`}</Text>
            <Text>{`Vice-Campeão: ${copa.viceCampeao}`}</Text>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  titulo: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    marginBottom: 20,
  },
});
