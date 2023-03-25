import { React, useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, ActivityIndicator, TouchableOpacity, Alert, Clipboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../styles/Wifi'
import { useApiGetData } from '../../services/useApiGetData';

export default function Wifi({route }) {
    
    const { getApi } = useApiGetData();
    const mac = route.params.mac;
  
    const [copyText, setCopyText] = useState('Copiar')
    const [loading, setLoading] = useState(true)
    const [model, setModel] = useState([])
    const [ip, setIp] = useState([])
    const [wifi_ssid, setWifi_ssid] = useState([])
    const [wifi_password, setWifi_password] = useState([])
    const [wifi_ssid_5ghz, setWifi_ssid_5ghz] = useState([])
    const [wifi_password_5ghz, setWifi_password_5ghz] = useState([])
    const [devices, setDevices] = useState([]);
    
    
    const callGetDevice = async () => {
        try {
            const response = await getApi(mac)
            setDevices(response.lan_devices);
            setModel(response.model)
            setIp(response.ip)
            setWifi_ssid(response.wifi_ssid)
            setWifi_password(response.wifi_password)
            setWifi_ssid_5ghz(response.wifi_ssid_5ghz)
            setWifi_password_5ghz(response.wifi_password_5ghz)
            if (response.status == 404) {
                Alert.alert(
                    "Error: " + response.lan_devices,
                    response.data.message
                )
            }
            console.log(lan_devices)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() => {
        callGetDevice()
    }, [mac])
    
    
    
    
    const copyToClipboard = () => {
        Clipboard.setString(wifi_password);
     
        setCopyText('Copiado...');
        setTimeout(()=>{
            setCopyText('Copiar');
        },2000)
        };
        
        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.listWifi}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons
                        name='wifi'
                        size={24}
                        color={'#4CB752'}
                    />
                    <Text style={{ fontSize: 20, color: '#4CB752', fontWeight: 'bold', marginBottom: 5.4 }}> {model}</Text>
                </View>
                <View style={styles.wifiContainer}>
                    <Text style={styles.title}>{wifi_ssid}</Text>
                    <View style={styles.contentCopy}>
                        <Text style={styles.subTitle}>{wifi_password}</Text>
                        <TouchableOpacity style={styles.btnCopy} onPress={copyToClipboard}>
                            <Text style={{ color: "#fff" }}>{copyText}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>{wifi_ssid_5ghz}</Text>
                    <View style={styles.contentCopy}>
                        <Text style={styles.subTitle}>{wifi_password_5ghz}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    padding:3
                }}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <MaterialCommunityIcons
                        name={'cellphone'}
                        size={20}
                        color={'#fff'}
                    />
                    <Text style={{fontSize:20,color:'#d0d0d0'}}>Dispositivos conectados</Text>
                </View>
                    <Text style={{fontSize:20,color:'#d0d0d0'}}>{Object.keys(devices).length}</Text>
                </View>
                {loading && <ActivityIndicator size="large" color="#00ff00" />}

            </View>

            <FlatList
                style={styles.flatlist}
                data={devices}
                renderItem={({ item }) =>
                    <View style={styles.list}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons
                                name={'cellphone'}
                                size={24}
                                color={'#999'}
                            />

                            <Text style={{ color: '#666', }}>
                                {item.dhcp_name}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ color: '#666', }}>
                                {item.ip + " "}
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#d0d0d0' }}>{" " + item.wifi_signal}</Text>
                                <Text>{item.wifi_signal < -70 ? <MaterialCommunityIcons name={'signal'} size={24} color={'#F55265'} /> : <MaterialCommunityIcons name={'signal'} size={24} color={'#4CB752'} />}</Text>

                            </View>
                        </View>
                    </View>
                }
            />


        </SafeAreaView>
    )

}