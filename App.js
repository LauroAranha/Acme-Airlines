import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginRegisScreen from './src/screens/LoginRegis/LoginRegisScreen';
import PlaneInfoScreen from './src/screens/PlaneInfo/PlaneInfoScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';

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
