/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// Import React Components
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Import Images
import logo from '../../assets/Acmelogo.png';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4589FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: '10%',
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
  logo: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },

  perfil: {
    width: 80,
    height: 60,
    resizeMode: 'contain',
  },
});

export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Icon
            name="user-circle"
            size={60}
            color="#fff"
            style={styles.perfil}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
