import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar,Image,TouchableOpacity,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const SelectServ = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ScrollView>
    <View style={styles.header}>
            <Image style={styles.logo}source={require('../../../assets/Acmelogo.png')}/>
            <Image style={styles.perfil} source={require('../../../assets/user.png')}/>
    </View>
    <View style = {styles.scrollview}>
    <View style={styles.loginBox}>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ServicoSelecionado')}
                >
                    <Text style={styles.btnText}>Manuseio no solo</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ServicoSelecionado')}
                >
                    <Text style={styles.btnText}>Serviços de Manutenção</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ServicoSelecionado')}
                >
                    <Text style={styles.btnText}>Local para operações de Reboque</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ServicoSelecionado')}
                >
                    <Text style={styles.btnText}>Amarração</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ServicoSelecionado')}
                >
                    <Text style={styles.btnText}>Serviços Gerais</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ServicoSelecionado')}
                >
                    <Text style={styles.btnText}>Limpeza</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ServicoSelecionado')}
                >
                    <Text style={styles.btnText}>Pintura</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ServicoSelecionado')}
                >
                    <Text style={styles.btnText}>Vedação</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ServicoSelecionado')}
                >
                    <Text style={styles.btnText}>Procedimentos Especiais</Text> 
                </TouchableOpacity>
                
            </View>
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

export default SelectServ;