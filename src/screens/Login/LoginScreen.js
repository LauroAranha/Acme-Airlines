import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
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
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'



const Login = ({ navigation }) => {

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [erroLogin, setErroLogin] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            const email = user.email;
            navigation.navigate('Principal')
        } else {
            console.log("Nenhum usuário ativo")
        }
    });

    const logInWithEmailAndPassword = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                let user = userCredential.user
                console.log("Usuário autenticado! " + user.email)
                navigation.navigate('Principal')
            });
            setEmail('')
            setPassword('')
        } catch (e) {
            setErroLogin(true)
            {
                <View>
                    {Alert.alert('Login inválido, revise seus dados.\n\n' + e.message)}
                </View>
            }
        }
    };

    const handleLogin = async () => {
        logInWithEmailAndPassword(setEmail, setPassword)
    }

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
                        handleLogin();
                        setErroLogin(false)
                    }}
                >
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
                {
                }
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;