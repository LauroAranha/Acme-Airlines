import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0E2FF',
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
    BottomBar: {
        backgroundColor: '#00063A',
        padding: 15,
        height: '10%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        maxWidth: '100%',
        minWidth: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
    },
    IconTab: {

    },
    loginText: {
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnLogin: {
        marginTop: 10,
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#D3D3D3',
        maxWidth: '80%',
        minWidth: '80%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    btnCadastro: {
        marginTop: 30,
        borderRadius: 15,
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#4589FF',
        maxWidth: '80%',
        minWidth: '80%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#FFF',
        borderColor: '#4589FF',
        paddingStart: 10,
    },
    inputLittle: {
        height: 40,
        borderWidth: 1,
        width: 50,
        borderRadius: 10,
        backgroundColor: '#FFF',
        borderColor: '#4589FF',
        paddingStart: 10,
    },
    loginBox: {
        marginTop: '3%',
        backgroundColor: '#f4f4f4',
        padding: 15,
        maxHeight: '98%',
        maxWidth: '99%',
        borderRadius: 15,
        minWidth: '90%',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },
    scrollview: {
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 40,
    },
    select: {
        height: 55,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#FFF',
        borderColor: '#4589FF',
        paddingStart: 10,
    },
    esquerda: {
        textAlign: 'right',
    },
    direita: {
        alignSelf: 'center',
        position: 'absolute',
        right: 0
    },
    innerCard: {
        maxWidth: '100%',
        flex: 1,
        flexDirection: 'row',
    },
    caixona: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
        alignSelf: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#CCC',
        flexDirection: 'row',
    },
    botaoCaixona: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginTop: 10,
    },
});

export default styles;