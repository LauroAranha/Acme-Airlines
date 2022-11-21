/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

// Import React Component
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// Import Firebsase
import { signInWithEmailAndPassword } from 'firebase/auth';

// Import Images
import logo from '../../../assets/Acmelogo.png';

// Import Styles
import styles from './styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('lauro@lauro.com');
  const [password, setPassword] = useState('lauro123');

  const logInWithEmailAndPassword = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password).then(
        (userCredential) => {}
      );
      console.log('Usuário autenticado!');
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Lugar da logo */}
      <Image style={styles.logo} source={logo} />
      <View style={styles.loginBox}>
        <Text style={styles.loginText}>Email:</Text>
        <TextInput
          value={email}
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.loginText}>Senha:</Text>
        <TextInput
          value={password}
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            logInWithEmailAndPassword(setEmail, setPassword);
            navigation.navigate('Principal');
          }}
        >
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
