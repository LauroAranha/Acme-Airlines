import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BtnImage = () => {
    return (
        <View>
            <Text>A</Text>
            <TouchableOpacity
                Opacitystyle={styles.btnImagem}
                onPress={() => navigation.navigate('')}
            >
                <Image
                    style={styles.btnImagem}
                    source={require('../screens/Assets/ButtonPeças.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                Opacitystyle={styles.btnImagemBig}
                onPress={() => navigation.navigate('PlaneInfoScreen')}
            >
                <Image
                    style={styles.btnImagemBig}
                    source={require('../screens/Assets/ButtonB.png')}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btnImagem: {
        marginTop: 10,
        width: 130,
        height: 130,
        resizeMode: 'contain',
        borderRadius: 17,
        borderWidth: 7,
        borderColor: '#002D9C',
    },
    btnImagemBig: {
        marginTop: 10,
        width: 300,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 17,
        borderWidth: 7,
        borderColor: '#002D9C',
    },
});

export default BtnImage;
