import React from 'react';
import { Text, StyleSheet } from 'react-native';

const  ExemploComponente = () => {
    return (
        <Text style={styles.textStyle}>Página de componentes</Text>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        color:'black',
        alignItems:"center",
        display:"flex",
        justifyContent:"center",
        fontSize:25,
    }
})

export default ExemploComponente;