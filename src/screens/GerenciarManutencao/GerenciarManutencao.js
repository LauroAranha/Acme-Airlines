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
import CardManutencao from '../../components/CardManutencao';

const GerenciarManutencao = ({ navigation }) => {
    //atributos que serão adicionados no formulario
    const [nomeManutencao, setNomeManutencao] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [descricao, setDescricao] = useState("");
    const [estimativa, setEstimativa] = useState("");
    const [idAeronave, setIdAeronave] = useState("");
    const [idMecanicoResponsavel, setIdMecanicoResponsavel] = useState("");
    const [statusManutencao, setStatusManutencao] = useState("");

    const [JSON_DATA, setJSON_DATA] = useState('');

    const [showIndicator, setShowIndicator] = useState(true);
    const list = [];

    useEffect(() => {
        async function listManutencao() {
            try {
                const querySnapshot = await getDocs(collection(db, 'manutencao'));
                querySnapshot.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
                });
                setNomeManutencao(list);
                setPrioridade(list);
                setDescricao(list);
                setEstimativa(list);
                setIdAeronave(list);
                setIdMecanicoResponsavel(list);
                setStatusManutencao(list);

                setJSON_DATA(list);
                console.log(list)
            } catch (e) {
                console.error('erro: ', e);
            }
        }
        listManutencao();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={styles.listBox}>
                <FlatList
                    style={{ width: '100%'}}
                    data={JSON_DATA}
                    renderItem={({ item }) => (
                        <CardManutencao
                            id={item.id}
                            nomeManutencao={item.nomeManutencao}
                            prioridade={item.prioridade}
                            descricao={item.descricao}
                            estimativa={item.estimativa}
                            idAeronave={item.idAeronave}
                            idMecanicoResponsavel={item.idMecanicoResponsavel}
                            statusManutencao={item.statusManutencao}
                        ></CardManutencao>
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
                    onPress={() => navigation.navigate('Adicionar Manutenção')}
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

export default GerenciarManutencao;
