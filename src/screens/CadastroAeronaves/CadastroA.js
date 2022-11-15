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
import Header from '../../components/Header';

import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import * as ImagePicker from 'expo-image-picker';

import { Ionicons } from '@expo/vector-icons';

import { db } from '../../firebase';
import {
    collection,
    addDoc,
} from 'firebase/firestore';
import styles from './styles';

const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
        setImage(result.uri);
    }
};

createThreeButtonAlert = () =>
    Alert.alert(
        'Deseja Cadastrar essa Aeronave 🤔',
        'Essa operação nâo pode ser desfeita mais tarde.',
        [
            {
                text: 'Não',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Sim', onPress: () => { { this.createThreeButtonAlert2; addUser() } } },
        ]
    );

const CadastroA = ({ navigation }) => {
    const [nome, setNome] = useState([]);
    const [matriculaAeronave, setMatriculaAeronave] = useState([]);
    const [ultimoVoo, setUltimoVoo] = useState([]);
    const [horarioChegada, setHorarioChegada] = useState([]);
    const [nacionalidadeAeronave, setNacionalidadeAeronave] = useState([]);
    const [modeloAeronave, setModeloAeronave] = useState([]);
    const [JSON_DATA, setJSON_DATA] = useState('');
    const [showIndicator, setShowIndicator] = useState(true);
    const list = [];

    const addUser = async () => {
        try {
            // aqui é atribuido a função addDoc (cuja função é adicionar um documento no firebase) a constante docRef
            // os parâmetros são a ligação pro firestore ( getFirestore()) e a collection que o documento será adicionado
            const docRef = await addDoc(collection(db, 'aeronave'), {
                nome: nome,
                matriculaAeronave: matriculaAeronave,
                ultimoVoo: ultimoVoo,
                horarioChegada: horarioChegada,
                nacionalidadeAeronave: nacionalidadeAeronave,
                modeloAeronave: modeloAeronave,
            });
            console.log('Documento adicionado com sucesso! ID: ', docRef.id);
            setNome('');
            setMatriculaAeronave('');
            setUltimoVoo('');
            setHorarioChegada('');
            setNacionalidadeAeronave('');
            setModeloAeronave('');
        } catch (e) {
            console.error('Erro adicionando o documento: ', e);
        }
    };
    const [image, setImage] = useState(null);
    const [time, onChangetime] = React.useState('');
    return (
        <View style={styles.container}>
            <Header />
            <TouchableOpacity
                style={{
                    marginRight: 350,
                    borderRadius: 100,
                    marginTop: 5,
                    marginLeft: 5,
                }}
                onPress={() => navigation.navigate('GerenciarAeronave')}
            >
                <Ionicons
                    name="ios-chevron-back-circle-sharp"
                    size={40}
                    color="#4840ff"
                />
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>
                        <Text style={styles.loginText}>
                            Imagem da Aeronave:
                        </Text>
                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={pickImage}
                        >
                            <Text>Selecione a imagem do Avião</Text>
                        </TouchableOpacity>
                        {image && (
                            <Image
                                source={{ uri: image }}
                                style={{ width: 200, height: 200 }}
                            />
                        )}
                        <Text style={styles.loginText}>Nome da Aeronave:</Text>
                        <TextInput style={styles.input}
                            value={nome}
                            onChangeText={(text) => setNome(text)}
                        />

                        <Text style={styles.loginText}>
                            Matricula da Aeronave:
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={matriculaAeronave}
                            onChangeText={(text) => setMatriculaAeronave(text)} />

                        <Text style={styles.loginText}>Ultimo Voo:</Text>
                        <TextInput style={styles.input}
                            value={ultimoVoo}
                            onChangeText={(text) => setUltimoVoo(text)} />

                        <Text style={styles.loginText}>
                            Horario de Chegada:
                        </Text>
                        <TextInputMask
                            type={'datetime'}
                            value={horarioChegada}
                            options={{ format: 'HH:mm' }}
                            keyboardType="numeric"
                            placeholder="__:__"
                            onChangeText={(text) => setHorarioChegada(text)}
                            style={styles.inputLittle}
                        />

                        <Text style={styles.loginText}>Nacionalidade da Aeronave
                        </Text>
                        <TextInput style={styles.input}
                            value={nacionalidadeAeronave}
                            onChangeText={(text) => setNacionalidadeAeronave(text)} />

                        <Text style={styles.loginText}>Modelo da Aeronave
                        </Text>
                        <TextInput style={styles.input}
                            value={modeloAeronave}
                            onChangeText={(text) => setModeloAeronave(text)} />

                    </View>
                    <TouchableOpacity
                        style={styles.btnCadastro}
                        onPress={() => createThreeButtonAlert}
                    >
                        <Text style={styles.btnText}>Cadastar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default CadastroA;
