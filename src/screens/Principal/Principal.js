import styles from './styles';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, query, where, getDocs } from "firebase/firestore";

import { db, auth } from '../../firebase';

const Principal = ({ navigation, route }) => {
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
        <SafeAreaView>
            <Header />
            <ScrollView>
                <Text style={{ fontSize: 24, padding: 20  }}>Olá, {activeUserName}!</Text>
                <View style={styles.container}>
                    <Text style={{ fontSize: 18, padding: 20,backgroundColor: 'white' }}>Acesso rápido</Text>

                    {/* <Text style={styles.text}>Olá + {route.params.emailUser}!</Text> */}
                    <TouchableOpacity
                        style={styles.btnPrincipalTeste}
                        onPress={() => navigation.navigate('Gerenciar Manutenção')}
                    >
                        <Image
                            style={styles.imageBtnTeste}
                            source={require('../../../assets/service.png')}
                        />
                        <View style={styles.teste}>
                            <Text style={styles.btnTextTeste}>
                                Gerencie as manutenções
                                <Text style={styles.btnSubTextTeste}>
                                    {'\n'}Uma lista simples de problemas
                                    relatados
                                </Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipalTeste}
                        onPress={() => navigation.navigate('Gerenciar Aeronave')}
                    >
                        <Image
                            style={styles.imageBtnTeste}
                            source={require('../../../assets/engine.png')}
                        />
                        <View style={styles.teste}>
                            <Text style={styles.btnTextTeste}>
                                Gerenciar aeronaves
                                <Text style={styles.btnSubTextTeste}>
                                    {'\n'}Gerencie as aeronaves cadastradas ou
                                    adicione novas.
                                </Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnPrincipalTeste}
                        onPress={() => navigation.navigate('Gerenciar Equipe')}
                    >
                        <Image
                            style={styles.imageBtnTeste}
                            source={require('../../../assets/worker.png')}
                        />
                        <View style={styles.teste}>
                            <Text style={styles.btnTextTeste}>
                                Gerenciar equipe
                                <Text style={styles.btnSubTextTeste}>
                                    {'\n'}Gerencie sua equipe
                                </Text>
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        style={styles.btnPrincipalTeste}
                        onPress={() => navigation.navigate('ErrorEnc')}
                    >
                        <Image
                            style={styles.imageBtnTeste}
                            source={require('../../screens/Assets/warning.png')}
                        />
                        <View style={styles.teste}>
                            <Text style={styles.btnTextTeste}>
                                Problemas Relatados
                                <Text style={styles.btnSubTextTeste}>
                                    {'\n'}Uma lista simples de problemas
                                    relatados
                                </Text>
                            </Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Principal;
