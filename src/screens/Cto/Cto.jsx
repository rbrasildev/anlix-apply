import React, { useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusOnline } from "./StatusOnline";

export default function Cto({ route }) {
    const { data, ctoIdent } = route.params;
    const totalClient = data.length;
    const livre = parseInt(16 - totalClient);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
 
        setRefreshing(true);
        // Aqui você pode chamar uma função para recarregar os dados
        setTimeout(() => {
            setRefreshing(false);
        }, 2000); // Tempo de simulação de 2 segundos para a recarga
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ backgroundColor: '#131314', padding: 5 }}
                data={data}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#1E90FF']} // Cor do indicador de atualização
                        tintColor={'#1E90FF'} // Cor de fundo do indicador de atualização no iOS
                    />
                }
                ListHeaderComponent={
                    <>
                        <View style={{ marginBottom: 15, marginTop: -10, flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                            <MaterialCommunityIcons
                                name="package"
                                size={32}
                                color='#B8001C'
                            />
                            <Text style={{ color: '#666', fontSize: 24, }}>{ctoIdent}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10, gap: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 20, color: '#131314' }}>
                                <Text style={{ color: '#666', fontSize: 16, fontWeight: 'bold' }}><MaterialCommunityIcons size={16} name="image-filter-frames" /> Ocupada ({totalClient})</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 20, color: '#131314' }}>
                                <Text style={{ color: '#666', fontSize: 16, fontWeight: 'bold' }}><MaterialCommunityIcons size={16} name="image-filter-frames" /> Livre ({livre})</Text>
                            </View>
                        </View>
                    </>
                }
                renderItem={({ item }) => (
                    <Card style={{ backgroundColor: item.status == 3 ? '#590202' : item.status == 4 ? '#F28705' : '#1E1F20', margin: 5 }}>
                        <Card.Content>
                            <Card.Title titleStyle={{ color: '#FFFF' }} titleVariant="titleMedium" title={item.nome} subtitleStyle={{ color: '#CCC' }}
                                subtitle={`${item.login} - ${item.status == 3 ? 'Cancelado' : item.status == 4 ? 'Suspenso' : 'Ativo'}`} />
                            <View style={{ gap: 10, marginVertical: 4, borderRadius: 3, padding: 5, alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ color: '#ccc', fontSize: 16, flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                    <MaterialCommunityIcons style={{ color: '#ccc' }} name="image-filter-frames" size={20} />
                                    <Text style={{ color: '#CCC', fontSize: 20 }}>{item.splitter_port}</Text>
                                </View>
                                <View style={{ color: '#ccc', fontSize: 16, flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                    <Text style={{ color: '#CCC', fontSize: 20 }}>{item.wifi_ssid_5}</Text>
                                    <StatusOnline isOnline={item.login} />
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                )}
            />
        </View>
    )
}
