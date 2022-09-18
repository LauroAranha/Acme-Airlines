import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import InputText from '../../components/InputText';
import LogCadButton from '../../components/LogCadButton';

const ListaAero = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <InputText name='Numero da Matricula' />
                <InputText name='Modelo da Aeronave' />
                <InputText name='Nacionalidade' />
                <InputText name='Categoria' />
                <LogCadButton name='Acessar info'/>
            </View>
        </View>
    );
};



export default ListaAero;