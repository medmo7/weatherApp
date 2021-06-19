import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, StatusBar } from 'react-native';

import assetsManager from '../assets/assetsManager';
import { CityWeather } from '../util/types';
import SmallWeatherCard from '../components/SmallWeatherCard'


function HomeView(props) {

    const [weatherData, setWeatherData] = useState<CityWeather[]|null>(null)

    useEffect(() => {
        fetchWeatherData()

    }, [])

    const fetchWeatherData = () => {
        // TODO: store data in redux and refetch only one time every 6h
        const query = 'http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&units=metric&appid=fc2de7881cf571d45f100b1bedd2d6e9' // TODO: move to quey generator
        fetch(query)
            .then(response => response.json())
            .then(result => setWeatherData(result.list))
            .catch(error => console.log('error', error))
    }

    const loadCityView = (data:CityWeather) => {
        props.navigation.push('CityView', {data})
    }

    const renderCity = ({item, index}) => {
        return (
            <SmallWeatherCard handleCityView={loadCityView} data={item}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={weatherData}
                renderItem={renderCity}
                keyExtractor={(item)=> item.name} />
        </View>
    )
}

export default HomeView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // flatContainer:{
    //     flex: 1
    // },
})
