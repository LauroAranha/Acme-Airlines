/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0E2FF',
  },
  baseText: {
    marginTop: '5%',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#002D9C',
    fontSize: 20,
  },

  BottomBar: {
    backgroundColor: '#00063A',
    position: 'absolute',
    bottom: '0%',
    padding: 15,
    height: '10%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btnImagem: {
    marginTop: '5%',
    width: 200,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#002D9C',
    alignSelf: 'center',
  },
  IconTab: {
    width: 40,
    height: 40,
  },
  TextTab1: {
    color: 'white',
  },
  TextTab2: {
    color: 'white',
  },
  header: {
    backgroundColor: '#4589FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 15,
  },
  logo: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },

  perfil: {
    width: 80,
    height: 60,
    resizeMode: 'contain',
  },
  scrollview: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ListItem: {
    marginTop: '5%',
    marginRight: '5%',
    marginLeft: '5%',
    backgroundColor: 'white',
    width: '95%',
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    marginTop: '5%',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  texto: {
    marginTop: '2%',
    marginLeft: '3%',
    marginBottom: '2%',
    textAlign: 'left',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    left: '-5%',
  },
  texto2: {
    marginTop: '2%',
    marginLeft: '3%',
    marginBottom: '2%',
    textAlign: 'left',
    color: 'black',
    fontSize: 16,
    left: '-5%',
  },
  textoCorAlta: {
    color: 'red',
    fontSize: 15,
  },
  textoCorMedia: {
    color: 'orange',
    fontSize: 15,
  },
  textoCorBaixa: {
    color: 'green',
    fontSize: 15,
  },
  btnCadastro: {
    marginTop: '5%',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#4589FF',
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
