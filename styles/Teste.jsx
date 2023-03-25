import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#202430',
      },
      input: {
        backgroundColor: '#ddd',
        borderColor: '#2A3B70',
        borderWidth: 1,
        height: 60,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        fontSize: 20,
        placeholderTextColor: '#d0d0d0',
      },
      button: {
        backgroundColor: '#4CB752',
        height: 60,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
      }
})

export default styles;