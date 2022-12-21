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
import Header from '../../components/Header';

const DescricaoErro = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>
                        <Text style={styles.loginText}>Local do Problema:</Text>
                        <View style={styles.Adicionado}>
                            <Text>Painel de Aviação</Text>
                        </View>
                        <Text style={styles.loginText}>Tipo do Problema:</Text>
                        <View style={styles.Adicionado}>
                            <Text>
                                As luzes do painel frontal do avião estão
                                queimadas
                            </Text>
                        </View>
                        <Text style={styles.loginText}>Descrição:</Text>
                        <View style={styles.Adicionado}>
                            <Text>
                                As luzes 1 e 3 do painel estão queimadas
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.btnCadastro}
                    onPress={() => navigation.navigate('ErrorEnc')}
                >
                    <Text style={styles.btnText}>Voltar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default DescricaoErro;
