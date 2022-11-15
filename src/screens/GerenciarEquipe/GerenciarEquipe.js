import styles from './styles';
import React, { useState, useEffect } from 'react';

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

import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
    FlatList,
} from 'react-native';

import Header from '../../components/Header';

const GerenciarEquipe = ({ navigation }) => {
    const [nome, setNome] = useState([]);
    const [email, setEmail] = useState([]);
    const [JSON_DATA, setJSON_DATA] = useState('');
    const [showIndicator, setShowIndicator] = useState(true);
    const list = [];

    useEffect(() => {
        async function listUser() {
            try {
                const querySnapshot = await getDocs(collection(db, 'user'));
                querySnapshot.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
                });
            } catch (e) {
                console.error('erro: ', e);
            }
        }
        listUser();
    }, []);

    async function excluirDocumento(teste) {
        try {
            console.log('excluirDocumento');
            const res = await deleteDoc(doc(db, 'user', teste));
            console.log('Dado excluido:', res);
        } catch (e) {
            console.error('erro: ', e);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View>
                <FlatList
                    data={JSON_DATA}
                    renderItem={({ item }) => (
                        <AppItem
                            id={item.id}
                            nome={item.nome}
                            email={item.email}
                        ></AppItem>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default GerenciarEquipe;
