import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    deleteDoc,
    doc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { AntDesign } from '@expo/vector-icons';

async function excluirDocumento(input) {
    console.log(input)
    let idDocumento = (input)
    try {
        console.log('Documento a ser excluído: ' + idDocumento);
        const res = await deleteDoc(
            doc(db, 'mecanicoGeral', idDocumento)
        );
        console.log('Dado excluido!');
        this.state = {
            showComponent: false,
        };
    } catch (e) {
        console.error('erro: ', e);
    }
};

export default function CardMecanico(props) {
    var [visible, setVisible] = useState(true);
    const removeElement = () => {
        setVisible((prev) => !prev);
    };
    return (
        <View>{visible && (
            <View>
                <View style={styles.caixona}>

                    <View style={styles.esquerda}>
                        <Text style={styles.textoNome}>{props.nome}</Text>
                        <Text style={styles.textoEmail}>{props.email}</Text>
                    </View>
                    <View style={styles.botaoCaixona}>
                        {/* <TouchableOpacity style={styles.botaoDeletar} onPress={() => { removeElement(); excluirDocumento(props.id) }} >
                            <Text style={styles.botaoText}>X</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoEditar} >
                            <Text style={styles.botaoText}>Editar</Text>
                        </TouchableOpacity>  */}
                        <TouchableOpacity style={styles.botaoDeletar} onPress={() => { removeElement(); excluirDocumento(props.id) }} >
                            <AntDesign name="delete" size={40} color="white" />
                        </TouchableOpacity>
                        <AntDesign name="edit" size={40} color="black" />

                    </View>
                </View>
            </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    caixona: {
        backgroundColor: '#fff',
        marginBottom: 20,
        width: '100%',
        padding: 20,
        alignSelf: 'center'

    },
    botaoCaixona: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    botaoEditar: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
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
        alignItems: 'center'
    },
    botaoText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textoNome: {
        fontSize: 20,
    },
    textoEmail: {
        fontSize: 16,
    },
    esquerda: {
        maxWidth: "100%"
    }
});