import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import ExemploComponente from '../../components/ExemploComponente';
import LogCadButton from '../../components/LogCadButton';
import InputText from '../../components/InputText';

const CadMecanico = ({ navigation }) => {
    const [cpf, onChangeText] = React.useState('');


    return (
        <View style={style.container}>
            <ScrollView>
                <InputText name="Nome" />
                <Text style={style.texto}>CPF</Text>
                <TextInputMask
                    type={'cpf'}
                    value={cpf}
                    keyboardType="numeric"
                    style={style.space}
                    placeholder="___.___.___-__"
                    onChangeText={(text) => onChangeText(text)}
                ></TextInputMask>
                <InputText name="RG" />
                <InputText name="Cargo" />
                <InputText name="E-mail" />
                <Text style={style.texto}>Telefone</Text>
                <TextInputMask
                    type={'cpf'}
                    value={cpf}
                    keyboardType="numeric"
                    style={style.space}
                    placeholder="()_____-____"
                    onChangeText={(text) => onChangeText(text)}
                ></TextInputMask>
                <LogCadButton name="Cadastrar" />
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

});

export default CadMecanico;
