import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';

import ExemploComponente from '../../components/ExemploComponente'
import InputText from '../../components/InputText';

const ComponentsTemplate = () => {
    return (
        <View style={styles.container}>
            <ExemploComponente />

            <View style={styles.divisao} />

            <View>Pra alterar a label, insira o parametro name="exemplo"</View>
            <InputText name='Input data'/>

            <View style={styles.divisao} />
            


        </View>
    );
};

export default ComponentsTemplate;
