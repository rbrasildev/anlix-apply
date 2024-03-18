import React, { version } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../../styles/Home";
import { Card, Avatar } from "react-native-paper";

const Home = ({ route, navigation }) => {
    const { name, username } = route.params;


    return (
        <View style={{ flex: 1, backgroundColor: '#131314' }}>
            <Image source={require('../../assets/background.jpg')} style={{ height: 200, opacity: 0.6 }} />

            <SafeAreaView style={styles.container}>
                <View style={{ marginTop: -210 }}>
                    <View style={styles.header} >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Avatar.Image size={64} source={require('../../assets/avatar.jpg')} />
                            <Text style={{ fontSize: 20, color: '#666' }}>Olá, {username}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Login')
                            }}
                        >

                            <MaterialCommunityIcons
                                name="logout"
                                size={26}
                                color="#ccc"
                                style={{ marginRight: 10 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Card style={{ padding: 20, backgroundColor: '#1E1F20' }}>
                            <Card.Title
                                title="Bem vindo" titleVariant="headlineSmall" titleStyle={{ color: '#4CB752' }}
                                subtitle="Sistema para aplicar, remover configurações Anlix e verificar clientes na CTO" subtitleStyle={{ color: "#666" }}

                            />
                            <View style={{alignItems:'center', justifyContent:'space-around', flexDirection:'row', marginTop:10}}>
                                <Card.Cover style={{ backgroundColor: 'transparent', width: 100, height: 100, opacity:.4 }} source={require('../../assets/router.png')} />
                                <Card.Cover style={{ backgroundColor: 'transparent', width: 85, height: 100, opacity:.4 }} source={require('../../assets/cto-preta.png')} />
                            </View>
                        </Card>
                        <View style={{ flexDirection: 'row', gap: 4, flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Teste')} style={styles.card}>
                                <View style={styles.icon}>
                                    <MaterialCommunityIcons
                                        name="wifi-cog"
                                        size={48}
                                        color='#4CB752'
                                    />
                                    <Text style={{ color: '#ddd' }}>Aplicar</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Remove')} style={styles.card}>
                                <View style={styles.icon}>
                                    <View style={styles.icon}>
                                        <MaterialCommunityIcons
                                            name="router-wireless-off"
                                            size={48}
                                            color='#D62D29'
                                        />
                                        <Text style={{ color: '#ddd' }}>Remover</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Device')} style={styles.card}>
                                <View style={styles.icon}>
                                    <View style={styles.icon}>
                                        <MaterialCommunityIcons
                                            name="account-search-outline"
                                            size={48}
                                            color='#0A457A'
                                        />
                                        <Text style={{ color: '#ddd' }}>MAC</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('App')} style={styles.card}>
                                <View style={styles.icon}>
                                    <View style={styles.icon}>
                                        <MaterialCommunityIcons
                                            name="package"
                                            size={48}
                                            color='#666'
                                        />
                                        <Text style={{ color: '#ddd' }}>CTO</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.subTitle}>®rbrasildev - Todos os direitos reservados</Text>
                    <Text style={styles.subTitle}>Versão:{version}</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default Home;
