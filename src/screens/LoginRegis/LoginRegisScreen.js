import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

const LoginRegisScreen = ({ navigation }) => {
    const [cpf, onChangeText] = React.useState('');
    const [password, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.container}>
            {/* Lugar da logo */}
            <Image
                style={styles.logo}
                source={require('../../../assets/Acmelogo.png')}
            />
            <View style={styles.loginBox}>
                <Text style={styles.loginText}>CPF:</Text>
                <TextInputMask
                    type={'cpf'}
                    value={cpf}
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder="___.___.___-__"
                    onChangeText={(text) => onChangeText(text)}
                ></TextInputMask>
                <Text style={styles.loginText}>Senha:</Text>
                <TextInput
                    value={password}
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="**********"
                    onChangeNumber={(text) => onChangeNumber(text)}
                ></TextInput>
                <TouchableOpacity style={styles.forgotPass}>
                    <Text style={styles.forgotPassword}>
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('CadMecanico')}>
                    <Text>Ainda não possui uma conta?</Text>
                    <Text style={styles.registerText}>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginRegisScreen;