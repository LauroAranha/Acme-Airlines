import React from 'react';
import { Text, StyleSheet } from 'react-native';

const  ExemploComponente = () => {
    return (
        <Text style={styles.textStyle}>Exemplo de componente exportado (text)</Text>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        color:'red',
        alignItems:"center",
        display:"flex",
        justifyContent:"center",
        fontSize:30,
    }
})

export default ExemploComponente;