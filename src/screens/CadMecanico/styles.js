import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#030A31',
        paddingBottom: '23%',
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
        maxHeight: '150%',
        maxWidth: '95%',
        borderRadius: 15,
        minWidth: '75%',
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
        color: '#002D9C',
    },
    btnLogin: {
        marginTop: 10,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#4589FF',
        maxWidth: '70%',
        minWidth: '50%',
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
    btnCadastro: {
        marginTop: 10,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#4589FF',
        maxWidth: '50%',
        minWidth: '30%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    btnUpload: {
        marginTop: 10,
        borderRadius: 15,
        
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#4589FF',
        maxWidth: '100%',
        minWidth: '30%',
        alignSelf: 'center',
        alignItems: 'center',
    },
});

export default styles;