import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0E2FF',
    },
    baseText: {
        marginTop: '5%',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#002D9C',
        fontSize: 20,
    },

    BottomBar: {
        backgroundColor: '#00063A',
        position: 'absolute',
        bottom: '0%',
        padding: 15,
        height: '10%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    btnImagem: {
        marginTop: 10,
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 17,
        borderWidth: 7,
        borderColor: '#002D9C',
    },
    IconTab: {
        width: 40,
        height: 40,
    },
    TextTab1: {
        color: 'white',
    },
    TextTab2: {
        color: 'white',
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
        justifyContent: 'space-around',
    },
    ListItem: {
        marginTop: '5%',
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 20,
    },
});

export default styles;
