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

const Perfil = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/Acmelogo.png')}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                        <Image
                            style={styles.perfil}
                            source={require('../../../assets/user.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>
                        <TouchableOpacity
                            style={{ marginBottom: '5%' }}
                            onPress={() => navigation.navigate('Principal')}
                        >
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../Assets/next.png')}
                            />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.perfil}
                                source={require('../../../assets/user.png')}
                            />
                            <View>
                                <Text style={styles.loginText}>
                                    Augusto Jair Nabo
                                </Text>
                                <Text> Mecanico</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                marginTop: '4%',
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <TouchableOpacity
                            style={{ flexDirection: 'row', marginTop: '5%' }}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../Assets/logout.png')}
                            />
                            <Text style={styles.loginTextR}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Perfil;
