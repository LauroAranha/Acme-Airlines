import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar,Image,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const InfoAeronaves = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
            <Image style={styles.logo}source={require('../../../assets/Acmelogo.png')}/>
            <Image style={styles.perfil} source={require('../../../assets/user.png')}/>
         </View>
         <View style = {styles.scrollview}>
          <View style={styles.loginBox}>
            <Text style = {styles.baseText}>INFORMAÇÕES DA AERONAVE:</Text>

            <Image style = {styles.imagem} source={require('../Assets/plane.jpg')} />
            <Text style={styles.loginText}>Último voo</Text>
                <TextInput style={styles.input} placeholder="--:--"></TextInput>
            <Text style={styles.loginText}>Matrícula do Avião:</Text>
                <TextInput style={styles.input} placeholder="AA-AAA"></TextInput>
            <Text style={styles.loginText}>Nacionalidade do Avião:</Text>
                <TextInput style={styles.input} placeholder="BR"></TextInput>

            <Text style = {styles.baseText}>MANUTENÇÕES PREVENTIVAS:</Text>
            
            <View style={styles.checkBox}>
            <Text style={styles.texto}>🔲 Troca de óleo</Text>
            <Text style={styles.texto}>🔲 Revisão de trens de pouso</Text>
            <Text style={styles.texto}>🔲 Verificação na cabine</Text>
            <Text style={styles.texto}>🔲 Verificação das turbinas</Text>
            <Text style={styles.texto}>🔲 Reabastecer água</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.mostrar}>Mostrar mais...</Text>
            </TouchableOpacity>

            <Text style = {styles.baseText}>MANUTENÇÕES:</Text>
            
            <View style={styles.checkBox}>
            <Text style={styles.texto}>🔲 Reparos na Asa</Text>
            <Text style={styles.texto}>🔲 Verificar motor</Text>
            <Text style={styles.texto}>🔲 Trocar vidros trincados</Text>
            <Text style={styles.texto}>🔲 Concerto de portas</Text>
            <Text style={styles.texto}>🔲 Trocar filtros de ar-condicionado</Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.mostrar}>Mostrar mais...</Text>
            </TouchableOpacity>

            <Text style = {styles.baseText}>FERRAMENTAS:</Text>
            <TouchableOpacity Opacitystyle={styles.btnImagemBig}> 
            <Image style = {styles.btnImagemBig} source={require('../Assets/solicitarFerramenta.png')} />
            </TouchableOpacity>
            
            <Text style = {styles.baseText}>RELATAR PROBLEMA:</Text>
            <TouchableOpacity Opacitystyle={styles.btnImagemBig}> 
            <Image style = {styles.btnImagem} source={require('../Assets/relatarProblema.png')} />
            </TouchableOpacity>

            <Text style = {styles.baseText}>FINALIZAR MANUTENÇÃO:</Text>
            <TouchableOpacity style={styles.btnManuten}> 
            <Text style={styles.btnText}>Salvar Alterações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnConcManuten}> 
            <Text style={styles.btnText}>Concluir Manutenção</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity 
            style={styles.btnVoltar}
            onPress={() => navigation.navigate('ManutencaoAFazer')}> 
            <Text style={styles.btnText}>Voltar</Text>
            </TouchableOpacity>

            </View>
            </ScrollView>
            </View>
  );
}

export default InfoAeronaves;