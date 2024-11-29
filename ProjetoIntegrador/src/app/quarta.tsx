import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Importa o hook useRouter
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'; // Importa o SafeAreaView

interface CarData {
  license_plate: string;
  parking_slot: number;
  parked_at: string;
}

function Quarta() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Definir os dados do carro com base na placa
  const getCarDetails = (licensePlate: string) => {
    let carDetails = {
      model: "Modelo Desconhecido",
      year: "Ano Desconhecido",
      locality: "Localidade Desconhecida",
    };

    // Condicional para placas específicas
    if (licensePlate === "EPP8H85") {
      carDetails = {
        model: "VOLKSWAGEN GOLF 1.6 SPORTLINE",
        year: "2010 / 2011",
        locality: "São Paulo - SP",
      };
    } else if (licensePlate === "GRE3740") {
      carDetails = {
        model: "FIAT UNO ELECTRONIC",
        year: "1995 / 1995",
        locality: "Campinas - SP",
      };
    }

    return carDetails;
  };

  // Obter os detalhes do carro com base na placa
  const carDetails = getCarDetails(params.license_plate as string);

  const deleteAllCarsFromAPI = async (): Promise<void> => {
    try {
      const response = await fetch('https://alexandre.poppedidos.com/', {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Erro ao remover todos os carros da API');
      
      console.log('Todos os carros removidos da API com sucesso');
      fetchCars(); // Atualiza os carros após a deleção
    } catch (error) {
      console.error('Erro ao tentar remover todos os carros:', error);
    }
  };

  const fetchCars = async (): Promise<void> => {
    try {
      const response = await fetch('https://alexandre.poppedidos.com/');
      if (!response.ok) throw new Error('Erro ao consultar a API');

      const data: CarData[] = await response.json(); // Garantir que estamos lidando com o tipo correto
      console.log('Carros atualizados:', data);
    } catch (error) {
      console.error('Erro ao buscar carros:', error);
    }
  };

  const handlePaymentPress = () => {
    Alert.alert(
      "Atenção!",
      "Você tem 10 minutos para pagar o tempo utilizado no estacionamento.",
      [
        {
          text: "Ok",
          onPress: () => {
            router.push("/"); 
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar translucent={false} backgroundColor="#1E3A8A" />
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.headerText}>Carro Encontrado!</Text>
          <View style={styles.imagesContainer}>
            <Image
              source={{ uri: `https://alexandre.poppedidos.com/${params.license_plate}.jpg` }}
              style={styles.carImage}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.carTitle}></Text>
            <Text style={styles.carDetail}>Modelo: <Text style={styles.textResult}>{carDetails.model}</Text></Text>
            <Text style={styles.carDetail}>Ano: <Text style={styles.textResult}>{carDetails.year}</Text></Text>
            <Text style={styles.carDetail}>Localidade: <Text style={styles.textResult}>{carDetails.locality}</Text></Text>
            <Text style={styles.carDetail}>Placa: <Text style={styles.textResult}>{params.license_plate}</Text></Text>
            <Text style={styles.carDetail}>Vaga: <Text style={styles.textResult}>{params.parking_slot}</Text></Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/')}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handlePaymentPress();
            }}
          >
            <Text style={styles.buttonText}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
    marginLeft: '20%',
  },
  card: {
    width: '100%',
    height: '60%',
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
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
    fontSize: 16,
    color: '#000',
    padding: 3,
    fontWeight: "700",
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  carImage: {
    width: '50%',
    height: '50%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  textResult: {
    color: 'gray',
    fontSize: 14,
    fontWeight: "600",
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    gap: '40%',
  },
  button: {
    backgroundColor: '#DCDCDC',
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
