import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar,Image,TouchableOpacity,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const ListaAeronaves = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ScrollView>
    <View style={styles.header}>
            <Image style={styles.logo}source={require('../../../assets/Acmelogo.png')}/>
            <Image style={styles.perfil} source={require('../../../assets/user.png')}/>
    </View>
    <View style = {styles.scrollview}>
    <View style={styles.loginBox}>
                <Text style={styles.loginText}>Matricula da Aeronave:</Text>
                <TextInput style={styles.input}/> 
                <Text style={styles.loginText}>Modelo da Aeronave</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Nacionalidade do Modelo:</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Categoria do Modelo:</Text> 
                <TextInput style={styles.input}/>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('InfoAeronaves')}
                >
                    <Text style={styles.btnText}>Acessar Informações</Text> 
                </TouchableOpacity>
            </View>
        </View>
            <TouchableOpacity
                    style={styles.btnCadastro}
                    onPress={() => navigation.navigate('CadAero')}
                >
                    <Text style={styles.btnText}>Cadastrar Avião</Text> 
                </TouchableOpacity>
      </ScrollView>
    <View style ={styles.BottomBar}>
            <TouchableOpacity>
            <Image style = {styles.IconTab} source={require('../Assets/historia.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style = {styles.IconTab} source={require('../Assets/engine1.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style = {styles.IconTab} source={require('../Assets/form.png')} />
            </TouchableOpacity>
    </View>
    </View>
  );
}

export default ListaAeronaves;