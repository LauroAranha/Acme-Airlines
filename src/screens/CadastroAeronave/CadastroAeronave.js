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
import { Button, Paragraph, Dialog, Portal, Provider, RadioButton } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import * as ImagePicker from 'expo-image-picker';

import { Ionicons } from '@expo/vector-icons';

import { db, storage } from '../../firebase';
import {
    collection,
    addDoc,
} from 'firebase/firestore';


import { ref, uploadBytes } from "firebase/storage";
import styles from './styles';


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

const CadastroAeronave = ({ navigation }) => {
    const [matriculaAeronave, setMatriculaAeronave] = useState([]);
    const [modeloAeronave, setModeloAeronave] = useState([]);
    const [nacionalidadeAeronave, setNacionalidadeAeronave] = useState([]);
    const [hangar, setHangar] = useState([]);
    const [status, setStatus] = useState([]);
    const [descricao, setDescricao] = useState([]);

    const [arquivo, setArquivo] = useState(null);
    const [uploadArquivo, setUploadArquivo] = useState(false);

    const [JSON_DATA, setJSON_DATA] = useState('');
    const list = [];

    const [showIndicator, setShowIndicator] = useState(true);


    const [prioridade, setPrioridade] = useState("");

    const showSelectedPrioridadeDialog = () => setPrioridadeVisibilityState(true);
    const hideSelectedPrioridadeDialog = () => setPrioridadeVisibilityState(false);
    var [propriedadeVisibilityState, setPrioridadeVisibilityState] = useState(false);
    const [selectedPrioridade, setSelectedPrioridade] = React.useState(false);

    const handlePrioridade = async () => {
        hideSelectedPrioridadeDialog();
        console.log(selectedPrioridade)
        setStatus(selectedPrioridade)
    }

    const pickFile = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        const source = { uri: result.uri }
        console.log(source)

        if (!result.cancelled) {
            setImage(source);
        }
    };


    const uploadImage = async () => {
        setUploadArquivo(true)
        const response = await fetch(image.uri)
        const blob = await response.blob();
        const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1)
        //var ref = storage.ref().child(filename).put(blob);


        try {
            const storageRef = await ref(storageRef, '4263093d-2c0c-406a-9342-404e6b2a916d.jpeg').then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });

            console.log("Doc adicionado" + storageRef)
        } catch (e) {
            console.error('Erro fazendo upload de imagem: ', e);
        }
        setUploadArquivo(false)
        setImage(null)
    }

    const adicionarAeronave = async () => {
        try {
            // aqui é atribuido a função addDoc (cuja função é adicionar um documento no firebase) a constante docRef
            // os parâmetros são a ligação pro firestore ( getFirestore()) e a collection que o documento será adicionado
            const docRef = await addDoc(collection(db, 'aeronave'), {
                matriculaAeronave: matriculaAeronave,
                nacionalidadeAeronave: nacionalidadeAeronave,
                modeloAeronave: modeloAeronave,
                hangar: hangar,
                status: status,
                descricao: descricao,
            });
            console.log('Documento adicionado com sucesso! ID: ', docRef.id);
            setMatriculaAeronave('');
            setNacionalidadeAeronave('');
            setModeloAeronave('');
            setStatus('');
            setHangar('');
            setDescricao('');
        } catch (e) {
            console.error('Erro adicionando o documento: ', e);
        }
    };
    const [image, setImage] = useState(null);
    const [time, onChangetime] = React.useState('');
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>

                        <Text style={styles.loginText}>
                            Matricula da Aeronave:
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={matriculaAeronave}
                            onChangeText={(text) => setMatriculaAeronave(text)} />

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

                        <Text style={styles.loginText}>Hangar atual da Aeronave
                        </Text>
                        <TextInput style={styles.input}
                            value={hangar}
                            onChangeText={(text) => setHangar(text)} />

                        <Text style={styles.loginText}>Status atual da Aeronave
                        </Text>
                        <TouchableOpacity style={styles.select} onPress={showSelectedPrioridadeDialog}>
                            {selectedPrioridade ? <Text>{selectedPrioridade}</Text> : (<Text>Selecione o status atual</Text>)}
                        </TouchableOpacity>


                        <Text style={styles.loginText}>Descrição da Aeronave
                        </Text>
                        <TextInput style={styles.input}
                            value={descricao}
                            onChangeText={(text) => setDescricao(text)} />

                    </View>
                    <TouchableOpacity
                        style={styles.btnCadastro}
                        onPress={() => adicionarAeronave()}
                    >
                        <Text style={styles.btnText}>Cadastar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={propriedadeVisibilityState} onDismiss={hideSelectedPrioridadeDialog} dismissable={true} style={{ height: '90%' }}>
                            <Dialog.Title>Selecione a prioridade adequada</Dialog.Title>
                            <Dialog.Content>
                                <View style={styles.listBox}>
                                    <TouchableOpacity style={styles.caixona} onPress={() => { setSelectedPrioridade('ativa'); console.log('ativa') }}>
                                        <View style={styles.innerCard}>
                                            <View style={styles.esquerda}>
                                                <Text style={styles.textoNome}>Aeronave ativa</Text>
                                            </View>
                                            <View style={styles.direita}>
                                                <RadioButton
                                                    value={'ativa'}
                                                    status={selectedPrioridade === 'ativa' ? 'checked' : 'unchecked'}
                                                    onPress={() => { setPrioridade('ativa'); console.log('ativa') }}
                                                />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.caixona} onPress={() => { setSelectedPrioridade('inativa'); console.log('inativa') }}>
                                        <View style={styles.innerCard}>
                                            <View style={styles.esquerda}>
                                                <Text style={styles.textoNome}>Aeronave inativa</Text>
                                            </View>
                                            <View style={styles.direita}>
                                                <RadioButton
                                                    value={'inativa'}
                                                    status={selectedPrioridade === 'inativa' ? 'checked' : 'unchecked'}
                                                    onPress={() => { setPrioridade('inativa'); console.log('inativa') }}
                                                />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Dialog.Content>
                            <Dialog.Actions style={{ position: 'absolute', bottom: 0, right: 0, padding: 30 }}>
                                <Button onPress={handlePrioridade}>Selecionar prioridade</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>
        </View>
    );
};

export default CadastroAeronave;
