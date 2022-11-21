/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

// Import React Components
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Import Components header
import Header from '../../components/Header';

// Import Images
import planeImg from '../Assets/plane.jpg';

// Import Styles
import styles from './styles';

const ErrorEnc = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View
        style={{
          height: '90%',
          width: '100%',
          margin: 15,
          alignItems: 'center',
        }}
      >
        <ScrollView
          style={{ width: '90%', marginRight: '10%', marginBottom: '20%' }}
        >
          <View style={styles.scrollview}>
            <Text style={styles.baseText}>Problemas Relatados:</Text>

            <View style={styles.ListItem}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Descricao')}
              >
                <Image style={styles.btnImagem} source={planeImg} />
                <Text style={styles.title}>Boeing 737</Text>
                <Text style={styles.texto}>Solicitante:</Text>
                <Text style={styles.texto2}>Mecânico - Vitor Gomes</Text>
                <Text style={styles.texto}>Problema:</Text>
                <Text style={styles.texto2}>
                  As luzes do painel frontal do avião estão queimadas
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ListItem}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Descricao')}
              >
                <Image style={styles.btnImagem} source={planeImg} />
                <Text style={styles.title}>Boeing 738</Text>
                <Text style={styles.texto}>Solicitante:</Text>
                <Text style={styles.texto2}>Mecânico - Rogério Oliveira</Text>
                <Text style={styles.texto}>Problema:</Text>
                <Text style={styles.texto2}>
                  As luzes do painel frontal do avião estão queimadas
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ListItem}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Descricao')}
              >
                <Image style={styles.btnImagem} source={planeImg} />
                <Text style={styles.title}>Boeing 739</Text>
                <Text style={styles.texto}>Solicitante:</Text>
                <Text style={styles.texto2}>Mecânico - Pedro Vieira</Text>
                <Text style={styles.texto}>Problema:</Text>
                <Text style={styles.texto2}>
                  As luzes do painel frontal do avião estão queimadas
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.btnCadastro}
              onPress={() => navigation.navigate('Principal')}
            >
              <Text style={styles.btnText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ErrorEnc;
