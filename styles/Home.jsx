import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131314',
        justifyContent: 'space-between'

    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#ddd',
    },

    subTitle: {
        color: '#87949D',
        margin: 4.2
    },
    header: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        padding: 20,
    },
    welcome: {
        margin: 20,
    },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        marginTop: 10,
        backgroundColor: '#1E1F20',
        borderRadius: 10,
        height: 100,
        width: '93%',
        color: '#FFF',
        fontSize: 30,
        elevation:3,
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

export default styles;