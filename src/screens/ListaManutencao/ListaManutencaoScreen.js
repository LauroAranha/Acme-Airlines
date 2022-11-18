import styles from './styles';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import Header from '../../components/Header';
const ListaManutencao = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View
                style={{
                    height: '90%',
                    width: '100%',
                    margin: 15,
                    alignItems: 'center',
                }}
            >
                <ScrollView style={{width: '90%' , marginRight: '10%', marginBottom: '20%'}}>
                    <View style={styles.scrollview}>
                        <Text style={styles.baseText}>
                            Manutenções Solicitadas:
                        </Text>

                        <View style={styles.ListItem}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('InfoManuten')
                                }
                            >
                                <Image
                                    style={styles.btnImagem}
                                    source={require('../Assets/plane.jpg')}
                                />
                                <Text style={styles.title}>Boeing 737</Text>
                                <Text style={styles.texto}>
                                    Horário de chegada: --:--
                                </Text>
                                <Text style={styles.texto}>
                                    Prioridade:{' '}
                                    <Text style={styles.textoCorAlta}>
                                        Alta
                                    </Text>
                                </Text>
                                <Text style={styles.texto}>Tipo: Conserto</Text>
                                <Text style={styles.texto}>
                                    Solicitante: Mecânico - Vitor Gomes
                                </Text>
                                <Text style={styles.texto}>
                                    Status:{' '}
                                    <Text style={styles.textoCorMedia}>
                                        A fazer
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.ListItem}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('InfoManuten')
                                }
                            >
                                <Image
                                    style={styles.btnImagem}
                                    source={require('../Assets/plane.jpg')}
                                />
                                <Text style={styles.title}>Boeing 738</Text>
                                <Text style={styles.texto}>
                                    Horário de chegada: --:--
                                </Text>
                                <Text style={styles.texto}>
                                    Prioridade:{' '}
                                    <Text style={styles.textoCorMedia}>
                                        Média
                                    </Text>
                                </Text>
                                <Text style={styles.texto}>
                                    Solicitante: Mecânico - Rogério Oliveira
                                </Text>
                                <Text style={styles.texto}>
                                    Status:{' '}
                                    <Text style={styles.textoCorMedia}>
                                        A fazer
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.ListItem}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('InfoManuten')
                                }
                            >
                                <Image
                                    style={styles.btnImagem}
                                    source={require('../Assets/plane.jpg')}
                                />
                                <Text style={styles.title}>Boeing 739</Text>
                                <Text style={styles.texto}>
                                    Horário de chegada: --:--
                                </Text>
                                <Text style={styles.texto}>
                                    Prioridade:{' '}
                                    <Text style={styles.textoCorBaixa}>
                                        Baixa
                                    </Text>
                                </Text>
                                <Text style={styles.texto}>
                                    Solicitante: Mecânico - Pedro Vieira
                                </Text>
                                <Text style={styles.texto}>
                                    Status:{' '}
                                    <Text style={styles.textoCorBaixa}>
                                        Concluida
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={() => navigation.navigate('Principal')}
                        >
                            <Text style={styles.btnText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default ListaManutencao;
