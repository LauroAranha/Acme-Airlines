import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

export default function CardAeronave(props) {
    var [visible, setVisible] = useState(true);
    const [checked, setChecked] = React.useState('first');

    const navigation = useNavigation();
    return (
        <View>
            {visible && (
                
                <View>
                    <View style={styles.caixona}>
                        <TouchableOpacity style={styles.innerCard} onPress={() => {setChecked(props.id); console.log(props.id)}}>
                            <View style={styles.esquerda}>
                                <Text style={styles.textoNome}>{props.nome}</Text>
                                <Text style={styles.textoMatriculaAeronave}>{props.matriculaAeronave}</Text>
                                <Text style={styles.ModeloAeronave}>{props.modeloAeronave}</Text>
                            </View>
                            <View style={styles.direita}>
                                <RadioButton>
                                    value={props.id}
                                    status={checked === props.id ? 'checked' : 'unchecked'}
                                </RadioButton>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    esquerda: {
        textAlign: 'right',
        backgroundColor: 'yellow',
    },
    direita: {
        alignSelf: 'center',
        position: 'absolute',
        right: 0
    },
    innerCard: {
        maxWidth: '100%',
        flex: 1,
        flexDirection: 'row',
    },
    caixona: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
        alignSelf: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#CCC',
        flexDirection: 'row',
    },
    botaoCaixona: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
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
});
