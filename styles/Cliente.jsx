import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131314',
        padding:15,
    
    },

    title: {
        fontSize: 20,
        color: '#4CB752',
        fontWeight:'bold',
        marginBottom: 30,
    },

    subTitle: {
        fontSize: 18,
        color: '#87949D',
        margin:5.4,
    },

    titleDescription:{
        fontSize: 20,
        color: '#395487',
        fontWeight:'bold',
        marginBottom: 30,
    },

    card: {
        padding:20,
        marginBottom:20,
        marginTop:20,
        borderRadius: 4,
        color: '#FFF',
        fontSize: 30,
        boxShadow: '0px 0px 10px #000',
    },
    input: {
        backgroundColor: '#1E1F20',
        elevation:1,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 20,
        fontSize: 20,
        color:'#87949D',
      },
    button: {
        backgroundColor: '#4CB752',
        height:60,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30,
    }
});

export default styles;