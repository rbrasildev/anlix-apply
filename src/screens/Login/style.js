import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131314',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: '100%',
        backgroundColor:'#1E1F20',
        opacity:0.5,
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        marginBottom: 60,
        zIndex:-100,
    },
    login: {
        padding:10,
        margin:10,
    },
    input: {
        backgroundColor: '#1e1f20',
        elevation: 1,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingLeft: 20,
        fontSize: 20,
        color: '#87949D',
    },
    button: {
        backgroundColor: '#4CB752',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }
})

export default styles;