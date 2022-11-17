import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Alert,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import PickerSelect from 'react-native-picker-select';
import styles from './styles';

import { auth } from '../../firebase';
import {
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    getDocs,
    doc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'

const CadastroM = ({ navigation }) => {

    const [nome, setNome] = useState("kawan ele mesmo");
    const [cpf, setCpf] = useState("435.367.956-00");
    const [rg, setRg] = useState("59.634.856-22");
    const [email, setEmail] = useState("kawan.ximendes@gmail.com");
    const [telefone, setTelefone] = useState("(+55)950234-6542");

    const [password, setPassword] = useState("senha123");

    const signUp = async () => {
        try {
            const createUser = createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
                console.log('Usuário: ', userCredential)
            })
            console.log(createUser)
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log("Email já existe.")
            }
            if (error.code === 'auth/invalid-email') {
                console.log("Email invalido.")
            }
            console.log("Erro")
        }
    }

    const forgotPassword = async () => {
        //redefinir Senha
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Verifique sua caixa de e-mail.')
                console.log("email: " + email)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }

    const addUser = async () => {
        try {
            // aqui é atribuido a função addDoc (cuja função é adicionar um documento no firebase) a constante docRef
            // os parâmetros são a ligação pro firestore ( getFirestore()) e a collection que o documento será adicionado
            const docRef = await addDoc(collection(db, 'mecanicoGeral'), {
                nome: nome,
                cpf: cpf,
                rg: rg,
                email: email,
                telefone: telefone,
            });
            console.log('Documento adicionado com sucesso! ID: ', docRef.id);
            setNome('');
            setCpf('');
            setRg('');
            setEmail('');
            setTelefone('');
        } catch (e) {
            console.error('Erro adicionando o documento: ', e);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/Acmelogo.png')}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                        <Image
                            style={styles.perfil}
                            source={require('../../../assets/user.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>
                        <Text style={styles.loginText}>Nome:</Text>
                        <TextInput
                            value={nome}
                            style={styles.input} />

                        <Text style={styles.loginText}>CPF:</Text>
                        <TextInputMask
                            type={'cpf'}
                            value={cpf}
                            keyboardType="numeric"
                            style={styles.input}
                            placeholder="___.___.___-__"
                            onChangeText={(text) => setCpf(text)}
                        ></TextInputMask>

                        <Text style={styles.loginText}>RG:</Text>
                        <TextInputMask
                            type={'custom'}
                            value={rg}
                            options={{
                                mask: '999.999.999-SS'
                            }}
                            placeholder="000.000.000-00"
                            style={styles.input}
                            onChangeText={(text) => setRg(text)}
                        ></TextInputMask>

                        <Text style={styles.loginText}>Email:</Text>
                        <TextInput value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.input} />

                        <Text style={styles.loginText}>Telefone:</Text>
                        <TextInputMask
                            type={'cel-phone'}
                            value={telefone}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(+55) ',
                            }}
                            placeholder="(+55)00000-0000"
                            keyboardType="numeric"
                            style={styles.input}
                            onChangeText={(text) => setTelefone(text)}
                        ></TextInputMask>
                    </View>
                    <TouchableOpacity
                        style={styles.btnCadastro}
                        onPress={() => signUp(setEmail, setPassword).then(() => setTimeout(() => {
                            forgotPassword(setEmail)
                        }, 10000)).then(() => addUser())}
                    >
                        <Text style={styles.btnText}>Cadastrar usuario no auth</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >

        </View >
    );
};

export default CadastroM;
