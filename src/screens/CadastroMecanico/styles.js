import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0E2FF',
        top: 50,
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
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
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
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#4589FF',
        maxWidth: '90%',
        minWidth: '90%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    btnCadastro: {
        marginTop: 10,
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
    loginBox: {
        backgroundColor: '#f4f4f4',
        marginTop: '3%',
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
        justifyContent:'space-around',
       },
       select: {
        height: 55,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#FFF',
        borderColor: '#4589FF',
        paddingStart: 10,
    },
});

export default styles;