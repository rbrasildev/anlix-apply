import axios from "axios";
import { Card } from "react-native-paper";
import styles from '../../styles/Cliente';
import { useEffect, useState } from 'react';
import { useGetData } from '../../services/useGetData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, Clipboard, ActivityIndicator } from 'react-native';


export default function Cliente({ route, navigation }) {
    const { cpf } = route.params;

    const [mac, setMac] = useState('');
    const [dataUserSgp, setDataUserSgp] = useState({});
    const [wifi_ssid, setWifi_ssid] = useState();
    const [wifi_password, setWifi_password] = useState();
    const [wifi_ssid_5, setWifi_ssid_5] = useState();
    const [wifi_password_5, setWifi_password_5] = useState();
    const [iconCopy, setIconCopy] = useState('content-copy')
    const [loading, setLoading] = useState(true);


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
                dataUserSgp: dataUserSgp,
                wifi_ssid: wifi_ssid,
                wifi_password: wifi_password,
                wifi_ssid_5: wifi_ssid_5,
                wifi_password_5: wifi_password_5

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
            setDataUserSgp(response.data)
            setWifi_ssid(response.data.wifi_ssid)
            setWifi_password(response.data.wifi_password)
            setWifi_ssid_5(response.data.wifi_ssid_5)
            setWifi_password_5(response.data.wifi_password_5)
            setLoading(false)

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        callGetApi();
    }, []);

    function formatMAC(e) {
        const formatted = e.replace(/(\w{2})(\w{2})(\w{2})(\w{2})(\w{2})(\w{2})/g, "$1:$2:$3:$4:$5:$6");
        setMac(formatted.toUpperCase());
    };

    const copyToClipboard = () => {
        Clipboard.setString(wifi_password);
        setIconCopy('clipboard-check')
        setInterval(() => {
            setIconCopy('content-copy')
        }, 2000)
    };

    function navigationToDevice() {
        navigation.navigate('Device');
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#131314',
            padding: 5,
        }}>
            <KeyboardAvoidingView
                behavior="position"
                enabled>

                <Card style={{
                    padding: 5,
                    backgroundColor: '#131314'
                }}>
                    <Card.Title
                        titleVariant="headlineSmall"
                        subtitleVariant="bodyLarge"
                        title={dataUserSgp.nome}
                        titleStyle={{ color: '#ddd' }}
                        subtitleStyle={{ color: '#87949D', marginBottom: 10 }}
                        subtitle={`Login: ${dataUserSgp.login}`} />
                    <Card.Content>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons
                                name={'wifi'}
                                size={24}
                                color='#4CB752'
                            />
                            <Text style={{ color: '#d0d0d0', fontSize: 20 }}> 2.4Ghz</Text>
                        </View>
                        <TextInput
                            style={styles.input_secondary}
                            value={wifi_ssid}
                            onChangeText={setWifi_ssid}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <TextInput
                                style={styles.input_secondary}
                                value={wifi_password}
                                onChangeText={setWifi_password}
                            />
                            <TouchableOpacity
                                style={{ padding: 4, borderRadius: 4 }}
                                onPress={copyToClipboard}
                            >
                                <Text style={{ color: '#fff' }}>
                                    <MaterialCommunityIcons
                                        name={iconCopy}
                                        size={28}
                                        color='#fff'
                                    />
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </Card.Content>
                    <Card.Content>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <MaterialCommunityIcons
                                name={'wifi'}
                                size={24}
                                color='#4CB752'
                            />
                            <Text style={{ color: '#d0d0d0', fontSize: 20 }}> 5.8Ghz</Text>
                        </View>
                        <TextInput
                            style={styles.input_secondary}
                            value={wifi_ssid_5}
                            onChangeText={setWifi_ssid_5}
                        />
                        <TextInput
                            style={styles.input_secondary}
                            value={wifi_password_5}
                            onChangeText={setWifi_password_5}
                        />
                    </Card.Content>
                </Card>

                <View style={{paddingHorizontal:10,}}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: "row",
                    }}>
                    
                    </View>

                    <TextInput style={styles.input}
                        value={mac}
                        placeholderTextColor="#87949D"
                        onChangeText={formatMAC}
                        placeholder='Digite o MAC'
                    >
                    </TextInput>
                    <TouchableOpacity style={styles.button}
                        onPress={callGetMac}
                    >
                        <Text style={{ fontSize: 20 }}>Gerenciar CPE</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
