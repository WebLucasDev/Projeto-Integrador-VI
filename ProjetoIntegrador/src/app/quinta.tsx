import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
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
            
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Link href='/'>
                        <Text style={styles.buttonText}>Retonar ao inicio</Text>
                    </Link>
                </TouchableOpacity>
            </View>

        </View>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({

    containerMain:{
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'center'
    },

    containerPrincipal:{
        
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
      },

    button: {
        backgroundColor: '#f2f2f2',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft:'32%'
      },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: '30%',
      },

    title:{
        marginLeft: '43%',
        marginTop: '-80%'
    },

    titulo:{
        fontSize:30,
        fontWeight:900,
        color:'#474747',
        height:'70%',
        marginLeft: '30%',
        marginTop:'25%'
    },

    text:{
        alignItems: 'center',
        textAlign: 'center',
        color: '#474747',
        fontWeight:900,
        marginLeft: '5%',
        fontSize:30,
        padding:'5%',
        marginTop: '5%'
    }
})
