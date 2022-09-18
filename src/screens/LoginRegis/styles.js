import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#030A31',
        paddingTop: '5%',
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#FFF',
        borderColor: '#4589FF',
        paddingStart: 10,
    },
    loginBox: {
        backgroundColor: '#f4f4f4',
        padding: 15,
        maxHeight: '60%',
        maxWidth: '95%',
        marginBottom: 70,
        borderRadius: 15,
        minWidth: '75%',
        justifyContent: 'space-around',
    },
    forgotPass: {
        paddingTop: 10,
    },
    forgotPassword: {
        textDecorationLine: 'underline',
        marginBottom: 15,
    },
    loginText: {
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnLogin: {
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#4589FF',
        maxWidth: '50%',
        minWidth: '30%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerText: {
        textDecorationLine: 'underline',
    },
    registerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
});

export default styles;
