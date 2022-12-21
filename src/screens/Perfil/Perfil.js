import React, { useState, useEffect } from 'react';
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

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from '../../firebase';

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
    } else {
        // User is signed out
        // ...
    }
});


const Perfil = ({ navigation }) => {
    const [activeUserEmail, setActiveUserEmail] = useState([])
    const [activeUserName, setActiveUserName] = useState([])

    useEffect(() => {
        async function listUser() {
            try {
                const q = query(collection(db, "mecanicoGeral"), where("email", "==", activeUserEmail));

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    setActiveUserName(doc.data().nome)
                    console.log(doc.data().nome);
                })
            } catch (e) {
                console.log(e)
            }
        }
        listUser();

        const user = auth.currentUser
        if (user) {
            const uid = user.uid;
            const email = (user.email).toString();
            console.log(uid);
            console.log(email);
            setActiveUserEmail(email)
            console.log("Usuário logado: \n      uid:" + uid + "\n      Email " + email)
        } else {
            console.log("Nenhum usuário ativo")
        }

    }, [activeUserEmail]);
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <View style={styles.scrollview}>
                    <View style={styles.loginBox}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.perfil}
                                source={require('../../../assets/user.png')}
                            />
                            <View>
                                <Text style={styles.loginText}>
                                    {activeUserName}
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
                            onPress={() => {
                                {
                                    signOut(auth).then(() => {
                                        console.log("Usuario desconectado")
                                        navigation.navigate('Login')
                                    }).catch((error) => {
                                        console.log("error")
                                    });
                                }
                            }}
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
