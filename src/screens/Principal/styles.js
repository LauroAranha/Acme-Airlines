import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#030A31',
        paddingTop: '40%',
        paddingBottom: '120%',
    },
    header: {
        backgroundColor: '#4589FF',
        paddingRight: '80%',
        paddingTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        width: '220%',
    },
    logo: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        marginLeft: '30%',
        marginRight: '50%',
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
        padding: 10,
        maxWidth: '50%',
        minWidth: '30%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;
