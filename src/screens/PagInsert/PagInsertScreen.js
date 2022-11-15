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

import CardMecanico from '../../components/CardMecanico';

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
    const [nome, setNome] = useState("Josinei Santos");
    const [email, setEmail] = useState("Josinei@gmail.com");
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
                setJSON_DATA(list);
            } catch (e) {
                console.error('erro: ', e);
            }
        }
        listUser();
    }, [])

    async function excluirDocumento(teste) {
        try {
            console.log('excluirDocumento');
            const res = await deleteDoc(
                doc(db, 'user', teste)
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
                    onPress={() => excluirDocumento('teste')}
                >
                    <Text style={styles.btnText}>Excluir</Text>
                </TouchableOpacity>

                <FlatList
                    data={JSON_DATA}
                    renderItem={({ item }) => (
                        <CardMecanico
                            id={item.id}
                            nome={item.nome}
                            email={item.email}
                        ></CardMecanico>
                    )}
                />
            </View>
        </View>
    );
};

export default PagInsert;
