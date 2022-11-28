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
    ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { MaterialIcons } from '@expo/vector-icons';

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
                const querySnapshot = await getDocs(collection(db, 'mecanicoGeral'));
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
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={styles.listBox}>
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
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    alignSelf: 'flex-start',
                    left: 5,
                    bottom: 5,
                }}
            >
                <TouchableOpacity
                    style={{ borderRadius: 100 }}
                    onPress={() => navigation.navigate('Cadastro Mecânico')}
                >
                    <MaterialIcons
                        name="add-circle"
                        size={65}
                        color="#4842FF"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GerenciarEquipe;
