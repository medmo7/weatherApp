import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from '../screens/HomeView';
import CityView from '../screens/CityView';
import assetsManager from '../assets/assetsManager';


const Stack = createStackNavigator();
function AppNavigator(props) {

    const navigationRef = React.useRef();
    return (
        <NavigationContainer
            ref={navigationRef}>

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
const homeStack = createStackNavigator(
    {
        HomeView: {
            screen: HomeView,
        },
        CityView: {
            screen: CityView,
        },
    },

    {
        initialRouteName: 'HomeView',
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#00804A',
            },
            headerTitle: 'WeatherApp',
        },
    },
);


;

export default AppNavigator;