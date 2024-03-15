import { React, useState, useEffect } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from "react-native";
import { Text, View, TouchableOpacity, ActivityIndicator, Alert, SafeAreaView, Clipboard, TextInput } from "react-native";
import axios from "axios";
import styles from "../../styles/Remove";


export default function Device({ navigation }) {
    const [dataMac, setDataMac] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [mac, setMac] = useState('');


    const callPostApi = async () => {
        const api = await axios({
            method: "POST",
            url: "https://flashtins.redeconexaonet.com/api/v2/device/get/",
            auth: {
                username: "admin",
                password: "bld2154038"
            },
            data: {
                "fields": "_id,pppoe_user,model,use_tr069"

            }
        }).catch(error => {
            console.log(error)
            return;
        })

        //console.log(api.data);
        setDataMac(api.data)
        setIsLoading(false);
    }

    const callDeleteRouter = async () => {
        setIsLoading(true)
        const api = await axios({
            method: "DELETE",
            url: `https://flashtins.redeconexaonet.com/api/v2/device/delete/${mac}`,
            auth: {
                username: "brunodantas",
                password: "bld2154038"
            }

        }).catch(error => {
            Alert.alert(`Error ${error.response.status}`, error.response.data.message)
            setIsLoading(false)
            return;
        })
        Alert.alert('Sucesso', `${api.data.message}`)
        setIsLoading(false);
        setMac('')
        callPostApi()
        
    }


    function confirm() {
        Alert.alert('Deletar', 'Tem certeza que desejar remover o roteador do sistema?', [
            {
                text: 'Sim',
                onPress: () => callDeleteRouter(),
            },
            {
                text: 'Não',
            }
        ])
    }

    function formatMAC(e) {
        var r = /([a-f0-9]{2})([a-f0-9]{2})/i,
            str = e.replace(/[^a-f0-9]/ig, "");

        while (r.test(str)) {
            str = str.replace(r, '$1' + '-' + '$2');
        }
        e = str.slice(0, 17).split('-').join(':');
        setMac(e.toUpperCase());
    };

    const resetdefaults = dataMac.filter(item => item._id == mac)

    useEffect(() => {
        callPostApi();
    }, []);




    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input}
                value={mac}
                placeholderTextColor={'#87949D'}
                onChangeText={formatMAC}
                placeholder='Digite o MAC'
            >
            </TextInput>
            <View>
                {isLoading && <ActivityIndicator style={{ marginTop: '80%' }} size="large" color="#fff" />}
                {resetdefaults == false && isLoading == false && mac != "" ? <Text style={{ color: "#fff", marginTop:'60%', textAlign:'center'}}>Nenhum registro</Text> :
                    <FlatList
                        data={resetdefaults}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item, index }) =>
                            <View style={{
                                marginTop: 4,
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                flexDirection: "row", backgroundColor: "#242A38",
                                padding: 5,
                                borderRadius: 4,
                                elevation: 5,
                                shadowColor: '#141414',
                            }}>
                                <View style={{
                                    backgroundColor: "#212121",
                                    width: 60, height: 60,
                                    borderRadius: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 4
                                }}>

                                    <MaterialCommunityIcons
                                        name="router-wireless"
                                        size={24}
                                        color='#4CB752'
                                    />
                                    <Text style={{ fontSize: 10, color: "#fff" }}>{item.model}</Text>
                                    <Text style={{ fontSize: 8, color: "#fff" }}>{item.use_tr069 ? 'tr069' : 'firmware'}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "#fff" }}>{item._id}</Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        padding: 4,
                                        borderRadius: 4,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 10
                                    }}
                                    onPress={() => confirm()}
                                >
                                    <View style={{ backgroundColor: '#F55265', padding: 6, borderRadius: 4, }}>
                                        <MaterialCommunityIcons
                                            name="trash-can"
                                            size={24}
                                            color='#fff'
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                }
            </View>
        </SafeAreaView>
    );
}

