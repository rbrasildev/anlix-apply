import { Text, Alert, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../styles/Roteador';
import axios from 'axios';
import { useGetData } from '../../services/useGetData';


export default function Roteador({ route }) {
    const { getApi } = useGetData();

    const { mac, dataUserSgp } = route.params;

    const [loading, setLoading] = useState(true)
    const [dataWifi, setDataWifi] = useState({});

    const callGetApi = async () => {
        try {
            const response = await getApi(mac);
            setDataWifi(response);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }

    }

    //função para verificar se o roteador está online
    function getStatus() {
        if (dataWifi.online_status == true) {
            return <Text style={styles.online}>online</Text>
        } else {
            return <Text style={styles.offline}>offline</Text>
        }
    }

    //criar wifi
    const callPostApi = async () => {
        const api = await axios({
            method: "put",
            // url: "https://redeconexaonet.flashman.anlix.io/api/v2/device/update/" + mac,
            url: "https://flashtins.redeconexaonet.com/api/v2/device/update/" + mac,
            auth: {
                username: "admin",
                password: "bld2154038"
            },
            data: {
                "content": {
                    mac_address: mac,
                    pppoe_user: dataUserSgp.login,
                    pppoe_password: dataUserSgp.login_password,
                    wifi_ssid: dataUserSgp.wifi_ssid,
                    wifi_password: dataUserSgp.wifi_password,
                    wifi_ssid_5ghz: dataUserSgp.wifi_ssid_5,
                    wifi_password_5ghz: dataUserSgp.wifi_password_5,
                }

            }
        }).catch(error => {
            if (error.response.status == 500) {
                Alert.alert(
                    error.message,
                    "Erro ao atualizar o Roteador, Favor pedir para as meninas tirar a porra dos caracteres especiais. Tente novamente!",
                )
            }
            if (error.response.status == 404) {
                Alert.alert(
                    error.message,
                    "Falha ao conectar com o servidor"
                );
            }
            if (error.code == "ERR_NETWORK") {
                Alert.alert(
                    "Erro",
                    error.message
                )
            }
            console.log(error)
            return;
        })
   
        if (api.status == 200) {
            Alert.alert(
                'Successo',
                "Configuração aplicada com sucesso!"
            )
        }

    }

    useEffect(() => {
        callGetApi();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}> {dataUserSgp.nome}</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>{getStatus()}</Text>
                <Text style={styles.subTitle}>Modelo:  {dataWifi.model}</Text>
                <Text style={styles.subTitle}>PPPoE_User: {dataWifi.pppoe_user}</Text>
                <Text style={styles.subTitle}>PPPoE_Pass: {dataWifi.pppoe_password}</Text>

                <Text style={styles.subTitle}>SSID: {dataWifi.wifi_ssid}</Text>
                <Text style={styles.subTitle}>Password: {dataWifi.wifi_password}</Text>

                <Text style={styles.subTitle}>SSID_5: {dataWifi.wifi_ssid_5ghz}</Text>
                <Text style={styles.subTitle}>Password_5: {dataWifi.wifi_password_5ghz}</Text>
            </View>
            <Text>
                {loading && <ActivityIndicator size="large" color="#00ff00" />}
            </Text>
            <TouchableOpacity style={styles.button}
                onPress={callPostApi}
            >
                <Text style={{ fontSize: 20, }}>Definir Wifi</Text>
            </TouchableOpacity>

        </SafeAreaView>

    )

}   