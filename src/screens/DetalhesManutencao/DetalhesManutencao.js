import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar,Image,TouchableOpacity,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const DetalhesManutencao = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ScrollView>
    <View style={styles.header}>
            <Image style={styles.logo}source={require('../../../assets/Acmelogo.png')}/>
            <Image style={styles.perfil} source={require('../../../assets/user.png')}/>
    </View>
    <View style = {styles.scrollview}>
    <View style={styles.loginBox}>
                <Text style={styles.loginText}>Status Manutenção:</Text>
                <TextInput style={styles.inputLittle}/> 
                <Text style={styles.loginText}>Matricula da Aeronave:</Text>
                <TextInput style={styles.input}/> 
                <Text style={styles.loginText}>Modelo da Aeronave</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Nacionalidade da Aeronave:</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Tipo da Manutenção:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Local da Manutenção:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Descrição da Manutenção:</Text> 
                <TextInput style={styles.TextArea}/>
                <Text style={styles.loginText}>Equipe/Mecanicos:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Ferramentas Especificas:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Nome do Componente:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Marca do Componente:</Text> 
                <TextInput style={styles.input}/>
                <Text style={styles.loginText}>Data de Abertura:</Text>
                <TextInput style={styles.inputLittle}/> 
                <Text style={styles.loginText}>Data de Conclusão:</Text>
                <TextInput style={styles.inputLittle}/> 
            </View>
        </View>
        <TouchableOpacity
                    style={styles.btnCadastro}
                    onPress={() => navigation.navigate('ManutencoesAndamento')}
                >
                    <Text style={styles.btnText}>Concluir Manutenção</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnCadastro}
                    onPress={() => navigation.navigate('ManutencoesAndamento')}
                >
                    <Text style={styles.btnText}>Cancelar Manutenção</Text> 
                </TouchableOpacity>
        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
        <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => navigation.navigate('ManutencoesAndamento')}
                >
                    <Text style={styles.btnText}>Voltar</Text> 
                </TouchableOpacity>
            <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.btnText}>proxima</Text> 
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

export default DetalhesManutencao;