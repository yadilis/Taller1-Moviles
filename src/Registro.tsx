import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './navegacion.tsx/navigation';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    navigation.navigate('Inicio'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate en nuestra tienda online</Text>

      
      <Image
        source={{ uri: 'https://fashion-sa.es/wp-content/uploads/2023/07/cropped-fabicon_Mesa-de-trabajo-1.png' }} 
        style={styles.logo}
        resizeMode="contain"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faddf8',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'Arial',
    textShadowColor: '#ccc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#f700e7',
    borderWidth: 3,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#d7fcfe',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#0b0c0c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 200, 
    height: 200, 
    marginBottom: 10,
  },
});

export default Registro;
