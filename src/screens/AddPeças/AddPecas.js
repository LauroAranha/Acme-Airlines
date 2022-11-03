import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PickerSelect from 'react-native-picker-select';
import styles from './styles';

const AddP = ({ navigation }) => {
    createThreeButtonAlert = () =>
        Alert.alert(
            'Sua Peça Foi Adicionada ⚙',
            'Sua Peça foi adicionada com Sucesso ✔',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
    return (
        <View style={styles.container}>
            <ScrollView>
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
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>
                        <Text style={styles.loginText}>Nome da Peça:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Marca da Peça:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Parte do Avião:</Text>
                        <TextInput style={styles.input} />
                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={this.createThreeButtonAlert}
                        >
                            <Text style={styles.btnText}>
                                Adicionar Nova Peça
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default AddP;
