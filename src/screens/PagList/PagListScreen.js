import styles from './styles';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import AppItem from '../../components/AppItem'

import { app, db } from "../../firebase"
import { getFirestore, collection, addDoc, getDoc, getDocs } from 'firebase/firestore';

const PagList = ({ navigation }) => {
    const [cpf, onChangeText] = React.useState('');

    // console.log(db)
    // const addMecanico = async () => {
    //     try {
    //         const docRef = await addDoc(collection(db, "mecanico"), {
    //             nome: nome,
    //             email: email,
    //         });
    //         console.log("Document written with ID: ", docRef.id);
    //         //setTitle("");
    //     } catch (e) {
    //         console.error("Error adding document: ", e);
    //     }
    // }

    const listUser = async () => {
        const querySnapshot = await getDocs(collection(db, "user"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
        });
    };


    const estilo = StyleSheet.create({
        container: {
            width: "80%",
            height: "auto",
            backgroundColor: "white",
        },
        title: {
        },
        scrollContainer: {
        },
        itemsContainer: {
        },
    });
    return (
        <View style={styles.container}>
            <View style={estilo.container}>
                <ScrollView>
                    <Text style={styles.loginText}>Listagem de registros:</Text>
                    <ScrollView
                        nestedScrollEnabled={true}
                        style={estilo.scrollContainer}
                        //{items.map(item => {
                        //    return <AppItem key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} />
                        //})}
                        contentContainerStyle={estilo.itemsContainer}>
                    </ScrollView>
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={() => listUser()}
                    >
                        <Text style={styles.btnText}>Listar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnRedirect}
                        onPress={() => navigation.navigate('PagInsert')}
                    >
                        <Text style={styles.btnText}>Ir pro insert</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

export default PagList;