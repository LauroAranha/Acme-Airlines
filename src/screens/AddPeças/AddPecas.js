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
            'Sua Componente Foi Adicionado ⚙',
            'Sua Componente foi adicionado com Sucesso ✔',
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
                        <Text style={styles.loginText}>Inserir Nome:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Inserir Data de troca:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Inserir Marca:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Inserir Nacionalidade:</Text>
                        <TextInput style={styles.input} />
                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={this.createThreeButtonAlert}
                        >
                            <Text style={styles.btnText}>
                                Adicionar Novo Componente
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default AddP;
