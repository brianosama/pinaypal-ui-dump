import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './indexscreen';
import LoginScreen from './loginscreen';
import { RegistrationNavigationFlowScreen } from './registration/registrationnavigationscreen';


const Stack = createNativeStackNavigator();

export const TopLevelNavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='IndexScreen' screenOptions={{ headerShown: false, animation: "none" }}>
                <Stack.Screen name="IndexScreen" component={IndexScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegistrationScreen" component={RegistrationNavigationFlowScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};