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
import styles from './styles';

const RelatarProblem = ({ navigation }) => {
    createThreeButtonAlert = () =>
        Alert.alert(
            '⚠ Deseja Realmente Relatar esse problema ao seu supervisor ?',
            'Essa ação não podera ser disfeita!',
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
                        <Text style={styles.loginText}>Local do Problema:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Tipo do Problema:</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.loginText}>Descrição do Problema:</Text>
                        <TextInput style={styles.TextArea} />
                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={this.createThreeButtonAlert}
                        >
                            <Text style={styles.btnText}>
                                Relatar problema
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default RelatarProblem;