/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Import firebase and Firestore
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
} from 'firebase/firestore';
import { db } from '../../firebase';

// Import Components Header and CardAeronave
import Header from '../../components/Header';
import CardAeronave from '../../components/CardAeronave';

// Import style
import styles from './styles';

const GerenciarAeronave = ({ navigation }) => {
  // atributos que serão adicionados no formulario
  const [nome, setNome] = useState([]);
  const [matriculaAeronave, setMatriculaAeronave] = useState([]);
  const [ultimoVoo, setUltimoVoo] = useState([]);
  const [horarioChegada, setHorarioChegada] = useState([]);
  const [nacionalidadeAeronave, setNacionalidadeAeronave] = useState([]);
  const [modeloAeronave, setModeloAeronave] = useState([]);
  const [JSON_DATA, setJSON_DATA] = useState('');
  const [showIndicator, setShowIndicator] = useState(true);
  const list = [];

  useEffect(() => {
    const listAeronaves = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'aeronave'));
        // eslint-disable-next-line no-shadow
        querySnapshot.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setNome(list);
        setMatriculaAeronave(list);

        setUltimoVoo(list);
        setHorarioChegada(list);

        setNacionalidadeAeronave(list);
        setModeloAeronave(list);

        setJSON_DATA(list);
      } catch (e) {
        console.error('erro: ', e);
      }
    };
    listAeronaves();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.listBox}>
        <FlatList
          data={JSON_DATA}
          renderItem={({ item }) => (
            <CardAeronave
              id={item.id}
              nome={item.nome}
              matriculaAeronave={item.matriculaAeronave}
              ultimoVoo={item.ultimoVoo}
              horarioChegada={item.horarioChegada}
              nacionalidadeAeronave={item.nacionalidadeAeronave}
              modeloAeronave={item.modeloAeronave}
            ></CardAeronave>
          )}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          alignSelf: 'flex-start',
          left: 5,
        }}
      >
        <TouchableOpacity
          style={{ borderRadius: 100 }}
          onPress={() => navigation.navigate('CadastroA')}
        >
          <MaterialIcons name="add-circle" size={65} color="#4842FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GerenciarAeronave;
