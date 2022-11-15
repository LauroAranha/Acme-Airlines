import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';


import Login from './src/screens/Login/LoginScreen';
import Principal from './src/screens/Principal/Principal';
import AddManutencao from './src/screens/AddManutenção/AddManutencao'
import AddTarefa from './src/screens/AddTarefa/AddTarefa';
import AddP from './src/screens/AddPeças/AddPecas';
import CadastroM from './src/screens/CadastroMecanico/CadastroM';
import CadastroA from './src/screens/CadastroAeronaves/CadastroA';
import ListaManutencao from './src/screens/ListaManutencao/ListaManutencaoScreen';
import ErrorEnc from './src/screens/ErrosEncontrados/ErrorEnc';
import DescricaoErro from './src/screens/DescricaoErro/DescricaoErroScreen';
import Perfil from './src/screens/Perfil/Perfil';
import InfoManutencao from './src/screens/InfoManutencao/InfoManutencaoScreen';

import PagList from './src/screens/PagList/PagListScreen'
import PagInsert from './src/screens/PagInsert/PagInsertScreen'

const AppStack = createStackNavigator();

LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);

const App = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerModel="none"
                screenOptions={{
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#4589FF',
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                    },
                    headerTitleAlign: 'center',
                }}
            >
                <AppStack.Screen
                    name="Principal"
                    component={Principal}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="PagInsert"
                    component={PagInsert}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="PagList"
                    component={PagList}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

                <AppStack.Screen
                    name="AddManutencao"
                    component={AddManutencao}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="AddTarefa"
                    component={AddTarefa}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="AddPecas"
                    component={AddP}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="CadastroM"
                    component={CadastroM}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="CadastroA"
                    component={CadastroA}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ListaManutencao"
                    component={ListaManutencao}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ErrorEnc"
                    component={ErrorEnc}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="DescricaoErro"
                    component={DescricaoErro}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="InfoManutencao"
                    component={InfoManutencao}
                    options={{ headerShown: false }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
