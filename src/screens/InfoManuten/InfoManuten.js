import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const InfoManuten = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/Acmelogo.png')}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Perfil')}
                    >
                        <Image
                            style={styles.perfil}
                            source={require('../../../assets/user.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>
                        <Text style={styles.baseText}>IMAGEM DA AERONAVE:</Text>
                        <Image
                            style={styles.imagem}
                            source={require('../Assets/plane.jpg')}
                        />
                        <View
                            style={{
                                marginTop: '4%',
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <Text style={styles.baseText}>
                            INFORMAÇÕES DA AERONAVE:
                        </Text>
                        <Text style={styles.loginText}>Nome Aeronave:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome Aeronave"
                        ></TextInput>
                        <Text style={styles.loginText}>Último voo:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Argentina-Brasil"
                        ></TextInput>
                        <Text style={styles.loginText}>
                            Horário de Chegada:
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="--:--"
                        ></TextInput>
                        <Text style={styles.loginText}>
                            Matrícula do Avião:
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="AA-AAA"
                        ></TextInput>
                        <Text style={styles.loginText}>
                            Nacionalidade do Avião:
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="BR"
                        ></TextInput>
                        <View
                            style={{
                                marginTop: '4%',
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <Text style={styles.baseText}>MANUTENÇÕES:</Text>
                        <Text style={styles.baseText}>Resumo:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Lorem Ipsulum"
                        ></TextInput>
                        <Text style={styles.baseText}>Prioridade:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Alta"
                        ></TextInput>
                        <Text style={styles.baseText}>
                            Mecanico Responsavel:
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Jair"
                        ></TextInput>
                        <View
                            style={{
                                marginTop: '4%',
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <Text style={styles.baseText}>GRUPO DE TAREFAS:</Text>

                        <Text style={styles.baseText}>
                            MANUTENÇÕES PREVENTIVAS:
                        </Text>

                        <View style={styles.checkBox}>
                            <Text style={styles.texto}>🔲 Troca de óleo</Text>
                            <Text style={styles.texto}>
                                🔲 Revisão de trens de pouso
                            </Text>
                            <Text style={styles.texto}>
                                🔲 Verificação na cabine
                            </Text>
                            <Text style={styles.texto}>
                                🔲 Verificação das turbinas
                            </Text>
                            <Text style={styles.texto}>
                                🔲 Reabastecer água
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.mostrar}>Mostrar mais...</Text>
                        </TouchableOpacity>

                        <Text style={styles.baseText}>MANUTENÇÕES:</Text>

                        <View style={styles.checkBox}>
                            <Text style={styles.texto}>🔲 Reparos na Asa</Text>
                            <Text style={styles.texto}>🔲 Verificar motor</Text>
                            <Text style={styles.texto}>
                                🔲 Trocar vidros trincados
                            </Text>
                            <Text style={styles.texto}>
                                🔲 Concerto de portas
                            </Text>
                            <Text style={styles.texto}>
                                🔲 Trocar filtros de ar-condicionado
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.mostrar}>Mostrar mais...</Text>
                        </TouchableOpacity>
                        <View
                            style={{
                                marginTop: '4%',
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <Text style={styles.baseText}>COMPONENTES:</Text>
                        <View style={styles.checkBox}>
                            <Text style={styles.texto}>🔲 Motor Marshall</Text>
                            <Text style={styles.texto}>🔲 Turbina Highlander</Text>
                            <Text style={styles.texto}>🔲 Asa Aeroplus</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.mostrar}>Mostrar mais...</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.btnVoltar}
                        onPress={() => navigation.navigate('ListaManuten')}
                    >
                        <Text style={styles.btnText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default InfoManuten;
