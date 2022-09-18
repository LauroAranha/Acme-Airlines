import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BtnImage = (props) => {
    var imagePath = require('../screens/Assets/' + props.imageName);
    let button;

    if (props.size == 'small') {
        button = (
            <TouchableOpacity
                Opacitystyle={styles.btnImagem}
                onPress={() => navigation.navigate('')}
            >
                <Image style={styles.btnImagem} source={imagePath} />
            </TouchableOpacity>
        );
    } else if (props.size == 'big') {
        button = (
            <TouchableOpacity
                Opacitystyle={styles.btnImagemBig}
                onPress={() => navigation.navigate('PlaneInfoScreen')}
            >
                <Image style={styles.btnImagemBig} source={imagePath} />
            </TouchableOpacity>
        );
    }
    return <View>{button}</View>;
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
