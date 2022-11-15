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
    const [nome, setNome] = useState([]);
    const [matriculaAeronave, setMatriculaAeronave] = useState([]);
    const [ultimoVoo, setUltimoVoo] = useState([]);
    const [horarioChegada, setHorarioChegada] = useState([]);
    const [nacionalidadeAeronave, setNacionalidadeAeronave] = useState([]);
    const [modeloAeronave, setModeloAeronave] = useState([]);
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
                setNome(list);
                setMatriculaAeronave(list);

                setUltimoVoo(list);
                setHorarioChegada(list);

                setNacionalidadeAeronave(list);
                setModeloAeronave(list);

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
                    data={JSON_DATA}
                    renderItem={({ item }) => (
                        <CardAeronave
                            id={item.id}
                            nome={item.nome}
                            matriculaAeronave={item.matriculaAeronave}
                            ultimoVoo={item.ultimoVoo}
                            horarioChegada={item.horarioChegada}
                            nacionalidadeAeronave={item.nacionalidadeAeronave}
                            modeloAeronave={item.modeloAeronave}
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
                    style={{ borderRadius: 100 }}
                    onPress={() => navigation.navigate('CadastroA')}
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

export default GerenciarAeronave;
