import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Alert,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import PickerSelect from 'react-native-picker-select';
import styles from './styles';

const CadastroM = ({ navigation }) => {
    createThreeButtonAlert = () =>
        Alert.alert(
            'Deseja Cadastrar esse Usuario 🤔',
            'Essa operação nâo pode ser desfeita mais tarde.',
            [
                {
                    text: 'Não',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Sim', onPress: () => this.createThreeButtonAlert2 },
            ]
        );
    const [RG, onChangeRG] = React.useState('');
    const [Telefone, onChangeTelefone] = React.useState('');
    const [cpf, onChangeCpf] = React.useState('');
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
                        <Text style={styles.loginText}>CPF:</Text>
                        <TextInputMask
                            type={'cpf'}
                            value={cpf}
                            keyboardType="numeric"
                            style={styles.input}
                            placeholder="___.___.___-__"
                            onChangeText={(text) => onChangeCpf(text)}
                        ></TextInputMask>
                        <Text style={styles.loginText}>RG:</Text>
                        <TextInputMask
                            type={'custom'}
                            value={RG}
                            options={{
                                mask: '999.999.999-SS',
                            }}
                            placeholder="000.000.000-00"
                            style={styles.input}
                            onChangeText={(text) => onChangeRG(text)}
                        ></TextInputMask>
                        <Text style={styles.loginText}>Email:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Telefone:</Text>
                        <TextInputMask
                            type={'cel-phone'}
                            value={Telefone}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(+55) ',
                            }}
                            placeholder="(+55)00000-0000"
                            keyboardType="numeric"
                            style={styles.input}
                            onChangeText={(text) => onChangeTelefone(text)}
                        ></TextInputMask>
                    </View>
                    <TouchableOpacity
                        style={styles.btnCadastro}
                        onPress={this.createThreeButtonAlert}
                    >
                        <Text style={styles.btnText}>Cadastar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnCadastro}
                        onPress={() => navigation.navigate('Principal')}
                    >
                        <Text style={styles.btnText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default CadastroM;
