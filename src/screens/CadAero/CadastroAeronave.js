import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

import ExemploComponente from '../../components/ExemploComponente'
import InputText from '../../components/InputText';
import LogCadButton from '../../components/LogCadButton';

const CadAero = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* Lugar da logo */}
            <Image
                style={styles.logo}
                source={require('../../../assets/Acmelogo.png')}
            />
            <View>
                <InputText name='Numero da Matricula' />
                <InputText name='Modelo da Aeronave' />
                <InputText name='Nacionalidade' />
                <InputText name='Categoria' />
                <LogCadButton name='Cadastrar'/>
                <LogCadButton name='Voltar'/>
            </View>
        </View>
    );
};


export default CadAero;
