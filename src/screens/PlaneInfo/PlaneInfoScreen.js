import styles from './styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
const PlaneInfoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Ola</Text>
            <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => navigation.navigate('ProfileScreen')}
            >
                <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PlaneInfoScreen;
