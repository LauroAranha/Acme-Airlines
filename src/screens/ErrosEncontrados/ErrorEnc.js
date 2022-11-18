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
const ErrorEnc = ({ navigation }) => {
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
                <ScrollView style={{ width: '90%', marginRight: '10%', marginBottom: '20%' }}>
                    <View style={styles.scrollview}>
                        <Text style={styles.baseText}>
                            Problemas Relatados:
                        </Text>

                        <View style={styles.ListItem}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Descricao')}
                            >
                                <Image
                                    style={styles.btnImagem}
                                    source={require('../Assets/plane.jpg')}
                                />
                                <Text style={styles.title}>Boeing 737</Text>
                                <Text style={styles.texto}>
                                    Solicitante: Mecânico - Vitor Gomes
                                </Text>
                                <Text style={styles.texto}>Problema:</Text>
                                <Text style={styles.texto}>
                                    As luzes do painel frontal do avião estão
                                    queimadas
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.ListItem}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Descricao')}
                            >
                                <Image
                                    style={styles.btnImagem}
                                    source={require('../Assets/plane.jpg')}
                                />
                                <Text style={styles.title}>Boeing 738</Text>
                                <Text style={styles.texto}>
                                    Solicitante: Mecânico - Rogério Oliveira
                                </Text>
                                <Text style={styles.texto}>Problema:</Text>
                                <Text style={styles.texto}>
                                    As luzes do painel frontal do avião estão
                                    queimadas
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.ListItem}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Descricao')}
                            >
                                <Image
                                    style={styles.btnImagem}
                                    source={require('../Assets/plane.jpg')}
                                />
                                <Text style={styles.title}>Boeing 739</Text>
                                <Text style={styles.texto}>
                                    Solicitante: Mecânico - Pedro Vieira
                                </Text>
                                <Text style={styles.texto}>Problema:</Text>
                                <Text style={styles.texto}>
                                    As luzes do painel frontal do avião estão
                                    queimadas
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

export default ErrorEnc;
