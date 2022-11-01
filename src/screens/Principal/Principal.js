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
                            Manutenções a Fazer:
                        </Text>

                        <View style={styles.ListItem}>
                            <Image
                                style={styles.btnImagem}
                                source={require('../Assets/plane.jpg')}
                            />
                            <Text>Boeing 737</Text>
                            <Text>Horário de chegada: 12:00</Text>
                            <Text>Prioridade: Alta</Text>
                            <Text>Tipo: Conserto</Text>
                            <Text>Solicitante: Mecânico - Marcelo Gomes</Text>
                        </View>

                        <View style={styles.ListItem}>
                            <Text>Boeing 738</Text>
                            <Text>Horário de chegada: 13:00</Text>
                            <Text>Prioridade: Média</Text>
                            <Text>Tipo: Conserto</Text>
                            <Text>Solicitante: Mecânico - Rogério Silva</Text>
                        </View>

                        <View style={styles.ListItem}>
                            <Text>Boeing 739</Text>
                            <Text>Horário de chegada: 14:00</Text>
                            <Text>Prioridade: Baixa</Text>
                            <Text>Tipo: Preventiva</Text>
                            <Text>Solicitante: Mecânico - Leonardo Mendes</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.BottomBar}>
                <TouchableOpacity>
                    <Image
                        style={styles.IconTab}
                        source={require('../Assets/dados-verificados.png')}
                    />
                    <Text style={styles.TextTab1}>Prontas</Text>
                </TouchableOpacity>
                <TouchableOpacity>
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
