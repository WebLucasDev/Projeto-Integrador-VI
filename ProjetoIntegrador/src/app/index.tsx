import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from "react-native";

import CarroBackground from "../components/CarroBackground";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const rota = useRouter();

  const apertarBotao = () => {
    setIsEnabled((previousState) => !previousState);
    if (!isEnabled) {
      rota.push('/segunda');
    }
  };

  return (
    <SafeAreaView style={styles.containerMain}>
    <StatusBar style="dark" translucent={false} backgroundColor="#33A031"/>
      <CarroBackground />

      <View style={styles.containerSuperior}>
        <Text style={styles.containerSuperiorTexto}>Olá! Boas Vindas!</Text>
      </View>

      <View style={styles.containerMedio}>
        <Text style={styles.containerMedioTexto}>Localizar meu carro:</Text>
        <TouchableOpacity style={styles.button} onPress={apertarBotao} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Clique Aqui</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },

  containerSuperior: {
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 20,
  },

  containerSuperiorTexto: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#474747',
    textAlign: 'center',
    marginBottom: 20,
  },

  containerMedio: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },

  containerMedioTexto: {
    fontSize: 24,
    color: '#474747',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
