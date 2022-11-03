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

const TipoManutencao = ({ navigation }) => {
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
                        <Text style={styles.loginText}>Tipo de Manutenção</Text>
                        <View style={styles.select}>
                            <PickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Padrão', value: 'Padrão' },
                                    {
                                        label: 'Recorrente',
                                        value: 'Recorrente',
                                    },
                                ]}
                            />
                        </View>
                        <View style={styles.Adicionado}>
                            <Text>✅ Tarefa 1</Text>
                            <Text>✅ Tarefa 2</Text>
                            <Text>✅ Tarefa 3</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={() => navigation.navigate('AddTarefa')}
                        >
                            <Text style={styles.btnText}>
                                Adicionar Nova Tarefa +
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnCadastro}>
                    <Text style={styles.btnText}>Concluir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCadastro}>
                    <Text style={styles.btnText}>Voltar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default TipoManutencao;
