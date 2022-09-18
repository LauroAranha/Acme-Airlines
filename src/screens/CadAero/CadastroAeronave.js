import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

import ExemploComponente from '../../components/ExemploComponente'
import InputText from '../../components/InputText';
import LogCadButton from '../../components/LogCadButton';

const CadAero = ({ navigation }) => {

    return (
        <ScrollView>
        <View style={styles.container}>
            {/* Lugar da logo */}
            <Image
                style={styles.logo}
                source={require('../../../assets/Acmelogo.png')}
            />
            <View>
            <View style={styles.loginBox}>
                <Text style={styles.loginText}>Matricula da Aeronave:</Text>
                <TextInput style={styles.input}/> 
                <Text style={styles.loginText}>Modelo da Aeronave:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Nacionalidade do Modelo:</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Categoria do Modelo:</Text> 
                <TextInput style={styles.input}/>
             <View style = {{flexDirection: 'row',justifyContent:'space-between',}}>
                <TouchableOpacity
                    style={styles.btnCadastro}
                    onPress={() => navigation.navigate('ListaAeronaves')}
                >
                    <Text style={styles.btnText}>Voltar</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ListaAeronaves')}
                >
                    <Text style={styles.btnText}>Cadastrar Avião</Text> 
                </TouchableOpacity>
                </View>
            </View>
        </View>
            </View>
    </ScrollView>
    );
};


export default CadAero;
