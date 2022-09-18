import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0E2FF',
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
    },
    IconTab: {
        
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
    scrollview: {
        alignItems: 'center',
        justifyContent:'space-around',
       },
});

export default styles;
