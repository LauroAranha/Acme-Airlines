import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import LogCadButton from '../../components/LogCadButton';
import InputText from '../../components/InputText';

const AbertManutencao = ({ navigation }) => {



    return (
        <View style={style.container}>
            <ScrollView>
                <InputText name="Número da Matricula" />
                <InputText name="Modelo" />
                <InputText name="Nacionalidade" />
                <InputText name="Tipo da manutenção" />
                <InputText name="Local da Manutenção" />
                <InputText name="Descrição" />
                <InputText name="Equipe/mecânicos designados" />
                <InputText name="Ferramentas específicas necessárias" />
                <InputText name="Nome do componente" />
                <InputText name="Marca do componente" />
                <LogCadButton name="Enviar" />
                <LogCadButton name="Voltar" />
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#030A31',
        paddingTop: '20%',
    },
    texto: {
        textAlign: 'left',
        padding: 5,
        fontSize: 13,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFF',
    },
    space: {
        backgroundColor: '#f4f4f4',
        padding: 15,
        maxHeight: '95%',
        maxWidth: '95%',
        marginBottom: 20,
        borderRadius: 15,
        minWidth: '85%',
        justifyContent: 'space-around',
        textAlign: 'left',
    },
    textStyle:{
        color:'#FFF',
        alignItems:"center",
        display:"flex",
        justifyContent:"center",
        fontSize:30,
        marginTop: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 300,
        height: 60,
        resizeMode: 'contain',
        borderRadius: 20,
        borderWidth: 7,
        borderColor: "#0984E3",
        backgroundColor: '#0984E3',
    },
});

export default AbertManutencao;
