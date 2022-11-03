import styles from './styles';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

const Principal = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/Acmelogo.png')}
                    />
                    <TouchableOpacity  onPress={() => navigation.navigate('Perfil')}>
                        <Image
                            style={styles.perfil}
                            source={require('../../../assets/user.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Tela Principal</Text>

                <View style={styles.containerBtn}>
                    <TouchableOpacity
                        style={styles.btnPrincipal}
                        onPress={() => navigation.navigate('CadastroM')}
                    >
                        <Image
                            style={styles.imageBtn}
                            source={require('../../../assets/worker.png')}
                        />
                        <Text style={styles.btnText}>
                            Cadastrar{'\n'}Mecanico
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipal}
                        onPress={() => navigation.navigate('AddManutencao')}
                    >
                        <Image
                            style={styles.imageBtn}
                            source={require('../../../assets/service.png')}
                        />
                        <Text style={styles.btnText}>
                            Adicionar{'\n'}Manutenção
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipal}
                        onPress={() => navigation.navigate('CadastroA')}
                    >
                        <Image
                            style={styles.perfil}
                            source={require('../../../assets/engine.png')}
                        />
                        <Text style={styles.btnText}>
                            Cadastrar{'\n'}Aeronaves
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipal}
                        onPress={() => navigation.navigate('ErrorEnc')}
                    >
                        <Image
                            style={styles.perfil}
                            source={require('../../screens/Assets/warning.png')}
                        />
                        <Text style={styles.btnText}>
                            Problemas{'\n'}Relatados
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipal}
                        onPress={() => navigation.navigate('ListaManuten')}
                    >
                        <Image
                            style={styles.perfil}
                            source={require('../../screens/Assets/test.png')}
                        />
                        <Text style={styles.btnText}>
                            Lista{'\n'}Manutenções
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Principal;
