import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131314',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

    },
    input: {
        backgroundColor: '#1e1f20',
        borderColor: '#333',
        color:'#666',
        borderWidth: 1,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        fontSize: 20,
    },
    button: {
        backgroundColor: '#4CB752',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        fontWeight: 'bold',
        color:'#ccc'
    },
});

export default styles;