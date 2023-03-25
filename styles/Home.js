import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202430',
        justifyContent: 'space-between'

    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#d0d0d0',
    },

    subTitle: {
        fontSize: 14,
        color: '#4E596F',
        margin: 4.2
    },
    header: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        padding: 20,
        backgroundColor: "#242A38",
    },
    welcome: {
        flexDirection: 'column',
        margin: 20,
        justifyContent: 'flex-start',
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
        justifyContent: 'flex-start',
        backgroundColor: '#242A38',
        borderRadius: 4,
        height: 100,
        width: '90%',
        color: '#FFF',
        fontSize: 30,
        boxShadow: '0px 0px 10px #000',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo:
    {
        width: 100,
        height: 40,
        marginBottom: 20,
    },
});