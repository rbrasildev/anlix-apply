import axios from "axios";
import { useGetData } from '../../services/useGetData';
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, Clipboard } from 'react-native';
import styles from '../../styles/Cliente';


export default function Cliente({ route, navigation }) {
    const { cpf } = route.params;

    const [mac, setMac] = useState('');
    const [dataUserSgp, setDataUserSgp] = useState({});
    const [iconCopy, setIconCopy] = useState('content-copy')
    const [loading, setLoading] = useState(false);


    const { getApi } = useGetData();

    const callGetMac = async () => {
        try {
            const response = await getApi(mac);
            if (mac == "") {
                Alert.alert(
                    "Preencha o campo MAC",
                    "Esse campo não pode ser vazio, informe o mac do cliente"
                );
                return
            }
            if (response.success == false) {
                Alert.alert(
                    "Atenção",
                    `${response.message}, verifique se o roteador está ligado`,
                )

                return;
            }
            navigation.navigate('Roteador', {
                mac: mac,
                dataUserSgp: dataUserSgp
            });
            console.log(response.status);
            setLoading(true);
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    const callGetApi = async () => {
        try {
            const response = await axios.get(`http://170.245.175.14:9595/api/api.php?login=` + cpf);
            setDataUserSgp(response.data);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        callGetApi();
    }, []);

    /***
     * Função para colocar máscara de mac no formato xx:xx:xx:xx:xx:xx
     */
    function formatMAC(e) {
        var r = /([a-f0-9]{2})([a-f0-9]{2})/i,
            str = e.replace(/[^a-f0-9]/ig, "");

        while (r.test(str)) {
            str = str.replace(r, '$1' + '-' + '$2');
        }
        e = str.slice(0, 17).split('-').join(':');
        setMac(e.toUpperCase());
    };


    const copyToClipboard = () => {
        Clipboard.setString(dataUserSgp.wifi_password);
        setInterval
        setIconCopy('clipboard-check')
    };

    function navigationToDevice() {
        navigation.navigate('Device');
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position" enabled>
                <View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons
                                name={'wifi'}
                                size={24}
                                color='#333'
                            />
                            <Text style={{ color: '#d0d0d0', fontSize: 20 }}> 2.4Ghz</Text>
                        </View>
                        <Text style={styles.subTitle}>SSID: {dataUserSgp.wifi_ssid == null ? 'Nâo atribuído' : dataUserSgp.wifi_ssid}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.subTitle}>Password: {dataUserSgp.wifi_password == null ? 'Não atribuído': dataUserSgp.wifi_password }</Text>
                            <TouchableOpacity
                                onPress={copyToClipboard}
                            >
                                <Text style={{ color: '#fff' }}>
                                    <MaterialCommunityIcons
                                        name={iconCopy}
                                        size={24}
                                        color='orange'
                                    />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', marginTop:20 }}>
                            <MaterialCommunityIcons
                                name={'wifi'}
                                size={24}
                                color='#333'
                            />
                            <Text style={{ color: '#d0d0d0', fontSize: 20 }}> 5.8Ghz</Text>
                        </View>
                        <Text style={styles.subTitle}>SSID: {dataUserSgp.wifi_ssid_5 == null ? "Não atribuído" : dataUserSgp.wifi_ssid_5}</Text>
                        <Text style={styles.subTitle}>Password: {dataUserSgp.wifi_password_5 == null ? 'Nâo atribuído' : dataUserSgp.wifi_password_5 }</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: "row"
                    }}>
                        <Text style={{ fontSize: 20, color: '#d0d0d0' }}>MAC (resetdefault)</Text>
                        <TouchableOpacity
                            onPress={navigationToDevice}
                            style={{
                                backgroundColor: "#103778",
                                width: 100,
                                padding: 4,
                                borderRadius: 4,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        ><Text>
                                <MaterialCommunityIcons
                                    name="text-search"
                                    size={30}
                                    color='#fff'
                                /></Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.input}
                        value={mac}
                        onChangeText={formatMAC}
                        placeholder='Digite o MAC'
                    >
                    </TextInput>
                    <TouchableOpacity style={styles.button}
                        onPress={callGetMac}
                    >
                        <Text style={{ fontSize: 20 }}>Gerenciar CPE</Text>
                        {/* <View>{loading ? <ActivityIndicator size="large" color="#00ff00" /> : false}</View> */}

                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
