import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';


import LoginRegisScreen from './src/screens/LoginRegis/LoginRegisScreen';
import Principal from './src/screens/Principal/Principal';
import AddManutencao from './src/screens/AddManutenção/AddManutencao'
import TipoManutencao from './src/screens/TipoManutenção/TipoManutenção';
import AddTarefa from './src/screens/AddTarefa/AddTarefa';
import AddP from './src/screens/AddPeças/AddPecas';
import CadastroM from './src/screens/CadastroMecanico/CadastroM';
import CadastroA from './src/screens/CadastroAeronaves/CadastroA';
import ListaManuten from './src/screens/ListaManutenções/ListaManuten';
import ErrorEnc from './src/screens/ErrosEncontrados/ErrorEnc';
import Descricao from './src/screens/Descrição Erro/Descricao';
import Perfil from './src/screens/Perfil/Perfil';

const AppStack = createStackNavigator();

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
                    name="LoginRegisScreen"
                    component={LoginRegisScreen}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="Principal"
                    component={Principal}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="AddManutencao"
                    component={AddManutencao}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="TipoManutencao"
                    component={TipoManutencao}
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
                    name="ListaManuten"
                    component={ListaManuten}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ErrorEnc"
                    component={ErrorEnc}
                    options={{ headerShown: false }}
                />
                 <AppStack.Screen
                    name="Descricao"
                    component={Descricao}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{ headerShown: false }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
