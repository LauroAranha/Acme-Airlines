/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

// Import React Components
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Import Component Header
import Header from '../../components/Header';

// Import Images
import iconNext from '../Assets/next.png';
import iconLogout from '../Assets/logout.png';

// Import styles
import styles from './styles';

const Perfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.scrollview}>
          <View style={styles.loginBox}>
            <TouchableOpacity
              style={{ marginBottom: '5%' }}
              onPress={() => navigation.navigate('Principal')}
            >
              <Image style={{ width: 30, height: 30 }} source={iconNext} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', left: '0%' }}>
              <Icon
                name="user-circle"
                size={60}
                color="#000"
                style={styles.perfil}
              />
              <View>
                <Text style={styles.loginText}>Augusto Jair Nabo</Text>
                <Text style={{ fontSize: 18 }}> Mecanico</Text>
              </View>
            </View>
            <View
              style={{
                marginTop: '4%',
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <TouchableOpacity
              style={{ flexDirection: 'row', marginTop: '8%', right: '-140%' }}
              onPress={() => navigation.navigate('Login')}
            >
              <Image style={{ width: 30, height: 30 }} source={iconLogout} />
              <Text style={styles.loginTextR}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Perfil;
