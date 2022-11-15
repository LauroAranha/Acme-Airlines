import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    getDocs,
    doc,
} from 'firebase/firestore';

import { app, db } from '../firebase';

async function excluirDocumento(input) {

    let teste = (input)
    try {
        console.log('Documento a ser excluído: ' + teste);
        const res = await deleteDoc(
            doc(db, 'user', teste)
        );
        console.log('Dado excluido:', res);
        this.state = {
            showComponent: false,
        };
    } catch (e) {
        console.error('erro: ', e);
    }
};

export default function AppItem(props) {
    var [visible, setVisible] = useState(true);
    const removeElement = () => {
        setVisible((prev) => !prev);
    };
    return (
        <View>{visible && (
            <View>
                <View style={styles.caixona}>

                    <View style={styles.esquerda}>
                        <Text style={styles.textoItem}>Id: {props.id}</Text>
                    </View>
                    <View style={styles.botaoCaixona}>
                        <TouchableOpacity style={styles.botaoDeletar} onPress={() => { removeElement(); excluirDocumento(props.id) }} >
                            <Text style={styles.botaoText}>X</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoEditar} >
                            <Text style={styles.botaoText}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    caixona: {
        backgroundColor: '#fff',
        marginTop: 20,
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
        height: 40,
        width: 40,
        backgroundColor: 'red',
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
    textoItem: {
        fontSize: 20,
    },
    esquerda: {
        maxWidth: "100%"
    }
});