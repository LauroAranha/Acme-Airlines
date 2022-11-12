import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const CadMecanico = ({ navigation }) => {

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
                <Text style={styles.loginText}>Nome:</Text>
                <TextInput style={styles.input}/> 
                <Text style={styles.loginText}>CPF:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>RG:</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Cargo:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Email:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Telefone:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Email:</Text> 
                <TextInput style={styles.input}/>
             <View style = {{flexDirection: 'row',justifyContent:'space-between',}}>
                <TouchableOpacity
                    style={styles.btnCadastro}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.btnText}>Voltar</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.btnText}>Cadastrar-se</Text> 
                </TouchableOpacity>
                </View>
            </View>
        </View>
            </View>
    </ScrollView>
    );
};


export default CadMecanico;
