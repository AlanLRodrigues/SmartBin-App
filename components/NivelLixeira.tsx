import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";

const NivelLixeira = () => {
  const [nivel, setNivel] = useState<number>(0);

  // Função para buscar o nível da lixeira
  const fetchNivel = async () => {
    try {
      const response = await fetch(
        'https://io.adafruit.com/api/v2/mikke5277/feeds/sensor-nivel-lixo/data/last',
        {
          // headers: { 'X-AIO-Key': 'YOUR_AIO_KEY' },
        }
      );
      const data = await response.json();
      const valor = parseFloat(data.value);
      setNivel(isNaN(valor) ? 0 : valor); // protege contra NaN
    } catch (error) {
      console.error('Erro ao buscar o nível: ', error);
    }
  };

  useEffect(() => {
    fetchNivel();
    const interval = setInterval(fetchNivel, 5000); // Atualiza a cada 1 minuto
    return () => clearInterval(interval);
  }, []);

  // Calcula cor do gráfico de acordo com nível
  const getColor = () => {
    if (nivel < 60) return "#22c55e"; // verde
    if (nivel < 80) return "#facc15"; // amarelo
    return "#ef4444"; // vermelho
  };

  const fillLevel = nivel / 100; // normaliza para 0-1
  const percentage = Math.round(nivel);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nível da Lixeira</Text>

      <View style={styles.circleWrapper}>
        <Progress.Circle
          size={180}
          progress={fillLevel}
          color={getColor()}
          thickness={16}
          borderWidth={2}
          borderColor="#e5e7eb"
          unfilledColor="#f3f4f6"
          showsText={false}
        />
        <View style={styles.textCenter}>
          <Text style={styles.valor}>{percentage}%</Text>
          <Text style={styles.status}>Ocupado</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  circleWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    borderRadius: 100,
  },
  textCenter: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  valor: { fontSize: 40, fontWeight: "bold", color: "#111827" },
  status: { fontSize: 16, color: "#4b5563", marginTop: 4 },
});

export default NivelLixeira;
