import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

interface CarConfirmationScreenProps {
  placaFormatada: string;
}


function Quarta() {
  const params = useLocalSearchParams();
  console.log(params)

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.headerText}>Seu carro é esse?</Text>
          <Text style={styles.carTitle}>Astrão de cria</Text>
          <Text style={styles.carDetail}>Modelo: advantage 2.0 Flex</Text>
          <Text style={styles.carDetail}>Placa:{params.placa}</Text>
          <Text style={styles.carDetail}>Ano: 2007 / 2007</Text>
          <Text style={styles.carDetail}>Localidade: Patos de Minas - MG</Text>

          <View style={styles.imagesContainer}>
            <Image
              source={{ uri: `https://alexandre.poppedidos.com/${params.placa}.jpg` }}
              style={styles.carImage}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Não</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'gray',
    marginBottom: 20,
    marginLeft: '20%',
  },
  card: {
    width: '100%',
    height: '50%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'flex-start',
  },
  detailsContainer: {
    marginBottom: 10,
    height: '100%',
    flex: 1,
    marginTop: '10%',
  },
  carTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carDetail: {
    fontSize: 14,
    color: 'gray',
    padding: '3%',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  carImage: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default Quarta;