import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131314',
        padding: 20,
    },
    list : {
        flexDirection:'row',
        backgroundColor:'#141414',
        margin:1,
        padding:5.4,
        color:'#d0d0d0',
        alignItems:'center',
        justifyContent:'space-between'
        
    },
    title: {
        fontSize: 20,
        color: '#d0d0d0',
        fontWeight:'bold',
    },

    subTitle: {
        fontSize: 18,
        color: '#666',
    },

    card : {
        padding:5.4,
        marginTop:5.4,
        backgroundColor:'#1E1F20',
        justifyContent:'center'
    },
    wifiContainer : {
        padding:5.4,
        marginTop:5.4,
        justifyContent:'center'
    },
    contentCopy : {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btnCopy : {
        backgroundColor:'#666',
        padding:5.4,
        width:80,
        alignItems:'center',
    },

});

export default styles;