import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar,Image,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const InfoAeronaves = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
            <Image style={styles.logo}source={require('../../../assets/Acmelogo.png')}/>
            <Image style={styles.perfil} source={require('../../../assets/user.png')}/>
         </View>
         <View style = {styles.scrollview}>
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
            <TouchableOpacity Opacitystyle={styles.btnImagem}> 
            <Image style = {styles.btnImagem} source={require('../Assets/ButtonPeças.png')} />
            </TouchableOpacity>
            <TouchableOpacity Opacitystyle={styles.btnImagem}> 
            <Image style = {styles.btnImagem} source={require('../Assets/buttonA.png')} />
            </TouchableOpacity>
            </View>
            <Text style={styles.loginText}>Total de horas de Hélices atuais:</Text>
                <TextInput style={styles.loginBox}></TextInput>
            <Text style={styles.loginText}>Total de horas de Rotores atuais:</Text>
                <TextInput style={styles.loginBox}></TextInput>
            <Text style = {styles.baseText}>MANUTENÇÕES:</Text>
            <TouchableOpacity Opacitystyle={styles.btnImagemBig}> 
            <Image style = {styles.btnImagemBig} source={require('../Assets/ButtonB.png')} />
            </TouchableOpacity>
            </View>
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

export default InfoAeronaves;