import styles from './styles';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Header from '../../components/Header';

const Principal = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header />
                    <Text style={styles.text}>Olá usuário!</Text>
                    <TouchableOpacity
                        style={styles.btnPrincipalTeste}
                        onPress={() => navigation.navigate('GerenciarEquipe')}
                    >
                        <Image
                            style={styles.imageBtnTeste}
                            source={require('../../../assets/worker.png')}
                        />
                        <View style={styles.teste}>
                            <Text style={styles.btnTextTeste}>
                                Gerenciar equipe
                                <Text style={styles.btnSubTextTeste}>
                                    {'\n'}Gerencie sua equipe
                                </Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipalTeste}
                        onPress={() => navigation.navigate('AddManutencao')}
                    >
                        <Image
                            style={styles.imageBtnTeste}
                            source={require('../../../assets/service.png')}
                        />
                        <View style={styles.teste}>
                            <Text style={styles.btnTextTeste}>
                                Gerencie as manutenções
                                <Text style={styles.btnSubTextTeste}>
                                    {'\n'}Uma lista simples de problemas
                                    relatados
                                </Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipalTeste}
                        onPress={() => navigation.navigate('GerenciarAeronave')}
                    >
                        <Image
                            style={styles.imageBtnTeste}
                            source={require('../../../assets/engine.png')}
                        />
                        <View style={styles.teste}>
                            <Text style={styles.btnTextTeste}>
                                Gerenciar aeronaves
                                <Text style={styles.btnSubTextTeste}>
                                    {'\n'}Gerencie as aeronaves cadastradas ou
                                    adicione novas.
                                </Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipalTeste}
                        onPress={() => navigation.navigate('ErrorEnc')}
                    >
                        <Image
                            style={styles.imageBtnTeste}
                            source={require('../../screens/Assets/warning.png')}
                        />
                        <View style={styles.teste}>
                            <Text style={styles.btnTextTeste}>
                                Problemas Relatados
                                <Text style={styles.btnSubTextTeste}>
                                    {'\n'}Uma lista simples de problemas
                                    relatados
                                </Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipalTeste}
                        onPress={() => navigation.navigate('ListaManuten')}
                    >
                        <Image
                            style={styles.imageBtnTeste}
                            source={require('../Assets/test.png')}
                        />
                        <View style={styles.teste}>
                            <Text style={styles.btnTextTeste}>
                                Listar manutenções
                                <Text style={styles.btnSubTextTeste}>
                                    {'\n'}Listagem de manutenções
                                </Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Principal;
