import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        height: '100%',
    },
    imageBtn: {
        width: 80,
        height: 60,
        resizeMode: 'contain',
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
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D0E2FF',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#303030',
        width: '103%',
        textAlign: 'left',
        padding: 30,
        marginTop: 10,
    },
    btnPrincipalTeste: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#B0B0B0',
        padding: 12,
        maxWidth: '100%',
        minWidth: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        verticalAlign: 'middle',

    },
    imageBtnTeste: {
        width: 80,
        height: 60,
        resizeMode: 'contain',
        padding: '5%',
    },
    btnTextTeste: {
        textAlign: 'left',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#404040',
    },
    btnSubTextTeste: {
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#888888',
    },
    teste: {
        flex: 1,
    }
});

export default styles;