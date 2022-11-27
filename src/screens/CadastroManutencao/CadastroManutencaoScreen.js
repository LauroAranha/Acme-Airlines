import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import Header from '../../components/Header';
import { db } from '../../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

import { RadioButton } from 'react-native-paper';

const CadastroManutencao = ({ navigation }) => {
    const [modeloAeronave, setModeloAeronave] = useState("");
    const [matriculaAeronave, setMatriculaAeronave] = useState("");
    const [nacionalidadeAeronave, setNacionalidadeAeronave] = useState("");

    const [prioridade, setPrioridade] = useState("");

    const [JSON_DATA, setJSON_DATA] = useState('');
    const list = [];

    const showSelectedAeronaveDialog = () => setAeronaveVisibilityState(true);
    const hideSelectedAeronaveDialog = () => setAeronaveVisibilityState(false);
    var [aeronaveVisibilityState, setAeronaveVisibilityState] = useState(false);
    const [selectedAeronave, setSelectedAeronave] = React.useState(false);

    const showSelectedPrioridadeDialog = () => setPrioridadeVisibilityState(true);
    const hideSelectedPrioridadeDialog = () => setPrioridadeVisibilityState(false);
    var [propriedadeVisibilityState, setPrioridadeVisibilityState] = useState(false);
    const [selectedPrioridade, setSelectedPrioridade] = React.useState(false);

    const handlePrioridade = async () => {
        hideSelectedPrioridadeDialog();
        console.log(selectedPrioridade)

    }

    const handleDataAeronave = async () => {
        hideSelectedAeronaveDialog();
        const docRef = doc(db, "aeronave", selectedAeronave)
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data())
        setMatriculaAeronave((docSnap.data().matriculaAeronave).toString())
        setModeloAeronave((docSnap.data().modeloAeronave).toString())
        setNacionalidadeAeronave((docSnap.data().nacionalidadeAeronave).toString())
    }

    useEffect(() => {
        async function listAeronaves() {
            try {
                const querySnapshot = await getDocs(collection(db, 'aeronave'));
                querySnapshot.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id });
                });
                setJSON_DATA(list);
            } catch (e) {
                console.error('erro: ', e);
            }
        }
        listAeronaves();
    }, []);

    // createThreeButtonAlert = () =>
    //     Alert.alert(
    //         'Prestes a Enviar 🤔',
    //         'Deseja Enviar esse pedido ao Mecânico selecionado ?',
    //         [
    //             {
    //                 text: 'Não',
    //                 onPress: () => console.log('Cancel Pressed'),
    //                 style: 'cancel',
    //             },
    //             { text: 'Sim', onPress: () => this.createThreeButtonAlert2 },
    //         ]
    //     );
    // createThreeButtonAlert2 = () => {
    //     Alert.alert(
    //         'Enviamos a sua Solicitação 😉',
    //         'Sua solicitação foi enviada ao Mecanico com Sucesso',
    //         [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    //     );
    // }
    return (
        <View style={styles.container}>

            <ScrollView>
                <Header />
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>
                        <Text style={styles.loginText}>
                            Selecionar Aeronave:
                        </Text>
                        <TouchableOpacity style={styles.select} onPress={showSelectedAeronaveDialog}>
                            {selectedAeronave ? <Text>{modeloAeronave}</Text> : (<Text>Selecione a aeronave desejada</Text>)}
                        </TouchableOpacity>
                        <View style={styles.Adicionado}>
                            <Text style={{ padding: 10 }}>
                                {selectedAeronave ? (
                                    <View>
                                        <Text style={styles.textoNome}>{matriculaAeronave}</Text>
                                        <Text style={styles.ModeloAeronave}>Modelo: {modeloAeronave}</Text>
                                        <Text style={styles.ModeloAeronave}>Nacionalidade: {nacionalidadeAeronave}</Text>
                                    </View>
                                ) : (
                                    <Text> Aqui aparecerão as Informações da Aeronave :)</Text>)
                                }
                            </Text>
                        </View>
                        <Text style={styles.loginText}>Prioridade:</Text>
                        <View style={styles.select}>
                            <TouchableOpacity onPress={showSelectedPrioridadeDialog}>
                                {selectedPrioridade ? <Text>{selectedPrioridade}</Text> : (<Text>Selecione a aeronave desejada</Text>)}
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.loginText}>Resumo:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Adicionar Tarefa:</Text>
                        <View
                            style={{
                                marginTop: '2%',
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <Text style={styles.loginText}>
                            Nome do Grupo de Tarefas:
                        </Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>
                            Checklist Tarefas:
                        </Text>
                        <View style={styles.Adicionado}>
                            <Text>
                                ✅ Tarefa 1 {"\n"} ✅ Tarefa 2 {"\n"} ✅ Tarefa 3
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={() => navigation.navigate('AddTarefa')}
                        >
                            <Text style={styles.btnText}>
                                Adicionar nova Tarefa
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnCadastro}
                        >
                            <Text style={styles.btnText}>
                                Salvar Grupo de Tarefas
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.loginText}>
                            Grupos Adicionados:
                        </Text>
                        <View style={styles.Adicionado}>
                            <Text>
                                Aqui aparecerão os Grupos de Tarefas Adicionados
                            </Text>
                        </View>
                        <Text style={styles.loginText}>Alocar Mecânico:</Text>
                        <View style={styles.select}>
                            {/* <PickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Jair', value: 'Jair' },
                                    { label: 'Clóvis', value: 'Clóvis' },
                                    { label: 'Augusto', value: 'Augusto' },
                                ]}
                            /> */}
                        </View>
                        <Text style={styles.loginText}>Troca de Componentes:</Text>
                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={() => navigation.navigate('AddPecas')}
                        >
                            <Text style={styles.btnText}>
                                Adicionar Troca de Componentes
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.Adicionado}>
                            <Text>Aqui aparecerão os Componentes Adicionados:)</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.btnCadastro}
                //onPress={this.createThreeButtonAlert}
                >
                    <Text style={styles.btnText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnCadastro}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.btnText}>Voltar</Text>
                </TouchableOpacity>
            </ScrollView>

            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={aeronaveVisibilityState} onDismiss={hideSelectedAeronaveDialog} dismissable={true} style={{ height: '90%' }}>
                            <Dialog.Title>Selecione a aeronave</Dialog.Title>
                            <Dialog.Content>
                                <View style={styles.listBox}>
                                    <FlatList
                                        style={{ width: '100%', backgroundColor: 'red' }}
                                        data={JSON_DATA}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) => (
                                            <View style={styles.caixona}>
                                                <TouchableOpacity style={styles.innerCard} onPress={() => { setSelectedAeronave(item.id); console.log(item.id) }}>
                                                    <View style={styles.esquerda}>
                                                        <Text style={styles.textoNome}>{item.matriculaAeronave}</Text>
                                                        <Text style={styles.ModeloAeronave}>Modelo: {item.modeloAeronave}</Text>
                                                        <Text style={styles.ModeloAeronave}>Nacionalidade: {item.nacionalidadeAeronave}</Text>
                                                    </View>
                                                    <View style={styles.direita}>
                                                        <RadioButton
                                                            value={item.id}
                                                            status={selectedAeronave === item.id ? 'checked' : 'unchecked'}
                                                        />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                    />
                                </View>
                            </Dialog.Content>
                            <Dialog.Actions style={{ position: 'absolute', bottom: 0, right: 0, padding: 30 }}>
                                <Button onPress={handleDataAeronave}>Selecionar aeronave</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>

            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={propriedadeVisibilityState} onDismiss={hideSelectedPrioridadeDialog} dismissable={true} style={{ height: '90%' }}>
                            <Dialog.Title>Selecione a prioridade adequada</Dialog.Title>
                            <Dialog.Content>
                                <View style={styles.listBox}>
                                    <View style={styles.caixona}>
                                        <TouchableOpacity style={styles.innerCard} onPress={() => { setSelectedPrioridade('alta'); console.log('alta') }}>
                                            <View style={styles.esquerda}>
                                                <Text style={styles.textoNome}>Prioridade alta</Text>
                                            </View>
                                            <View style={styles.direita}>
                                                <RadioButton
                                                    value={'alta'}
                                                    status={selectedPrioridade === 'alta' ? 'checked' : 'unchecked'}
                                                    onPress={() => { setPrioridade('alta'); console.log('alta') }}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.caixona}>
                                        <TouchableOpacity style={styles.innerCard} onPress={() => { setSelectedPrioridade('média'); console.log('média') }}>
                                            <View style={styles.esquerda}>
                                                <Text style={styles.textoNome}>Prioridade média</Text>
                                            </View>
                                            <View style={styles.direita}>
                                                <RadioButton
                                                    value={'média'}
                                                    status={selectedPrioridade === 'média' ? 'checked' : 'unchecked'}
                                                    onPress={() => { setPrioridade('média'); console.log('média') }}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.caixona}>
                                        <TouchableOpacity style={styles.innerCard} onPress={() => { setSelectedPrioridade('baixa'); console.log('baixa') }}>
                                            <View style={styles.esquerda}>
                                                <Text style={styles.textoNome}>Prioridade baixa</Text>
                                            </View>
                                            <View style={styles.direita}>
                                                <RadioButton
                                                    value={'baixa'}
                                                    status={selectedPrioridade === 'baixa' ? 'checked' : 'unchecked'}
                                                    onPress={() => { setPrioridade('baixa'); console.log('baixa') }}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
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

export default CadastroManutencao;
