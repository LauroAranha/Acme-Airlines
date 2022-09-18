import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar,Image,TouchableOpacity,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const ServicoSelecionado = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ScrollView>
    <View style={styles.header}>
            <Image style={styles.logo}source={require('../../../assets/Acmelogo.png')}/>
            <Image style={styles.perfil} source={require('../../../assets/user.png')}/>
    </View>
    <View style = {styles.scrollview}>
    <View style={styles.loginBox}>
                <Text style={styles.loginText}>Serviço Selecionado:</Text>
                <TextInput style={styles.input}/> 
                <Text style={styles.loginText}>Descrição do Serviço</Text> 
                <TextInput style={styles.TextArea}/>
            </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-around', marginTop: 70,}}>
        <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('SelectServ')}
                >
                    <Text style={styles.btnText}>Voltar</Text> 
                </TouchableOpacity>
            <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('SelectServ')}
                >
                    <Text style={styles.btnText}>Enviar</Text> 
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

export default ServicoSelecionado;