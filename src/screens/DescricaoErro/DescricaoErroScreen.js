/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

// Import React Components
import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

// Import Component Header
import Header from '../../components/Header';

// Import Styles
import styles from './styles';

const DescricaoErro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.scrollview}>
          <View style={styles.loginBox}>
            <Text style={styles.loginText}>Local do Problema:</Text>
            <View style={styles.Adicionado}>
              <Text>Painel de Aviação</Text>
            </View>
            <Text style={styles.loginText}>Tipo do Problema:</Text>
            <View style={styles.Adicionado}>
              <Text>As luzes do painel frontal do avião estão queimadas</Text>
            </View>
            <Text style={styles.loginText}>Descrição:</Text>
            <View style={styles.Adicionado}>
              <Text>As luzes 1 e 3 do painel estão queimadas</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnCadastro}
          onPress={() => navigation.navigate('ErrorEnc')}
        >
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DescricaoErro;
