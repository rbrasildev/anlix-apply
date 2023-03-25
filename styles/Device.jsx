import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        justifyContent:'center',
        alignItems : 'center'
        
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
      },

      textInput: {
        backgroundColor: '#D6D6D6',
        height:55,
        width:'100%',
        borderRadius:4,
        marginTop:10,
        marginBottom:10,
        paddingLeft:20,
        fontSize:16,
    },


});

export default styles;