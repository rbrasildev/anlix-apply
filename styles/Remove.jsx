import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#131314',
    justifyContent: 'center'

  },
  input: {
    backgroundColor: '#1E1F20',
    elevation: 1,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    fontSize: 20,
    color: '#666',
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
    height: 55,
    width: '100%',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    fontSize: 16,
  },


});

export default styles;