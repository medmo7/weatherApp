import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from '../screens/HomeView';
import CityView from '../screens/CityView';
import assetsManager from '../assets/assetsManager';


const Stack = createStackNavigator();
function AppNavigator(props) {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                title: 'WeatherApp', headerStyle: {
                    backgroundColor: assetsManager.COLORS.HEADER_GREEN,
                },
                headerTintColor: assetsManager.COLORS.WHITE,
            }}>

                <Stack.Screen name="HomeView" component={HomeView} />
                <Stack.Screen name="CityView" component={CityView} />

            </Stack.Navigator>

        </NavigationContainer>
    );
}


;

export default AppNavigator;