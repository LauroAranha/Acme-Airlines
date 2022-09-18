import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar,Image,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const InfoAeronaves = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
            <Text style = {styles.baseText}>INFORMAÇÕES DA AERONAVE:</Text>
            <Image style = {styles.imagem} source={require('../Assets/plane.jpg')} />
            <Text style={styles.loginText}>Matricula da Aeronave:</Text>
                <TextInput style={styles.loginBox}></TextInput>
            <Text style={styles.loginText}>Modelo da Aeronave:</Text>
                <TextInput style={styles.loginBox}></TextInput>
            <Text style={styles.loginText}>Nacionalidade do Avião:</Text>
                <TextInput style={styles.loginBox}></TextInput>
            <Text style={styles.loginText}>Categoria do Modelo:</Text>
                <TextInput style={styles.loginBox}></TextInput>
            <Text style = {styles.baseText}>INFORMAÇÕES TECNICAS:</Text>
            <View style = {{flexDirection: 'row',}}>
            <TouchableOpacity Opacitystyle={styles.btnImagem}
            onPress={() => navigation.navigate('PlaneInfoScreen')}> 
            <Image style = {styles.btnImagem} source={require('../Assets/ButtonPeças.png')} />
            </TouchableOpacity>
            <TouchableOpacity Opacitystyle={styles.btnImagem}
            onPress={() => navigation.navigate('PlaneInfoScreen')}> 
            <Image style = {styles.btnImagem} source={require('../Assets/buttonA.png')} />
            </TouchableOpacity>
            </View>
            <Text style={styles.loginText}>Total de horas de Hélices atuais:</Text>
                <TextInput style={styles.loginBox}></TextInput>
            <Text style={styles.loginText}>Total de horas de Rotores atuais:</Text>
                <TextInput style={styles.loginBox}></TextInput>
            <Text style = {styles.baseText}>MANUTENÇÕES:</Text>
            <TouchableOpacity Opacitystyle={styles.btnImagemBig}
            onPress={() => navigation.navigate('PlaneInfoScreen')}> 
            <Image style = {styles.btnImagemBig} source={require('../Assets/ButtonB.png')} />
            </TouchableOpacity>
            </ScrollView>
        </View>
  );
}

export default InfoAeronaves;