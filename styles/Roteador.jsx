import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#202430',
    },

    title: {
        fontSize: 20,
        color: '#F55265',
        alignItems: "center",
        justifyContent: "center",
        margin:6
    },

    subTitle: {
        fontSize: 18,
        color: '#fff',
        margin:5.4
    },
 

    card: {
        padding: 20,
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: '#242A38',
        borderRadius: 10,
        color: '#FFF',
        fontSize: 30,
        width:"90%"
        
    },


    online : {
        color:'#4CAF50',
    },
    offline : {
        color:'red',
    },
    button: {
        backgroundColor: '#F55265',
        height:60,
        borderRadius:4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30,
        marginTop:10,
        width:'90%'
    }
});

export default styles;