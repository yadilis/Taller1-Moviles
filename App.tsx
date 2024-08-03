import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Principal from './src/Principal';
import Registro from './src/Registro';
import { Inicio } from './src/Inicio';
import { RootStackParamList } from './src/navegacion.tsx/navigation';



const Stack = createStackNavigator<RootStackParamList>();

const Navegacion = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Principal"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Inicio" component={Inicio} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navegacion;
