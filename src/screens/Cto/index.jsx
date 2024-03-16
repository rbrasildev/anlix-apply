import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from './../../../styles/Global.jsx'
import { useState } from "react";
import { Alert } from "react-native";

export default function App({ navigation }) {
    const [ctoIdent, setCtoIdent] = useState('')

    async function navigateToCto() {
        const data = await fetch(`http://170.245.175.14:9595/api/api.php?cto=${ctoIdent}`).then((response) => response.json())
        if (ctoIdent == '') {
            Alert.alert(
                "Atenção",
                "Este campo não pode ser vazio verme!",
            )
            return
        }
        if (data.status == 404) {
            Alert.alert('Error 404', data.message);
            return
        } else {
            navigation.navigate('Cto', {
                data: data,
                ctoIdent,
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%' }}>
                <TextInput
                    value={ctoIdent}
                    onChangeText={setCtoIdent}
                    style={styles.input} />
                <TouchableOpacity
                    onPress={navigateToCto}
                    style={styles.button}>
                    <Text>Buscar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}