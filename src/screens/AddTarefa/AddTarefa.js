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

const AddTarefa = ({ navigation }) => {
    createThreeButtonAlert = () =>
        Alert.alert(
            'Sua Tarefa Foi Adicionada 😉',
            'Sua Tarefa foi adicionada com Sucesso ✔',
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
                    <TouchableOpacity  onPress={() => navigation.navigate('Perfil')}>
                        <Image
                            style={styles.perfil}
                            source={require('../../../assets/user.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>
                        <Text style={styles.loginText}>Nome:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Resumo:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Parte do Avião:</Text>
                        <TextInput style={styles.input} />
                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={this.createThreeButtonAlert}
                        >
                            <Text style={styles.btnText}>
                                Adicionar Nova Tarefa
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.btnCadastro}
                    onPress={() => navigation.navigate('AddManutencao')}
                >
                    <Text style={styles.btnText}>Voltar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default AddTarefa;
