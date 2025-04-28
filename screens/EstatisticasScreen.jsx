import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Title, Text } from "react-native-paper";

const estatisticas = {
  totalPublico: 3404252,
  totalJogos: 64,
  totalGols: 172,
  totalCartoes: 301,
  totalCartoesAmarelos: 288,
  totalCartoesVermelhos: 13,
  totalEstadios: 8,
  totalSelecoes: 32,
  totalJogadores: 831,
};

const calcularMediaGolsPorJogo = (totalGols, totalJogos) =>
  (totalGols / totalJogos).toFixed(2);
const calcularMediaPublicoPorJogo = (totalPublico, totalJogos) =>
  (totalPublico / totalJogos).toFixed(2);
const calcularMediaCartoesPorJogo = (totalCartoes, totalJogos) =>
  (totalCartoes / totalJogos).toFixed(2);

export default function EstatisticasScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Estatísticas da Copa 2022</Title>
          <Text>Total de Gols: {estatisticas.totalGols}</Text>
          <Text>Total de Jogos: {estatisticas.totalJogos}</Text>
          <Text>Total de Público: {estatisticas.totalPublico}</Text>
          <Text>Total de Cartões: {estatisticas.totalCartoes}</Text>
          <Text>
            Total de Cartões Amarelos: {estatisticas.totalCartoesAmarelos}
          </Text>
          <Text>
            Total de Cartões Vermelhos: {estatisticas.totalCartoesVermelhos}
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Médias</Title>
          <Text>
            Média de Gols por Jogo:{" "}
            {calcularMediaGolsPorJogo(
              estatisticas.totalGols,
              estatisticas.totalJogos
            )}
          </Text>
          <Text>
            Média de Público por Jogo:{" "}
            {calcularMediaPublicoPorJogo(
              estatisticas.totalPublico,
              estatisticas.totalJogos
            )}
          </Text>
          <Text>
            Média de Cartões por Jogo:{" "}
            {calcularMediaCartoesPorJogo(
              estatisticas.totalCartoes,
              estatisticas.totalJogos
            )}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  card: {
    marginBottom: 20,
  },
});
