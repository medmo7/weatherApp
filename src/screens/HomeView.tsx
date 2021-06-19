import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, StatusBar } from 'react-native';

import * as Location from 'expo-location';
import { connect } from 'react-redux'
import Config from "react-native-config";

import assetsManager from '../assets/assetsManager';
import { CityWeather } from '../util/types';
import SmallWeatherCard from '../components/SmallWeatherCard'
import { initPushNotification } from '../manager/notificationBuilder';
import { setUserLocation } from '../redux/actions/locationActions'

function HomeView(props) {

    const [weatherData, setWeatherData] = useState<CityWeather[] | null>(null)

    useEffect(() => {
        getUserLocation()
        fetchWeatherData()
        initPushNotification()
    }, [])

    const getUserLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log('status', status)
        if (status !== 'granted') {
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        props.setUserLocation(location.coords)
    }

    const fetchWeatherData = () => {
        // TODO: store data in redux and refetch only one time every 6h
        const query = `http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&units=metric&appid=${Config.OPEN_WEATHER_API}` // TODO: move to quey generator
        fetch(query)
            .then(response => response.json())
            .then(result => setWeatherData(result.list))
            .catch(error => console.log('error', error))
    }

    const loadCityView = (data: CityWeather) => {
        props.navigation.push('CityView', { data })
    }

    const renderCity = ({ item, index }) => {
        return (
            <SmallWeatherCard handleCityView={loadCityView} data={item} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={weatherData}
                renderItem={renderCity}
                keyExtractor={(item) => item.name} />
        </View>
    )
}

const mapStateToProps = state => {
    return {
        userLocation: state.userLocation
    };
};
export default connect(
    mapStateToProps,
    {
        setUserLocation
    },
)(HomeView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // flatContainer:{
    //     flex: 1
    // },
})
