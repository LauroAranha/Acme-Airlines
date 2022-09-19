import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import Principal from './src/screens/Principal/Principal';
import ListaAeronaves from './src/screens/ListaAero/ListaAeronaves';
import LoginRegisScreen from './src/screens/LoginRegis/LoginRegisScreen';
import CadMecanico from './src/screens/CadMecanico/CadastroMecanico';
import PlaneInfoScreen from './src/screens/PlaneInfo/PlaneInfoScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import ComponentsTemplate from './src/screens/ComponentsTemplate/ComponentsTemplate';
import InfoAeronaves from './src/screens/InfoAero/infoAeronaves';
import CadAero from './src/screens/CadAero/CadastroAeronave';
import SelectServ from './src/screens/SelectService/Select';
import ServicoSelecionado from './src/screens/ServSelecionado/ServicoSelecionado';
import ManutencoesAndamento from './src/screens/ManutencoesAnd/ManutencoesAndamento';
import AberturaManutencao from './src/screens/OpenManutencao/AberturaManutencao';
import DetalhesManutencao from './src/screens/DetalhesManutencao/DetalhesManutencao';

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
                    name="CadMecanico"
                    component={CadMecanico}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="Principal"
                    component={Principal}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ListaAeronaves"
                    component={ListaAeronaves}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="InfoAeronaves"
                    component={InfoAeronaves}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="CadAero"
                    component={CadAero}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="SelectServ"
                    component={SelectServ}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ServicoSelecionado"
                    component={ServicoSelecionado}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ManutencoesAndamento"
                    component={ManutencoesAndamento}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="AberturaManutencao"
                    component={AberturaManutencao}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="DetalhesManutencao"
                    component={DetalhesManutencao}
                    options={{ headerShown: false }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
