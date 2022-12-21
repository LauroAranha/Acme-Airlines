import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { deleteDoc, collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


async function excluirDocumento(input) {
    console.log(input);
    let teste = input;
    try {
        console.log('Documento a ser excluído: ' + teste);
        const res = await deleteDoc(doc(db, 'aeronave', teste));
        console.log('Dado excluido!');
        this.state = {
            showComponent: false,
        };
    } catch (e) {
        console.error('erro: ', e);
    }
}


export default function CardAeronave(props) {
    var [visible, setVisible] = useState(true);
    const [matriculaAeronave, setMatriculaAeronave] = useState("")
    const [nomeMecanico, setNomeMecanico] = useState("")

    useEffect(() => {
        const handleDataAeronave = async () => {
            const docRef = doc(db, "aeronave", props.idAeronave)
            const docSnap = await getDoc(docRef);
            console.log((docSnap.data().matriculaAeronave).toString())

            setMatriculaAeronave((docSnap.data().matriculaAeronave).toString())
        }
        handleDataAeronave()

        const handleDataMecanico = async () => {
            console.log(props.idMecanicoResponsavel);
            const docRef = doc(db, "mecanicoGeral", props.idMecanicoResponsavel)
            const docSnap = await getDoc(docRef);
            console.log((docSnap.data().nome).toString())
            setNomeMecanico((docSnap.data().nome).toString())
        }
        handleDataMecanico()
    }, []);

    const removeElement = () => {
        setVisible((prev) => !prev);
    };
    const navigation = useNavigation();
    return (
        <View>
            {visible && (
                <View>
                    <View style={styles.caixona}>
                        <View style={styles.esquerda}>
                            <Text style={styles.textoNome}>{props.nomeManutencao}</Text>
                            <Text style={styles.propriedades}><Text style={{ fontWeight: 'bold' }}>Descrição </Text>{props.descricao}</Text>
                            <Text style={styles.textoNacionalidadeAeronave}><Text style={{ fontWeight: 'bold' }}>Prioridade </Text>{props.prioridade}</Text>
                            <Text style={styles.propriedades}><Text style={{ fontWeight: 'bold' }}>Estimativa </Text>{props.estimativa}</Text>
                            <Text style={styles.propriedades}><Text style={{ fontWeight: 'bold' }}>Matrícula aeronave </Text>{matriculaAeronave}</Text>
                            <Text style={styles.propriedades}><Text style={{ fontWeight: 'bold' }}>Mecânico Responsável </Text>{nomeMecanico}</Text>
                            <Text style={styles.propriedades}><Text style={{ fontWeight: 'bold' }}>Status </Text>{props.statusManutencao}</Text>
                        </View>
                        <View style={styles.botaoCaixona}>
                            {/* <TouchableOpacity style={styles.botaoDeletar} onPress={() => { removeElement(); excluirDocumento(props.id) }} >
                            <Text style={styles.botaoText}>X</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoEditar} >
                            <Text style={styles.botaoText}>Editar</Text>
                        </TouchableOpacity>  */}
                            <TouchableOpacity
                                style={styles.botaoDeletar}
                                onPress={() => {
                                    removeElement();
                                    excluirDocumento(props.id);
                                }}
                            >
                                <AntDesign
                                    name="delete"
                                    size={40}
                                    color="white"
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.botaoEditar}
                            >
                                <AntDesign
                                    name="edit"
                                    size={40}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    propriedades: {
        fontSize: 16
    },
    caixona: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#CCC',
    },
    'caixona:last-child': {
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
        alignSelf: 'center',
    },
    botaoCaixona: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingBottom: 10,
        marginTop: 10,
    },
    botaoEditar: {
        marginLeft: 10,
        backgroundColor: '#D8D8D8',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center',
    },
    botaoDeletar: {
        marginLeft: 10,
        backgroundColor: '#D11A2A',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center',
    },
    botaoText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textoNome: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    textoEmail: {
        fontSize: 16,
    },
    esquerda: {
        maxWidth: '100%',
    },
});
