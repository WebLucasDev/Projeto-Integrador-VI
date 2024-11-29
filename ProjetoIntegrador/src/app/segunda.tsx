import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity, Switch, Alert } from "react-native";
import { useRouter } from 'expo-router';

import CarroBackground from "../components/CarroBackground";
import BotaoVoltar from "../components/BotaoVoltar";

interface CarData {
  license_plate: string;
  parking_slot: number;
  parked_at: string;
}

export default function Segunda() {
  const [isMercosul, setIsMercosul] = useState(false);
  const [placa, setPlaca] = useState("");
  const router = useRouter();

  const toggleSwitch = () => setIsMercosul((previousState) => !previousState);

  const handlePlacaChange = (text: string) => {
    if (isMercosul) {
      const formatted = text
        .replace(/[^A-Za-z0-9]/g, '')
        .replace(/(\w{3})(\w)/, '$1$2')
        .replace(/(\w{4})(\w)/, '$1$2')
        .replace(/(\w{5})(\w{2}).*/, '$1$2');
      setPlaca(formatted.toUpperCase());
    } else {
      const formatted = text
        .replace(/[^A-Za-z0-9]/g, '')
        .replace(/(\w{3})(\w)/, '$1-$2')
        .replace(/(\w{3})-(\w{4}).*/, '$1-$2');
      setPlaca(formatted.toUpperCase());
    }
  };

  const handleVerify = async () => {
    const placaFormatada = placa.toUpperCase().replace(/[^A-Za-z0-9]/g, '');
    const placaValida = placa.length === (isMercosul ? 7 : 8);
  
    if (!placaValida) {
      return Alert.alert('Erro', 'Por favor, insira uma placa válida.');
    }
  
    try {
      const response = await fetch(`https://alexandre.poppedidos.com/`);
      if (!response.ok) throw new Error('Erro ao consultar a API');
  
      const data: CarData[] = await response.json();
      const carroEncontrado = data.find(carro => carro.license_plate === placaFormatada);
  
      if (carroEncontrado) {
        router.push(`/terceira?placa=${placaFormatada}`);
      } else {
        Alert.alert('Placa não encontrada', 'Não encontramos seu carro no estacionamento.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao buscar o veículo.');
    }
  };
  

  return (
    <SafeAreaView style={styles.containerMain}>
      <StatusBar hidden />
      <CarroBackground />
      <BotaoVoltar />

      <View style={styles.containerSuperior}>
        <Text style={styles.containerSuperiorTexto}>Digite a placa do seu veículo</Text>
        <TextInput
          style={styles.inputPlaca}
          placeholder={isMercosul ? "AAA0A00" : "AAA-0000"}
          placeholderTextColor="#a0a0a0"
          value={placa}
          onChangeText={handlePlacaChange}
          maxLength={isMercosul ? 7 : 8}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            {isMercosul ? "Placas Mercosul" : "Placas Não Mercosul"}
          </Text>
          <Switch
            trackColor={{ false: "#B0B0B0", true: "#3B82F6" }}
            thumbColor={isMercosul ? "#FFFFFF" : "#FFFFFF"}
            onValueChange={toggleSwitch}
            value={isMercosul}
          />
        </View>
      </View>

      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verificar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    alignItems: 'center',
  },

  containerSuperior: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },

  containerSuperiorTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#474747',
    textAlign: 'center',
    marginBottom: 20,
  },

  inputPlaca: {
    backgroundColor: '#E0E0E0',
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderColor: '#B0B0B0',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginBottom: 20,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  switchLabel: {
    fontSize: 16,
    color: '#474747',
    marginRight: 10,
  },

  containerBotao: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
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
