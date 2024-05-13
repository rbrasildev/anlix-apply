import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';

import Home from "./screens/Home";
import Device from "./screens/Device";
import Roteador from "./screens/Roteador";
import Teste from "./screens/Teste";
import Cliente from "./screens/Cliente";
import Wifi from "./screens/Wifi";
import Remove from "./screens/Remove";
import Login from "./screens/Login";
import App from "./screens/Cto/index.jsx";
import Cto from "./screens/Cto/Cto.jsx";
import { Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";



const Stack = createNativeStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                        title: 'Login',
                        headerStyle: {
                            backgroundColor: '#1E1F20',
                        },
                        headerTintColor: '#87949D',
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        title: 'Página Inicial',
                        headerStyle: {
                            backgroundColor: '#1E1F20',
                        },
                        headerTintColor: '#87949D',
                    }}
                />

                <Stack.Screen
                    name="Device"
                    component={Device}
                    options={{
                        title: 'Buscar dispositivo...',
                        headerStyle: {
                            backgroundColor: '#1E1F20',
                        },
                        headerTintColor: '#87949D',
                    }}
                />

                <Stack.Screen
                    name="Roteador"
                    component={Roteador}
                    options={{
                        title: 'Definir configuração Anlix',
                        headerStyle: {
                            backgroundColor: '#1E1F20',
                        },
                        headerTintColor: '#87949D',
                    }}
                />

                <Stack.Screen
                    name="Teste"
                    component={Teste}
                    options={{
                        title: 'Dados do cliente',
                        headerStyle: {
                            backgroundColor: '#1E1F20',
                        },
                        headerTintColor: '#87949D',
                    }}
                />


                <Stack.Screen
                    name="Cliente"
                    component={Cliente}
                    options={({ navigation }) => ({
                        title: 'Buscar MAC (resetdefault)',
                        headerStyle: {
                            backgroundColor: '#1E1F20',
                        },
                        headerTintColor: '#87949D',
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Device');
                                }}
                            >
                                <MaterialIcons name="search" size={32} color="#87949D" />
                            </TouchableOpacity>
                        ),
                    })}
                />

                <Stack.Screen
                    name="Wifi"
                    component={Wifi}
                    options={{
                        title: 'Informações da CPE',
                        headerStyle: {
                            backgroundColor: '#1E1F20',
                        },
                        headerTintColor: '#87949D',
                    }}
                />
                <Stack.Screen
                    name="Remove"
                    component={Remove}
                    options={{
                        title: 'Remover roteador',
                        headerStyle: {
                            backgroundColor: '#1E1F20',
                        },
                        headerTintColor: '#87949D',
                    }}
                />
                <Stack.Screen
                    name="App"
                    component={App}
                    options={{
                        title: 'App',
                        headerStyle: {
                            backgroundColor: '#1E1F20',
                        },
                        headerTintColor: '#87949D',
                    }}
                />

                <Stack.Screen
                    name="Cto"
                    component={Cto}
                    options={{
                        title: 'Cto',
                        headerStyle: {
                            backgroundColor: '#1E1F20',
                        },
                        headerTintColor: '#87949D',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;