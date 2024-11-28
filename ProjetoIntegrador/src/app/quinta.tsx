import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

export default function quinta() {
  return (
    <SafeAreaView style={styles.containerMain}>
    <StatusBar hidden/>

        <View style={styles.containerPrincipal}>
        <Text style={styles.titulo}>ATENÇÃO!</Text>
            <View style={styles.title}>                
                <Icon name="warning" size={50} color="#00000" />                
            </View>
            <Text style={styles.text}>
                    Não foi possível localizar seu veículo! Por favor, solicite ajuda a um atendente.
            </Text>
        </View>

        <View style={styles.warning}>
                           
        </View>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({

    containerMain:{
        flex:1,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center'
    },

    containerPrincipal:{
        
    },

    title:{
        marginLeft: '35%',
    },

    titulo:{
        fontSize:24,
        fontWeight:900,
        color:'#474747',
        height:'70%',
        marginLeft: '35%'
    },

    warning:{

    },
    text:{
        alignItems: 'center',
        marginLeft: '10%',
        fontSize:30
    }
})
