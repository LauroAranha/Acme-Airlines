/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// Import React Components
import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Import style
import styles from './styles';

// Import Component Header
import Header from '../../components/Header';

// Import Images
import iconWorker from '../../../assets/worker.png';
import iconService from '../../../assets/service.png';
import iconEngine from '../../../assets/engine.png';
import iconWarning from '../Assets/warning.png';
import iconTest from '../Assets/test.png';

const Principal = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <Text style={styles.text}>Olá usuário!</Text>
          <TouchableOpacity
            style={styles.btnPrincipalTeste}
            onPress={() => navigation.navigate('GerenciarEquipe')}
          >
            <Image style={styles.imageBtnTeste} source={iconWorker} />
            <View style={styles.teste}>
              <Text style={styles.btnTextTeste}>Gerenciar equipe</Text>
              <Text style={styles.btnSubTextTeste}>Gerencie sua equipe</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnPrincipalTeste}
            onPress={() => navigation.navigate('AddManutencao')}
          >
            <Image style={styles.imageBtnTeste} source={iconService} />
            <View style={styles.teste}>
              <Text style={styles.btnTextTeste}>Gerencie as manutenções</Text>
              <Text style={styles.btnSubTextTeste}>
                Uma lista simples de problemas relatados
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnPrincipalTeste}
            onPress={() => navigation.navigate('GerenciarAeronave')}
          >
            <Image style={styles.imageBtnTeste} source={iconEngine} />
            <View style={styles.teste}>
              <Text style={styles.btnTextTeste}>Gerenciar aeronaves</Text>
              <Text style={styles.btnSubTextTeste}>
                Gerencie as aeronaves cadastradas ou adicione novas.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnPrincipalTeste}
            onPress={() => navigation.navigate('ErrorEnc')}
          >
            <Image style={styles.imageBtnTeste} source={iconWarning} />
            <View style={styles.teste}>
              <Text style={styles.btnTextTeste}>Problemas Relatados</Text>
              <Text style={styles.btnSubTextTeste}>
                Uma lista simples de problemas relatados
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnPrincipalTeste}
            onPress={() => navigation.navigate('ListaManutencao')}
          >
            <Image style={styles.imageBtnTeste} source={iconTest} />
            <View style={styles.teste}>
              <Text style={styles.btnTextTeste}>Listar manutenções</Text>
              <Text style={styles.btnSubTextTeste}>
                Listagem de manutenções
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Principal;
