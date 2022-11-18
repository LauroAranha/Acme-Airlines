import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4589FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 15,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        width: '103%',
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '15%',
    },
    logo: {
        width: 120,
        height: 100,
        resizeMode: 'contain',
    },

    perfil: {
        width: 80,
        height: 60,
        resizeMode: 'contain',
    },
});

export default function Header() {
    const navigation = useNavigation();

    const route = useRoute();
    console.log(route.name);



    useEffect(() => {
        if (route.name == 'Principal') {

        } else {

        }
    }, []);


    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/Acmelogo.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <Image
                        style={styles.perfil}
                        source={require('../../assets/user.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}