import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';

import BtnImage from '../../components/BtnImage';
import LogCadButton from '../../components/LogCadButton';
import ExemploComponente from '../../components/ExemploComponente';
import InputText from '../../components/InputText';

const ComponentsTemplate = () => {
    return (
        <View style={styles.container}>
            <ExemploComponente />

            <View style={styles.divisao} />

            <Text>Pra alterar a label, insira o parametro name="exemplo"</Text>
            <InputText name="Input data" />

            <View style={styles.divisao} />

            <Text>
                Botão com imagem. 
                {'\n'}
                Parâmetros: imageName =
                'nomedaimagem.png' / size='small'/'big'
            </Text>
            <BtnImage imageName="plane.jpg" size="small" />

            <View style={styles.divisao} />

            <Text>botao de login e cadastro</Text>
            <LogCadButton />

            <View style={styles.divisao} />
        </View>
    );
};

export default ComponentsTemplate;
