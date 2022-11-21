/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

// Import React Components
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Import Firebase Firestore
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
import { db } from '../../firebase';

// Import Components Header and CardMecanico
import Header from '../../components/Header';
import CardMecanico from '../../components/CardMecanico';

// Import style
import styles from './styles';

const GerenciarEquipe = ({ navigation }) => {
  // atributos que serão adicionados no formulario
  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);
  const [JSON_DATA, setJSON_DATA] = useState('');
  const [showIndicator, setShowIndicator] = useState(true);
  const list = [];

  useEffect(() => {
    const listUser = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'user'));
        querySnapshot.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setNome(list);
        setEmail(list);
        setJSON_DATA(list);
      } catch (e) {
        console.error('erro: ', e);
      }
    };
    listUser();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.listBox}>
        <FlatList
          data={JSON_DATA}
          renderItem={({ item }) => (
            <CardMecanico
              id={item.id}
              nome={item.nome}
              email={item.email}
            ></CardMecanico>
          )}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 5,
          alignSelf: 'flex-start',
          left: 5,
        }}
      >
        <TouchableOpacity
          style={{ borderRadius: 100 }}
          onPress={() => navigation.navigate('CadastroM')}
        >
          <MaterialIcons name="add-circle" size={65} color="#4842FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GerenciarEquipe;
