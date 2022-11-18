import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PickerSelect from 'react-native-picker-select';
import styles from './styles';
import Header from '../../components/Header';

const DetalhesManutencao = ({ navigation }) => {
    createThreeButtonAlert = () =>
        Alert.alert(
            'Prestes a Enviar 🤔',
            'Deseja Enviar esse pedido ao Mecânico selecionado ?',
            [
                {
                    text: 'Não',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Sim', onPress: () => this.createThreeButtonAlert2 },
            ]
        );
    createThreeButtonAlert2 = () =>
        Alert.alert(
            'Enviamos a sua Solicitação 😉',
            'Sua solicitação foi enviada ao Mecanico com Sucesso',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>
                        <Text style={styles.loginText}>
                            Selecionar Aeronave:
                        </Text>
                        <View style={styles.select}>
                            <PickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Boing-747', value: 'Boing-747' },
                                ]}
                            />
                        </View>
                        <View style={styles.Adicionado}>
                            <Text>
                                Aqui aparecerão as Informações da Aeronave :)
                            </Text>
                        </View>
                        <Text style={styles.loginText}>Prioridade:</Text>
                        <View style={styles.select}>
                            <PickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    {
                                        label: 'Alta',
                                        value: 'Alta',
                                        color: 'red',
                                    },
                                    {
                                        label: 'Média',
                                        value: 'Média',
                                        color: 'orange',
                                    },
                                    {
                                        label: 'Baixa',
                                        value: 'Baixa',
                                        color: 'green',
                                    },
                                ]}
                            />
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
                            <PickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Jair', value: 'Jair' },
                                    { label: 'Clóvis', value: 'Clóvis' },
                                    { label: 'Augusto', value: 'Augusto' },
                                ]}
                            />
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
                    onPress={this.createThreeButtonAlert}
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
        </View>
    );
};

export default DetalhesManutencao;
