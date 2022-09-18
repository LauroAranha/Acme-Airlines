import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D0E2FF',
        paddingTop: '20%'
    },
    imagem: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 15,
        borderWidth: 7,
        borderColor: "#002D9C",
    },
    baseText: {
        fontWeight: 'bold',
        paddingRight: '20%',
        color: "#002D9C",
        fontSize: 15,
      },
      loginBox: {
        backgroundColor: '#f4f4f4',
        padding: 15,
        maxHeight: '95%',
        maxWidth: '95%',
        marginBottom: 20,
        borderRadius: 15,
        minWidth: '75%',
        justifyContent: 'space-around',
    },
    loginText: {
        padding: 5,
        fontSize: 13,
        fontWeight: 'bold',
        fontSize: 15,
    },
    btnImagem: {
        marginTop: 10,
        width: 130,
        height: 130,
        resizeMode: 'contain',
        borderRadius: 17,
        borderWidth: 7,
        borderColor: "#002D9C",
        
    },
    btnImagemBig: {
        marginTop: 10,
        width: 300,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 17,
        borderWidth: 7,
        borderColor: "#002D9C",
        
    },
});

export default styles;
