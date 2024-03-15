import React, { version } from "react";
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../../styles/Home";
import { Card } from "react-native-paper";

const Home = ({ route, navigation }) => {
    const { name, username } = route.params;


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="transparent"
                translucent={true} />
            <View>
                <View style={styles.header} >
                    <View>
                        <Image source={require('../../assets/logo.png')} style={styles.imageLogo} />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                    >

                        <MaterialCommunityIcons
                            name="logout"
                            size={24}
                            color="#87949D"
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.main}>
                    <Card style={{ width: '93%', padding:20, backgroundColor: '#1E1F20', height:250}}>
                        <Text style={{ fontSize: 25, color: '#4CB752' }} >Bem vindo</Text>
                        <Text style={styles.subTitle}>Remover roteador do sistema</Text>
                        <Text style={{ fontSize: 20, color: '#666' }}>{username}</Text>
                    </Card>
                    <TouchableOpacity onPress={() => navigation.navigate('Teste')} style={styles.card}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons
                                name="cog-transfer"
                                size={64}
                                color='#4CB752'
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Configurar Roteador</Text>
                            <Text style={styles.subTitle}>Aplicar configurações Anlix</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Remove')} style={styles.card}>
                        <View style={styles.icon}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons
                                    name="router-wireless-off"
                                    size={64}
                                    color='#F55265'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.title}>Remover Roteador</Text>
                            <Text style={styles.subTitle}>Remover roteador do sistema</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Cto')} style={styles.card}>
                        <View style={styles.icon}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons
                                    name="package"
                                    size={64}
                                    color='#F55265'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.title}>CTO</Text>
                            <Text style={styles.subTitle}>Remover roteador do sistema</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.subTitle}>®rbrasildev - Todos os direitos reservados</Text>
                <Text style={styles.subTitle}>Versão:{version}</Text>
            </View>
        </SafeAreaView>
    );
}

export default Home;
