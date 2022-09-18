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
                    <Image
                        style={styles.perfil}
                        source={require('../../../assets/user.png')}
                    />
                </View>
                <Text style={styles.text}>Tela Principal</Text>

                
                <View style={styles.containerBtn}>
                    <TouchableOpacity
                        style={styles.btnPrincipal}
                        onPress={() => navigation.navigate('SelectServ')}
                    >
                        <Image
                            style={styles.imageBtn}
                            source={require('../../../assets/service.png')}
                        />
                        <Text style={styles.btnText}>Serviços</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipal}
                        onPress={() => navigation.navigate('ManutencoesAndamento')}
                    >
                        <Image
                            style={styles.imageBtn}
                            source={require('../../../assets/worker.png')}
                        />
                        <Text style={styles.btnText}>Manutenção</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipal}
                        onPress={() => navigation.navigate('ListaAeronaves')}
                    >
                        <Image
                            style={styles.perfil}
                            source={require('../../../assets/engine.png')}
                        />
                        <Text style={styles.btnText}>Aeronaves</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Principal;