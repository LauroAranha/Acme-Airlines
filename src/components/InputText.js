import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const InputText = (props) => {
    return (
        <View>
            <Text style={styles.loginText}>{props.name}</Text>
            <TextInput style={styles.loginBox}></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    loginBox: {
        backgroundColor: '#f4f4f4',
        padding: 15,
        maxHeight: '95%',
        maxWidth: '95%',
        marginBottom: 20,
        borderRadius: 15,
        minWidth: '85%',
        justifyContent: 'space-around',
        textAlign: 'center',
    },
    loginText: {
        padding: 5,
        fontSize: 13,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFF',
    },
});

export default InputText;
