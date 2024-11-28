import React, {useState} from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, StyleSheet, View, Switch } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';

/* Componentes */
import CarroBackground from "../components/CarroBackground";

export default function Index() {

  /* Função para passar para a próxima tela ao clicar no botão 
  const [isEnabled, setIsEnabled] = useState(false);
  const rota = useRouter();

  const apertarBotao = () => {
    setIsEnabled((previousState) => !previousState);
    if (!isEnabled) {
      rota.push('/segunda');
    }
  };*/

  return (
    
    <SafeAreaView style={styles.containerMain}>
    <StatusBar hidden/>

      <CarroBackground/>

      <View style={styles.containerPrincipal}>

        <View style={styles.containerSuperior}>
          <Text style={styles.containerSuperiorTexto}>Olá! Boas Vindas!</Text>
        </View>

        <View style={styles.containerMedio}>
          <Text style={styles.containerMedioTexto}>Clique sobre o botão abaixo para localizar seu carro</Text>
          
          <Link href='/segunda'>
              <View style={styles.iconSearch}>
                  <Icon name="search-circle" size={50} color="#00000" />
              </View>
          </Link>
        </View>

      </View>
    
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({

  containerMain:{
    flex:1,
    backgroundColor:'#FFF',
    flexDirection:'column'
  },

  iconSearch:{

  },

  containerPrincipal:{
    height:'50%',
    justifyContent:'space-between',
  },

  containerSuperior:{
    alignItems:'center',
    top:'12%'
  },

  containerSuperiorTexto:{
    fontSize:32,
    color:'#474747',
    fontWeight:'800'
  },

  containerMedio:{
    top:'-24%',
    width:'75%',
    left:'25%',
    paddingRight:'4%',
    gap:24,
    alignItems:'center'
  },

  containerMedioTexto:{
    fontSize:28,
    color:'#474747',
    fontWeight:'600',
    textAlign:'center',
    
  }  
});
