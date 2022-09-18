import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar,Image,TouchableOpacity,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const ManutencoesAndamento = ({ navigation }) => {
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
                <Text style={styles.loginText}>ID da Manutenção;</Text> 
                <Text style={styles.loginText}>Tipo de Manutenção:</Text>
                <Text style={styles.loginText}>MatriculaAeronave:</Text> 
                <Text style={styles.loginText}>StatusManutenção:</Text>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('DetalhesManutencao')}
                >
                    <Text style={styles.btnText}>Detalhes da Manutenção</Text> 
                </TouchableOpacity>
            </View>
        </View>
            <TouchableOpacity
                    style={styles.btnCadastro}
                    onPress={() => navigation.navigate('InfoAeronaves')}
                >
                    <Text style={styles.btnText}>Consultar Aeronave</Text> 
                </TouchableOpacity>
                <View style={{flexDirection: 'row',justifyContent: 'space-around', marginTop: 70,}}>
        <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('Principal')}
                >
                    <Text style={styles.btnText}>Voltar</Text> 
                </TouchableOpacity>
            <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('AberturaManutencao')}
                >
                    <Text style={styles.btnText}>Nova Manutenção</Text> 
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

export default ManutencoesAndamento;