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
import Header from '../../components/Header';

const GerenciarEquipe = ({ navigation }) => {
    //atributos que serão adicionados no formulario
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
                setNome(list);
                setEmail(list);
                setJSON_DATA(list);
            } catch (e) {
                console.error('erro: ', e);
            }
        }
        listUser();
    }, [])

    return (

        <View>
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
        </View>
    );
};

export default GerenciarEquipe;
