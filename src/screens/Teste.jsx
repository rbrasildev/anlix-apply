import React, { useState, useEffect } from "react";
import { useGetDataSgp } from "../../services/useGetDataSgp";
import { View, Text, Alert, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ActivityIndicator } from "react-native";
import styles from "../../styles/Teste";

export default function Teste({ route, navigation }) {

  const [pppoe, setPppoe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getApiSgp } = useGetDataSgp();


  const getDataSgp = async () => {
    try {
      setIsLoading(true);
      const response = await getApiSgp(pppoe);
      if (pppoe == "") {
        Alert.alert(
          "Atenção",
          "Este campo não pode ser vazio verme!",
          )
          return
        }
        if (!response.login) {
          Alert.alert(
            "Falha ao buscar dados",
            "Cliente não encontrado!",
            )
            return
          }
          
      navigation.navigate("Cliente", {
        cpf: pppoe
      });
    }
    catch (error) {
      console.log(error)
      return error;
    }

  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
     
        <KeyboardAvoidingView behavior="position" enabled>
          <Text style={{ fontSize: 50, color: '#4CB752' }}>PixApply</Text>
          <Text style={{ fontSize: 30, marginBottom: 100, color: '#4E596F' }}>Parintins</Text>
          {isLoading && <ActivityIndicator size="large" color="#fff" />}
          <Text style={{ fontSize: 20, color: "#d0d0d0", fontWeight: 'bold' }}>PPPoE</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o PPPoE cliente"
            value={pppoe}
            onChangeText={setPppoe}
            autoCapitalize={false}

          />
          <TouchableOpacity style={styles.button}
            onPress={getDataSgp}
          >
            <Text style={{ fontSize: 20 }}>Enviar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}