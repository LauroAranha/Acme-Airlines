/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

// Import React Components
import React from 'react';
import { Text, View, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// Import COmponent Header
import Header from '../../components/Header';

// Import Style
import styles from './styles';

const AddP = ({ navigation }) => {
  const createThreeButtonAlert = () =>
    Alert.alert(
      'Sua Componente Foi Adicionado ⚙',
      'Sua Componente foi adicionado com Sucesso ✔',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.scrollview}>
          <View style={styles.loginBox}>
            <Text style={styles.loginText}>Inserir Nome:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.loginText}>Inserir Data de troca:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.loginText}>Inserir Marca:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.loginText}>Inserir Nacionalidade:</Text>
            <TextInput style={styles.input} />
            <TouchableOpacity
              style={styles.btnCadastro}
              onPress={this.createThreeButtonAlert}
            >
              <Text style={styles.btnText}>Adicionar Novo Componente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddP;
