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
            <Text style={styles.loginText}>Último voo</Text>
                <TextInput style={styles.loginBox}>--:--</TextInput>
            <Text style={styles.loginText}>Matrícula do Avião:</Text>
                <TextInput style={styles.loginBox}>AA-AAA</TextInput>
            <Text style={styles.loginText}>Nacionalidade do Avião:</Text>
                <TextInput style={styles.loginBox}>BR</TextInput>

            <Text style = {styles.baseText}>MANUTENÇÕES PREVENTIVAS:</Text>
            
            <View style={styles.checkBox}>
            <Text style={styles.texto}>🔲 Troca de óleo</Text>
            <Text style={styles.texto}>🔲 Revisão de trens de pouso</Text>
            <Text style={styles.texto}>🔲 Verificação na cabine</Text>
            <Text style={styles.texto}>🔲 Verificação das turbinas</Text>
            <Text style={styles.texto}>🔲 Reabastecer água</Text>
            <TouchableOpacity>
                <Text style={styles.mostrar}>Mostrar mais...</Text>
            </TouchableOpacity>
            </View>

            <Text style = {styles.baseText}>MANUTENÇÕES:</Text>
            
            <View style={styles.checkBox}>
            <Text style={styles.texto}>🔲 Reparos na Asa</Text>
            <Text style={styles.texto}>🔲 Verificar motor</Text>
            <Text style={styles.texto}>🔲 Trocar vidros trincados</Text>
            <Text style={styles.texto}>🔲 Concerto de portas</Text>
            <Text style={styles.texto}>🔲 Trocar filtros de ar-condicionado</Text>
            <TouchableOpacity>
                <Text style={styles.mostrar}>Mostrar mais...</Text>
            </TouchableOpacity>
            </View>

         {/*   <View style = {{flexDirection: 'row',}}>
            <TouchableOpacity Opacitystyle={styles.btnImagem}> 
            <Image style = {styles.btnImagem} source={require('../Assets/ButtonPeças.png')} />
            </TouchableOpacity>
            <TouchableOpacity Opacitystyle={styles.btnImagem}> 
            <Image style = {styles.btnImagem} source={require('../Assets/buttonA.png')} />
            </TouchableOpacity>
             </View> */}
            
            <Text style = {styles.baseText}>FERRAMENTAS:</Text>
            <TouchableOpacity Opacitystyle={styles.btnImagemBig}> 
            <Image style = {styles.btnImagemBig} source={require('../Assets/solicitarFerramenta.png')} />
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