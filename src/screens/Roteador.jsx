import axios from 'axios';
import { useGetData } from '../../services/useGetData';
import { Card } from 'react-native-paper';
import styles from '../../styles/Roteador';
import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Alert, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';



export default function Roteador({ route }) {
    const { getApi } = useGetData();

    const { mac, dataUserSgp, wifi_ssid, wifi_password, wifi_ssid_5, wifi_password_5 } = route.params;

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
            return <View style={styles.online}></View>

        } else {
            return <View style={styles.offline}></View>
        }
    }

    //criar wifi
    const callPostApi = async () => {
        const api = await axios({
            method: "put",
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
                    wifi_ssid: wifi_ssid,
                    wifi_password: wifi_password,
                    wifi_ssid_5ghz: wifi_ssid_5,
                    wifi_password_5ghz: wifi_password_5,
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
        <View style={{ flex: 1, backgroundColor: '#131314', padding:5 }}>
            <Card style={{ marginTop: 15, paddingVertical:20, backgroundColor: '#1e1f20' }}>
                <Card.Title titleVariant='headlineSmall' titleStyle={{ color: '#ddd' }} subtitleStyle={{ color: '#666' }} title="Informações doa CPE" subtitle="Informações do roteador no anlix" />
                <Card.Content>
                    <Text style={{ fontSize: 20, marginVertical: 15, color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 22 }}>{getStatus()} </Text>
                        <MaterialCommunityIcons
                            name='lock'
                            size={24}
                            color='#ccc'
                        />
                        {dataWifi.use_tr069 ? 'tr069' : 'Firmware'}
                    </Text>
                    <Text style={styles.subTitle}>Modelo  <Text style={{ color: '#666' }}>{dataWifi.model}</Text></Text>
                    <Text style={styles.subTitle}>PPPoE_User <Text style={{ color: '#666' }}>{dataWifi.pppoe_user}</Text></Text>
                    <Text style={styles.subTitle}>PPPoE_Pass <Text style={{ color: '#666' }}>{dataWifi.pppoe_password}</Text></Text>

                    <Text style={styles.subTitle}>SSID: <Text style={{ color: '#666' }}>{dataWifi.wifi_ssid}</Text></Text>
                    <Text style={styles.subTitle}>Password <Text style={{ color: '#666' }}>{dataWifi.wifi_password}</Text></Text>

                    <Text style={styles.subTitle}>SSID_5 <Text style={{ color: '#666' }}>{dataWifi.wifi_ssid_5ghz}</Text></Text>
                    <Text style={styles.subTitle}>Password_5 <Text style={{ color: '#666' }}>{dataWifi.wifi_password_5ghz}</Text></Text>
                </Card.Content>
            </Card>
            <Text>
                {loading && <ActivityIndicator size="large" color="#00ff00" />}
            </Text>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity style={styles.button}
                    onPress={callPostApi}
                >
                    <Text style={{ fontSize: 20, }}>Aplicar</Text>
                </TouchableOpacity>
            </View>

        </View>

    )

}   