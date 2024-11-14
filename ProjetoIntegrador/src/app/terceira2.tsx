import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';


const AnimatedCar = () => {
  const carPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(carPosition, {
          toValue: 1.7, // Move até o final da linha
          duration: 1500, // Tempo da animação
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(carPosition, {
          toValue: 0, // Retorna ao início
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [carPosition]);

  const translateX = carPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 150], // Comprimento da linha
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Encontrando seu carro...</Text>
      <View style={styles.iconsContainer}>
        <FontAwesome5 name="car-side" size={24} color="gray" />
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Animated.View style={[styles.car, { transform: [{ translateX }] }]}>
            <FontAwesome5 name="car" size={24} color="gray" />
          </Animated.View>
          <View style={styles.line} />
        </View>
        <FontAwesome5 name="home" size={24} color="gray" />
      </View>
      <View style={styles.botaoTeste}>
        <Link href='/quarta'>Clicar aqui até fazer o botão kkkkkkkkk</Link>
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
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10%'
  },
  lineContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'gray',
  },
  car: {
    position: 'absolute',
  },
  botaoTeste: {

  }
});

export default AnimatedCar;
