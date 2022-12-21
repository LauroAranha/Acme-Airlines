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
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
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

// createThreeButtonAlert = () =>
//     Alert.alert(
//         'Deseja Cadastrar essa Aeronave 🤔',
//         'Essa operação nâo pode ser desfeita mais tarde.',
//         [
//             {
//                 text: 'Não',
//                 onPress: () => console.log('Cancel Pressed'),
//                 style: 'cancel',
//             },
//             {
//                 text: 'Sim',
//                 onPress: () => {
//                     {
//                         this.createThreeButtonAlert2;
//                         addUser();
//                     }
//                 },
//             },
//         ]
//     );

const EditarAeronave = ({ navigation, route }) => {
    const [nomeEdit, setNomeEdit] = useState(route.params.nome);
    const [matriculaAeronaveEdit, setMatriculaAeronaveEdit] = useState(route.params.matriculaAeronave);
    const [ultimoVooEdit, setUltimoVooEdit] = useState(route.params.ultimoVoo);
    const [horarioChegadaEdit, setHorarioChegadaEdit] = useState(route.params.horarioChegada);
    const [nacionalidadeAeronaveEdit, setNacionalidadeAeronaveEdit] = useState(route.params.nacionalidadeAeronave);
    const [modeloAeronaveEdit, setModeloAeronaveEdit] = useState(route.params.modeloAeronave);
    const idAeronave = route.params.id;
    // const [JSON_DATA, setJSON_DATA] = useState('');
    // const [showIndicator, setShowIndicator] = useState(true);
    // const list = [];

    async function editarAeronave(
        nome,
        matriculaAeronave,
        ultimoVoo,
        horarioChegada,
        nacionalidadeAeronave,
        modeloAeronave,
        id
    ) {
        try {
            // aqui é atribuido a função addDoc (cuja função é adicionar um documento no firebase) a constante docRef
            // os parâmetros são a ligação pro firestore ( getFirestore()) e a collection que o documento será adicionado
            const docRef = await updateDoc(
                doc(db, 'aeronave', idAeronave), {
                nome: nomeEdit,
                matriculaAeronave: matriculaAeronaveEdit,
                ultimoVoo: ultimoVooEdit,
                horarioChegada: horarioChegadaEdit,
                nacionalidadeAeronave: nacionalidadeAeronaveEdit,
                modeloAeronave: modeloAeronaveEdit,
            }
            );

            navigation.navigate('GerenciarAeronave');
        } catch (e) {
            console.error('Erro adicionando o documento: ', e);

            console.log('Id: ', idAeronave);
            console.log('Nome: ', nomeEdit);
        }
    }

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
                        {/* {image && (
                            <Image
                                source={{ uri: image }}
                                style={{ width: 200, height: 200 }}
                            />
                        )} */}
                        <Text style={styles.loginText}>Nome da Aeronave:</Text>
                        <TextInput
                            style={styles.input}
                            value={nomeEdit}
                            onChangeText={(text) => setNomeEdit(text)}
                        />

                        <Text style={styles.loginText}>
                            Matricula da Aeronave:
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={matriculaAeronaveEdit}
                            onChangeText={(text) => setMatriculaAeronaveEdit(text)
                            }
                        />

                        <Text style={styles.loginText}>Ultimo Voo:</Text>
                        <TextInput
                            style={styles.input}
                            value={ultimoVooEdit}
                            onChangeText={(text) => setUltimoVooEdit(text)}
                        />

                        <Text style={styles.loginText}>
                            Horario de Chegada:
                        </Text>
                        <TextInputMask
                            type={'datetime'}
                            value={horarioChegadaEdit}
                            options={{ format: 'HH:mm' }}
                            keyboardType="numeric"
                            placeholder="__:__"
                            onChangeText={(text) => setHorarioChegadaEdit(text)}
                            style={styles.inputLittle}
                        />

                        <Text style={styles.loginText}>
                            Nacionalidade da Aeronave
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={nacionalidadeAeronaveEdit}
                            onChangeText={(text) =>
                                setNacionalidadeAeronaveEdit(text)
                            }
                        />

                        <Text style={styles.loginText}>Modelo da Aeronave</Text>
                        <TextInput
                            style={styles.input}
                            value={modeloAeronaveEdit}
                            onChangeText={(text) => setModeloAeronaveEdit(text)}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.btnCadastro}
                        onPress={() =>
                            editarAeronave(
                                nomeEdit,
                                matriculaAeronaveEdit,
                                ultimoVooEdit,
                                nacionalidadeAeronaveEdit,
                                modeloAeronaveEdit,
                                idAeronave
                            )
                        }
                    >
                        <Text style={styles.btnText}>Cadastar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default EditarAeronave;
