import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./screens/Home";
import Device from "./screens/Device";
import Roteador from "./screens/Roteador";
import Teste from "./screens/Teste";
import Cliente from "./screens/Cliente";
import Wifi from "./screens/Wifi";



const Stack = createNativeStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        title: 'Página Inicial',
                        headerStyle: {
                            backgroundColor: '#242A38',
                        },
                        headerTintColor: '#fff',
                    }}
                />

                <Stack.Screen
                    name="Device"
                    component={Device}
                    options={{
                        title: 'Buscar dispositivo...',
                        headerStyle: {
                            backgroundColor: '#242A38',
                        },
                        headerTintColor: '#fff',
                    }}
                />

                <Stack.Screen
                    name="Roteador"
                    component={Roteador}
                    options={{
                        title: 'Definir configuração Anlix',
                        headerStyle: {
                            backgroundColor: '#242A38',
                        },
                        headerTintColor: '#fff',
                    }}
                />

                <Stack.Screen
                    name="Teste"
                    component={Teste}
                    options={{
                        title: 'Dados do cliente',
                        headerStyle: {
                            backgroundColor: '#242A38',
                        },
                        headerTintColor: '#fff',
                    }}
                />


                <Stack.Screen
                    name="Cliente"
                    component={Cliente}
                    options={{
                        title: 'Informações Wifi Cliente',
                        headerStyle: {
                            backgroundColor: '#242A38',
                        },
                        headerTintColor: '#fff',
                    }}
                />

                <Stack.Screen
                    name="Wifi"
                    component={Wifi}
                    options={{
                        title: 'Informações da CPE',
                        headerStyle: {
                            backgroundColor: '#242A38',
                        },
                        headerTintColor: '#fff',
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;