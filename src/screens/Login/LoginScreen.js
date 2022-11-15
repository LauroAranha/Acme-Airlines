import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

import { auth } from '../../firebase';
import {
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    getDocs,
    doc,
} from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("lauro@lauro.com");
    const [password, setPassword] = useState("lauro123");

    const logInWithEmailAndPassword = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            });
            console.log("Usuário autenticado!")
            pepino = true
        } catch (e) {
            console.error(e);
            alert(e.message);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            {/* Lugar da logo */}
            <Image
                style={styles.logo}
                source={require('../../../assets/Acmelogo.png')}
            />
            <View style={styles.loginBox}>
                <Text style={styles.loginText}>Email:</Text>
                <TextInput
                    value={email}
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)} />

                <Text style={styles.loginText}>Senha:</Text>
                <TextInput
                    value={password}
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.forgotPass}>
                    <Text style={styles.forgotPassword}>
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => {
                        //logInWithEmailAndPassword(setEmail, setPassword)
                        navigation.navigate('Principal')
                    }}
                >
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;