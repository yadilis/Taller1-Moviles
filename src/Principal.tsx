// src/components/Principal.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './navegacion.tsx/navigation';



const Principal = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigateToRegistro = () => {
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos a</Text>
      <Text style={styles.storeName}>Fashion Store</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToRegistro}>
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbddf6',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  storeName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ff1493',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'Arial',
    textShadowColor: '#ccc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: '#ff1493',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Principal;
