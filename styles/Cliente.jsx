import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202430',
        padding:20,
        paddingTop:30,
    
    },

    title: {
        fontSize: 20,
        color: '#4CB752',
        fontWeight:'bold',
        marginBottom: 30,
    },

    subTitle: {
        fontSize: 18,
        color: '#666',
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
        backgroundColor: '#D6D6D6',
        height:60,
        borderRadius:4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        marginBottom:10,
        paddingLeft:20,
        fontSize:20,
    },
    button: {
        backgroundColor: '#4CB752',
        height:60,
        borderRadius:4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30,
    }
});

export default styles;