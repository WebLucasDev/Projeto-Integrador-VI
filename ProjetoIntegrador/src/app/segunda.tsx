import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, StyleSheet, View, TextInput } from "react-native";
import { Link } from 'expo-router';

/* Componentes */
import CarroBackground from "../components/CarroBackground";
import BotaoVoltar from "../components/BotaoVoltar";

export default function Segunda() {

  return (
    
    <SafeAreaView style={styles.containerMain}>
    <StatusBar hidden/>

      <CarroBackground/>
      <BotaoVoltar/>

      <View style={styles.containerSuperior}>
        <View style={styles.containerSuperiorCaixa}>
          <Text style={styles.containerSuperiorTexto}>Digite a placa do seu veículo</Text>
        </View>
      </View>

      <View style={styles.containerMedio}>
        <TextInput style={styles.containerMedioTexto}
        />

        <Link href='/terceira2'>Clicar aqui até fazer o botão kkkkkkkkk</Link>
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

  containerSuperior:{
    flex:2,
    alignItems:'center',
    top:32
  },

  containerSuperiorCaixa:{
    width:'80%',
    padding:'8%',
    backgroundColor:'#FAF9F7',
    borderRadius:16,
    borderColor:'#474747',
    borderWidth:1,
    shadowColor:'#000',
    shadowOffset: {width: 0, height:8},
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  containerSuperiorTexto:{
    fontSize:24,
    fontWeight:'800',
    color:'#474747',
    textAlign:'center',
  },

  containerMedio:{
    flex:3,
    alignItems:'center'
  },

  containerMedioTexto:{
    backgroundColor:'#D9D9D9',
    opacity: 0.8,
    width:'64%',
    height:'12%',
    borderRadius:'12%',
    borderColor:'#474747',
    borderWidth:0,
    textAlign:'center'
  },
  
});
