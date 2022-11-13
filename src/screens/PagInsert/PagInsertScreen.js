import styles from './styles';
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

import AppItem from '../../components/AppItem';

import { app, db } from '../../firebase';
import {
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    getDocs,
    doc,
} from 'firebase/firestore';

const PagInsert = ({ navigation }) => {
    //atributos que serão adicionados no formulario
    const [nome, setNome] = useState([]);
    const [email, setEmail] = useState([]);
    const [JSON_DATA, setJSON_DATA] = useState('');
    const [showIndicator, setShowIndicator] = useState(true);
    const list = [];
    //função para adicionar usuário
    const addUser = async () => {
        try {
            // aqui é atribuido a função addDoc (cuja função é adicionar um documento no firebase) a constante docRef
            // os parâmetros são a ligação pro firestore ( getFirestore()) e a collection que o documento será adicionado
            const docRef = await addDoc(collection(db, 'user'), {
                nome: nome,
                email: email,
            });
            console.log('Documento adicionado com sucesso! ID: ', docRef.id);
            setNome('');
            setEmail('');
        } catch (e) {
            console.error('Erro adicionando o documento: ', e);
        }
    };
    //função para adicionar usuário
    useEffect(() => {

        async function listUser() {
            try {
                const querySnapshot = await getDocs(collection(db, 'user'));
                querySnapshot.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
                });
                setNome(list);
                setEmail(list);
                setJSON_DATA(list);
                console.log(typeof(JSON_DATA))
            } catch (e) {
                console.error('erro: ', e);
            }
        }
        listUser();
    }, [])

    const excluirDocumento = async () => {
        try {
            console.log('excluirDocumento');
            const res = await deleteDoc(
                doc(db, 'user', '4FGwgNUyMKMMHbDPmhe7')
            );
            console.log('Dado excluido:', res);
        } catch (e) {
            console.error('erro: ', e);
        }
    };




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
                <Text style={styles.loginText}>Email:</Text>
                <TextInput
                    keyboardType="text"
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TouchableOpacity style={styles.btnRedirect} onPress={addUser}>
                    <Text style={styles.btnText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnRedirect}
                    onPress={() => listUser()}
                >
                    <Text style={styles.btnText}>Listar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnRedirect}
                    onPress={() => excluirDocumento()}
                >
                    <Text style={styles.btnText}>Excluir</Text>
                </TouchableOpacity>

                <FlatList
                    data={JSON_DATA}
                    renderItem={({ item }) => (
                        <AppItem
                            style={styles.loginText}
                            nome={"Nome: " + item.nome}
                            email={"Email: " + item.email}
                        ></AppItem>
                    )}
                />
            </View>
        </View>
    );
};

export default PagInsert;
