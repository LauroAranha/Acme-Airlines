import styles from './styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const PlaneInfoScreen = ({ navigation }) => {
    return (
        <View>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/Acmelogo.png')}
                />
                <Text style={styles.text}>Tela Principal</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btnPrincipal}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.btnText}>Manutenção</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnPrincipal}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.btnText}>Aeronaves</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnPrincipal}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.btnText}>Serviços</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PlaneInfoScreen;
