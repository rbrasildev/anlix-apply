import axios from "axios";
import { useGetData } from '../../services/useGetData';
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, Clipboard } from 'react-native';
import styles from '../../styles/Cliente';
import { Button, Card } from "react-native-paper";


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

    function formatMAC(e) {
        const formatted = e.replace(/(\w{2})(\w{2})(\w{2})(\w{2})(\w{2})(\w{2})/g, "$1:$2:$3:$4:$5:$6");
        setMac(formatted.toUpperCase());
    };



    const copyToClipboard = () => {
        Clipboard.setString(dataUserSgp.wifi_password);
        setIconCopy('clipboard-check')
        setInterval(() => {
            setIconCopy('content-copy')
        }, 2000)
    };

    function navigationToDevice() {
        navigation.navigate('Device');
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position" enabled>
                <View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: "row",
                        marginVertical: 10
                    }}>
                        <Text style={{ fontSize: 20, color: '#d0d0d0' }}>Buscar (resetdefault)</Text>
                        <TouchableOpacity
                            onPress={navigationToDevice}
                            style={{
                                backgroundColor: "#103778",
                                width: 100,
                                padding: 6,
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name="text-search"
                                size={30}
                                color='#fff'
                            />
                        </TouchableOpacity>
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
                        {/* <View>{loading ? <ActivityIndicator size="large" color="#00ff00" /> : false}</View> */}
                    </TouchableOpacity>
                </View>

                <Card style={{ padding: 20, backgroundColor: '#1E1F20' }}>
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
                        <Text style={styles.subTitle}>SSID: {dataUserSgp.wifi_ssid == null ? 'Nâo atribuído' : dataUserSgp.wifi_ssid}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.subTitle}>Senha: {dataUserSgp.wifi_password == null ? 'Não atribuído' : dataUserSgp.wifi_password}</Text>
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
                        <Text style={styles.subTitle}>SSID: {dataUserSgp.wifi_ssid_5 == null ? "Não atribuído" : dataUserSgp.wifi_ssid_5}</Text>
                        <Text style={styles.subTitle}>Password: {dataUserSgp.wifi_password_5 == null ? 'Nâo atribuído' : dataUserSgp.wifi_password_5}</Text>
                    </Card.Content>
                </Card>
            </KeyboardAvoidingView>
        </View>
    )
}
