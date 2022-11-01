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

const Principal = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
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
            <View
                style={{
                    height: '90%',
                    width: '100%',
                    margin: 15,
                    alignItems: 'center',
                }}
            >
                <ScrollView>
                    <View style={styles.scrollview}>
                        <Text style={styles.baseText}>
                            Manutenções a fazer:
                        </Text>

                        <View style={styles.ListItem}>
                            <Image
                                style={styles.btnImagem}
                                source={require('../Assets/plane.jpg')}
                            />
                            <Text style={styles.title}>Boeing 737</Text>
                            <Text style={styles.texto}>Horário de chegada: 12:00</Text>
                            <Text style={styles.texto}>Prioridade: <Text style={styles.textoCorAlta}>Alta</Text></Text>
                            <Text style={styles.texto}>Tipo: Conserto</Text>
                            <Text style={styles.texto}>Solicitante: Mecânico - Vitor Gomes</Text>
                            <Text style={styles.texto}>Status: <Text style={styles.textoCorBaixa}>Concluida</Text></Text>
                        </View>

                        <View style={styles.ListItem}>
                            <Image
                                style={styles.btnImagem}
                                source={require('../Assets/plane.jpg')}
                            />
                            <Text style={styles.title}>Boeing 738</Text>
                            <Text style={styles.texto}>Horário de chegada: 13:00</Text>
                            <Text style={styles.texto}>Prioridade: <Text style={styles.textoCorMedia}>Média</Text></Text>
                            <Text style={styles.texto}>Tipo: Conserto</Text>
                            <Text style={styles.texto}>Solicitante: Mecânico - Rogério Oliveira</Text>
                            <Text style={styles.texto}>Status: <Text style={styles.textoCorBaixa}>Concluida</Text></Text>
                        </View>

                        <View style={styles.ListItem}>
                            <Image
                                style={styles.btnImagem}
                                source={require('../Assets/plane.jpg')}
                            />
                            <Text style={styles.title}>Boeing 739</Text>
                            <Text style={styles.texto}>Horário de chegada: 14:00</Text>
                            <Text style={styles.texto}>Prioridade: <Text style={styles.textoCorBaixa}>Baixa</Text></Text>
                            <Text style={styles.texto}>Tipo: Recorrente</Text>
                            <Text style={styles.texto}>Solicitante: Mecânico - Pedro Vieira</Text>
                            <Text style={styles.texto}>Status: <Text style={styles.textoCorBaixa}>Concluida</Text></Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.BottomBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Principal2')}>
                    <Image
                        style={styles.IconTab}
                        source={require('../Assets/dados-verificados.png')}
                    />
                    <Text style={styles.TextTab1}>Prontas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                    <Image
                        style={styles.IconTab}
                        source={require('../Assets/lista.png')}
                    />
                    <Text style={styles.TextTab2}>A fazer</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Principal;
