import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#030A31',
        height: '100%',
    },
    header: {
        backgroundColor: '#4589FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 15,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        width: '103%',
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '15%',
    },
    logo: {
        width: 120,
        height: 100,
        resizeMode: 'contain',
    },

    perfil: {
        width: 80,
        height: 60,
        resizeMode: 'contain',
    },
    imageBtn: {
        width: 80,
        height: 60,
        resizeMode: 'contain',
    },
    loginText: {
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnPrincipal: {
        borderRadius: 15,
        backgroundColor: '#4589FF',
        margin: 10,
        padding: 13,
        maxWidth: '50%',
        minWidth: '30%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    containerBtn: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;