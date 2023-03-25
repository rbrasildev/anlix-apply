import React, { version } from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#242A38"
                translucent={true} />
            <View>
                <View style={styles.header} >
                    <View>
                        <Image source={require('../../assets/logo.png')} style={styles.imageLogo} />
                    </View>
                </View>

                <View style={styles.welcome}>
                    <Text style={styles.subTitle} >Developed</Text>
                    <Text style={{ fontSize: 20, color: '#4CB752' }}>@rbrasildev</Text>
                </View>

                <View style={styles.main}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202430',
        justifyContent: 'space-between'

    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#d0d0d0',
    },

    subTitle: {
        fontSize: 14,
        color: '#4E596F',
        margin: 4.2
    },
    header: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        padding: 20,
        backgroundColor: "#242A38",
    },
    welcome: {
        flexDirection: 'column',
        margin: 20,
        justifyContent: 'flex-start',
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        justifyContent: 'flex-start',
        backgroundColor: '#242A38',
        borderRadius: 4,
        height: 100,
        width: '90%',
        color: '#FFF',
        fontSize: 30,
        boxShadow: '0px 0px 10px #000',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo:
    {
        width: 100,
        height: 40,
        marginBottom: 20,
    },
});