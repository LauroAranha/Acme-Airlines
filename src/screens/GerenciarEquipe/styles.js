/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D0E2FF',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderColor: '#4589FF',
    paddingStart: 10,
  },
  listBox: {
    backgroundColor: '#f4f4f4',
    paddingBottom: 120,
    maxWidth: '95%',
    marginBottom: 70,
    borderRadius: 15,
    minWidth: '75%',
    justifyContent: 'space-around',
  },
  loginText: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnLogin: {
    marginTop: 20,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#4589Ff',
    maxWidth: '100%',
    minWidth: '30%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnRedirect: {
    color: 'white',
    marginTop: 20,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FF5733',
    maxWidth: '100%',
    minWidth: '30%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    textDecorationLine: 'underline',
  },
  registerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonNewTask: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 20,
    backgroundColor: '#F92e6a',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default styles;
