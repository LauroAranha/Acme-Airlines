import styles from './styles';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

import AppItem from '../../components/AppItem'

import { app, db } from "../../firebase"
import { getFirestore, collection, addDoc, getDoc, getDocs } from 'firebase/firestore';

const PagInsert = ({ navigation }) => {
    //atributos que serão adicionados no formulario
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    //função para adicionar usuário
    const addUser = async () => {
        try {
            // aqui é atribuido a função addDoc (cuja função é adicionar um documento no firebase) a constante docRef
            // os parâmetros são a ligação pro firestore ( getFirestore()) e a collection que o documento será adicionado
            const docRef = await addDoc(collection(db, "user"), {
                nome: nome,
                email: email
            });
            console.log("Documento adicionado com sucesso! ID: ", docRef.id);
            setNome("")
        } catch (e) {
            console.error("Erro adicionando o documento: ", e);
        }
    }

     //função para adicionar usuário
    const listUser = async () => {
        const querySnapshot = await getDocs(collection(db, "user"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
        });
    };

    // useEffect utilizado para chamar a
    useEffect(() => {
        listUser();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <Text style={styles.loginText}>Nome:</Text>
                <TextInput
                    keyboardType="text"
                    style={styles.input}
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                />

                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={addUser}
                >
                    <Text style={styles.btnText}>fazer cadastro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnRedirect}
                    onPress={() => listUser()}
                >
                    <Text style={styles.btnText}>Listar</Text>
                </TouchableOpacity>


            </View>
        </View>
    );
};

export default PagInsert;
