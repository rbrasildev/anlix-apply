import { React, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './style'
import axios from "axios";




const Login = ({ navigation }) => {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const callApi = async () => {
        const api = await axios({
            method: 'GET',
            url: `http://170.245.175.14:9595/api/api.php?auth&username=${username}&password=${password}`
        }).catch(error => {
            console.log(error)
            return;
        })
        setUserData(api.data)


    }

    callApi()
    function auth() {
        navigation.navigate('Home', {
            username: username
        })
        // if (userData.status == true) {
        // } else {
        //     Alert.alert('Falha na autenticação', 'Credenciais inválidas');
        // }
    }



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                style="light"
            />

            <View style={styles.header}>
                <Image source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.login}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons
                        name="lock"
                        size={32}
                        color="#87949D"
                    />
                    <Text style={{ color: '#87949D', fontSize: 20, padding: 10 }}>Login</Text>
                </View>
                <TextInput
                    placeholderTextColor={'#87949D'}
                    autoCapitalize={'none'}
                    value={username}
                    onChangeText={setUserName}
                    style={styles.input}
                    placeholder="Usuário"
                />
                <TextInput
                    placeholderTextColor={'#87949D'}
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    placeholder="Senha"
                />

                <TouchableOpacity
                    onPress={() => auth()}
                    style={styles.button}>
                    <Text style={{ fontSize: 20, color: '#d0d0d0' }}>Entrar</Text>
                </TouchableOpacity>

            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#666', marginTop: '40%' }}>rbrasildev - Todos os direitos reservados</Text>
            </View>

        </SafeAreaView>
    )
}

export default Login;