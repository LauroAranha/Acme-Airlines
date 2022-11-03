import React, { useState, useEffect } from 'react';
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
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
        setImage(result.uri);
    }
};

const CadastroA = ({ navigation }) => {
    createThreeButtonAlert = () =>
        Alert.alert(
            'Deseja Cadastrar essa Aeronave 🤔',
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
    const [image, setImage] = useState(null);
    const [time, onChangetime] = React.useState('');
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
                        <Text style={styles.loginText}>
                            Imagem da Aeronave:
                        </Text>
                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={pickImage}
                        >
                            <Text>Selecione a imagem do Avião</Text>
                        </TouchableOpacity>
                        {image && (
                            <Image
                                source={{ uri: image }}
                                style={{ width: 200, height: 200 }}
                            />
                        )}
                        <Text style={styles.loginText}>Nome da Aeronave:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>
                            Matricula da Aeronave:
                        </Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Ultimo Voo:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>
                            Horario de Chegada:
                        </Text>

                        <TextInputMask
                            type={'datetime'}
                            value={time}
                            options={{ format: 'HH:mm' }}
                            keyboardType="numeric"
                            placeholder="__:__"
                            onChangeText={(text) => onChangetime(text)}
                            style={styles.inputLittle}
                        />
                        <Text style={styles.loginText}>
                            Nacionalidade da Aeronave
                        </Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Modelo da Aeronave</Text>
                        <TextInput style={styles.input} />
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

export default CadastroA;
