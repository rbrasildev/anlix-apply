import { View, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusOnline } from "./StatusOnline";


export default function Cto({ route }) {
    const { data, ctoIdent } = route.params;

    const totalClient = data.length
    const livre = parseInt(totalClient - 16)

    return (
        <SafeAreaView style={{ backgroundColor: '#131314', display: 'flex', flex: 1, padding: 5 }}>

            <View style={{ marginBottom: 15, marginTop: -10, flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons
                    name="package"
                    size={32}
                    color='#B8001C'
                />
                <Text style={{ color: '#666', fontSize: 24, }}>{ctoIdent}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10, gap: 10 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 120, borderRadius: 20, padding: 4, color: '#131314' }}>
                    <Text style={{ color: '#666', fontSize: 16, fontWeight: 'bold' }}><MaterialCommunityIcons size={16} name="image-filter-frames" /> Ocupada {totalClient}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 120, borderRadius: 20, padding: 10, color: '#131314' }}>
                    <Text style={{ color: '#666', fontSize: 16, fontWeight: 'bold' }}><MaterialCommunityIcons size={16} name="image-filter-frames" /> Livre {livre}</Text>
                </View>
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return <Card style={{ backgroundColor: item.status == 3 ? '#B8001C' : item.status == 4 ? '#F28705' : '#1E1F20', margin: 5 }}>
                        <Card.Content>
                            <Card.Title titleStyle={{ color: '#ccc' }} titleVariant="titleMedium" title={item.nome} subtitleStyle={{ color: '#666' }} subtitle={item.login} />
                            <View
                                style={{ gap: 10, marginVertical: 4, borderRadius: 3, padding: 5, alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' }}>

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
                }}
            />
        </SafeAreaView>
    )
}