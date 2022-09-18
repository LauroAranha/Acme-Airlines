import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginRegisScreen from './src/screens/LoginRegis/LoginRegisScreen';
import PlaneInfoScreen from './src/screens/PlaneInfo/PlaneInfoScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import ComponentsTemplate from './src/screens/ComponentsTemplate/ComponentsTemplate';
import InfoAeronaves from './src/screens/InfoAero/InfoAeronaves';
import CadMecanico from './src/screens/CadMecanico/CadastroMecanico';
import CadAero from './src/screens/CadAero/CadastroAeronave';
import ListaAero from './src/screens/ListaAero/ListaAeronaves';
import AbertManutencao from './src/screens/AbertManutencao/AberturaManutencao';

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
                    name="Abertura da manutenção"
                    component={AbertManutencao}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="Lista de Aeronaves"
                    component={ListaAero}
                    options={{ headerShown: false }}
                />

                <AppStack.Screen
                    name="Cadastro Mecânico"
                    component={CadMecanico}
                    options={{ headerShown: true }}
                />

                <AppStack.Screen
                    name="Cadastro Aeronaves"
                    component={CadAero}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ComponentsTemplate"
                    component={ComponentsTemplate}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="InfoAeronaves"
                    component={InfoAeronaves}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="LoginRegisScreen"
                    component={LoginRegisScreen}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="PlaneInfoScreen"
                    component={PlaneInfoScreen}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    options={{ headerShown: false }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
