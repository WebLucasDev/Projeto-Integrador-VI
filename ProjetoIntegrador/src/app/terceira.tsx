import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useRouter } from 'expo-router';


const AnimatedCar = () => {
  const carPosition = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(carPosition, {
          toValue: 1.7, // Move até o final da linha
          duration: 1000, // Tempo da animação
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(carPosition, {
          toValue: 0, // Retorna ao início
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    const timer = setTimeout(() => {
      router.push({ pathname: "/quarta", params});
    }, 3000); // o 3000 está definindo o tempo para 3 segundos

    return() => clearTimeout(timer);
  }, [carPosition, router, params]);

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
});

export default AnimatedCar;
