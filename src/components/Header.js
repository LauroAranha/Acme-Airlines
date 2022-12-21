import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4589FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        padding: 20,
        marginTop: 30,
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

    perfil: {
        width: 80,
        height: 60,
        resizeMode: 'contain',
    },

    pageName: {
        color: 'white',
        fontSize: 20,
    },

    headerProperties: {
        maxWidth: '100%',
        flex: 1,
        flexDirection: 'row',
    },

    esquerdaHeader: {
        textAlign: 'left',
        alignSelf: 'center',
        padding: 20,
        paddingLeft: 10,
    },
    direitaHeader: {
        alignSelf: 'center',
    },
    logo: {
        width: 120,
        height: 100,
        resizeMode: 'contain',
    },

});

export default function Header() {
    const navigation = useNavigation();

    const route = useRoute();
    //console.log(route.name);



    useEffect(() => {
        if (route.name == 'Principal') {

        } else {

        }
    }, []);


    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    {route.name == "Principal" ?
                        <Image
                            style={styles.logo}
                            source={require('../../assets/Acmelogo.png')}
                        /> : (
                            <View style={styles.headerProperties}>
                                <View style={styles.esquerdaHeader}>
                                    <Image style={{ height: 20, width: 10 }}
                                        source={require('../../assets/return.png')} />
                                </View>
                                <View style={styles.direitaHeader}>
                                    <Text style={styles.pageName}>{route.name}</Text>
                                </View>
                            </View>
                        )
                    }

                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <Image
                        style={styles.perfil}
                        source={require('../../assets/testeicon.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );


}