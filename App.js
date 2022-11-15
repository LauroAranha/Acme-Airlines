import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import ManutencaoAFazer from './src/screens/ManutencoesAFazer/ManutencaoAFazer';
import Login from './src/screens/Login/Login';
import CadMecanico from './src/screens/CadMecanico/CadastroMecanico';
import InfoAeronaves from './src/screens/InfoAero/infoAeronaves';
import ManutencaoConcluida from './src/screens/ManutencoesConcluidas/ManutencaoConcluida';
import RelatarProblem from './src/screens/RelatarProblem/RelatarProblem';
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
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="CadMecanico"
                    component={CadMecanico}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ManutencaoAFazer"
                    component={ManutencaoAFazer}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ManutencaoConcluida"
                    component={ManutencaoConcluida}
                    options={{ headerShown: false }}
                /> 
                <AppStack.Screen
                    name="InfoAeronaves"
                    component={InfoAeronaves}
                    options={{ headerShown: false }}
                />    
                <AppStack.Screen
                    name="RelatarProblem"
                    component={RelatarProblem}
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
