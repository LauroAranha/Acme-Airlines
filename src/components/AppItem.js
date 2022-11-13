import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    caixona: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '100%'
    },
    botaoCaixona: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
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
    }
});
export default function AppItem(props) {
    return (
        <View style={styles.caixona}>
            <Text style={styles.textoItem}>{props.item}</Text>
            <View style={styles.botaoCaixona}>
                <TouchableOpacity style={styles.botaoDeletar} >
                    <Text style={styles.botaoText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoEditar} >
                    <Text style={styles.botaoText}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}