/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

// Import React Components
import React from 'react';
import { Text, View, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// Import COmponents Header
import Header from '../../components/Header';

// Import Styles
import styles from './styles';

const AddTarefa = ({ navigation }) => {
  const createThreeButtonAlert = () =>
    Alert.alert(
      'Sua Tarefa Foi Adicionada 😉',
      'Sua Tarefa foi adicionada com Sucesso ✔',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.scrollview}>
          <View style={styles.loginBox}>
            <Text style={styles.loginText}>Nome:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.loginText}>Resumo:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.loginText}>Parte do Avião:</Text>
            <TextInput style={styles.input} />
            <TouchableOpacity
              style={styles.btnCadastro}
              onPress={this.createThreeButtonAlert}
            >
              <Text style={styles.btnText}>Adicionar Nova Tarefa</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnCadastro}
          onPress={() => navigation.navigate('AddManutencao')}
        >
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddTarefa;
