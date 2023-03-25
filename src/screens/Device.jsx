import { React, useState, useEffect } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import { Text, View, TouchableOpacity, ActivityIndicator, Alert, SafeAreaView, Clipboard } from "react-native";
import axios from "axios";
import styles from "../../styles/Device";

export default function Device({ navigation }) {
    const [dataMac, setDataMac] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
    const resetdefaults = dataMac.filter(item => item.pppoe_user == "resetdefault")
    useEffect(() => {
        callPostApi();

    }, []);




    return (
        <SafeAreaView style={styles.container}>
            <View>
            {isLoading && <ActivityIndicator style={{marginTop:'80%'}} size="large" color="#fff" />}
                {resetdefaults == false && isLoading == false ? <Text style={{ color: "#fff", margimTop:10 }}>Nenhum registro</Text> :
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
                            borderRadius: 4
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
                                onPress={() => {
                                    Clipboard.setString(resetdefaults[index]._id);
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="content-copy"
                                    size={24}
                                    color='orange'
                                />
                            </TouchableOpacity>
                        </View>
                    }
                />
            }
            </View>

            
        </SafeAreaView>
    );
}

