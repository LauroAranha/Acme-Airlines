import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const  LogCadButton = () => {
    return (
        <TouchableOpacity Opacitystyle={styles.button}
        onPress={() => navigation.navigate('')}> 
        <Text style={styles.textStyle}>Botao</Text>
        </TouchableOpacity>

        );
};

const styles = StyleSheet.create({
    textStyle:{
        color:'#FFF',
        alignItems:"center",
        display:"flex",
        justifyContent:"center",
        fontSize:30,
        marginTop: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 200,
        height: 60,
        resizeMode: 'contain',
        borderRadius: 2,
        borderWidth: 7,
        borderColor: "#0984E3",
        backgroundColor: '#0984E3',
    },


})

export default LogCadButton;