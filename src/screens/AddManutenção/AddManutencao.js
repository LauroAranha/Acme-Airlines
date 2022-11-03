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
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/Acmelogo.png')}
                    />
                    <Image
                        style={styles.perfil}
                        source={require('../../../assets/user.png')}
                    />
                </View>
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
                        <Text style={styles.loginText}>
                            Adicionar Manutenção:
                        </Text>
                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={() =>
                                navigation.navigate('TipoManutencao')
                            }
                        >
                            <Text style={styles.btnText}>
                                Adicionar Nova Manutenção
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.loginText}>
                            Manutenções Adicionadas:
                        </Text>
                        <View style={styles.Adicionado}>
                            <Text>
                                Aqui aparecerão suas Manutenções Recorrentes :)
                            </Text>
                        </View>
                        <View style={styles.Adicionado}>
                            <Text>Aqui aparecerão suas Manutenções :)</Text>
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
                        <Text style={styles.loginText}>Adicionar Peças:</Text>
                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={() => navigation.navigate('AddPecas')}
                        >
                            <Text style={styles.btnText}>
                                Adicionar Peças a serem Utilizadas
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.Adicionado}>
                            <Text>Aqui aparecerão as Peças:)</Text>
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
