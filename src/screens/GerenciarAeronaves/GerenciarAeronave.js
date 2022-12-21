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
import CardAeronave from '../../components/CardAeronave';

const GerenciarAeronave = ({ navigation }) => {
    //atributos que serão adicionados no formulario
    const [matriculaAeronave, setMatriculaAeronave] = useState([]);
    const [modeloAeronave, setModeloAeronave] = useState([]);
    const [nacionalidadeAeronave, setNacionalidadeAeronave] = useState([]);
    const [hangar, setHangar] = useState([]);
    const [status, setStatus] = useState([]);
    const [descricao, setDescricao] = useState([]);

    const [JSON_DATA, setJSON_DATA] = useState('');

    const [showIndicator, setShowIndicator] = useState(true);
    const list = [];

    useEffect(() => {
        async function listAeronaves() {
            try {
                const querySnapshot = await getDocs(collection(db, 'aeronave'));
                querySnapshot.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
                });
                setMatriculaAeronave(list);
                setModeloAeronave(list);
                setNacionalidadeAeronave(list);

                setHangar(list);
                setStatus(list);
                setDescricao(list);

                setJSON_DATA(list);
            } catch (e) {
                console.error('erro: ', e);
            }
        }
        listAeronaves();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={styles.listBox}>
                <FlatList
                    style={{ width: '100%'}}
                    data={JSON_DATA}
                    renderItem={({ item }) => (
                        <CardAeronave
                            id={item.id}
                            matriculaAeronave={item.matriculaAeronave}
                            nacionalidadeAeronave={item.nacionalidadeAeronave}
                            modeloAeronave={item.modeloAeronave}
                            hangar={item.hangar}
                            status={item.status}
                            descricao={item.descricao}
                        ></CardAeronave>
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
                    style={{ borderRadius: 100, backgroundColor: 'white' }}
                    onPress={() => navigation.navigate('Cadastro Aeronave')}
                >
                    <MaterialIcons
                        name="add-circle"
                        size={70}
                        color="#4842FF"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GerenciarAeronave;
