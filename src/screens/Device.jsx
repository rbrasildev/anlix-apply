import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";
import { Text, View, TouchableOpacity, ActivityIndicator, Alert, SafeAreaView, Clipboard, RefreshControl } from "react-native";
import axios from "axios";
import styles from "../../styles/Device";

export default function Device({ navigation }) {
    const [dataMac, setDataMac] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const callPostApi = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post("https://flashtins.redeconexaonet.com/api/v2/device/get/", {
                "fields": "_id,pppoe_user,model,use_tr069"
            }, {
                auth: {
                    username: "admin",
                    password: "bld2154038"
                }
            });
            setDataMac(response.data);
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Ocorreu um erro ao carregar os dados.");
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    };

    const resetdefaults = dataMac.filter(item => item.pppoe_user === "resetdefault");

    useEffect(() => {
        callPostApi();
    }, []);

    const handleRefresh = () => {
        setRefreshing(true);
        callPostApi();
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={resetdefaults}
                keyExtractor={(item) => item._id}
                renderItem={({ item, index }) =>
                    <View
                        key={item._id}
                        style={{
                            marginTop: 4,
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: "row",
                            backgroundColor: "#1E1F20",
                            padding: 5,
                            borderRadius: 10
                        }}>
                        <View style={{
                            backgroundColor: "#131314",
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
                            <View>
                                <MaterialCommunityIcons
                                    name="content-copy"
                                    size={24}
                                    color='#ccc'
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                }
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={['#1E90FF']} // Cor do indicador de atualização
                        tintColor={'#1E90FF'} // Cor de fundo do indicador de atualização no iOS
                    />
                }
                ListEmptyComponent={
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {isLoading ? (
                            <ActivityIndicator style={{ marginTop: '80%' }} size="large" color="#fff" />
                        ) : (
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: "#fff", marginTop: 250, fontSize: 18 }}>Nenhum registro</Text>
                            </View>
                        )}
                    </View>
                }
            />
        </SafeAreaView>
    );
}
