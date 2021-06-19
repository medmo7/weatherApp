import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

import MapView, { Marker } from 'react-native-maps';

import { CityWeather } from '../util/types';

import BigWeatherCard from '../components/BigWeatherCard';

function CityView(props) {

    const data: CityWeather = props.route.params.data

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={{
                latitude: data.coord.lat,
                longitude: data.coord.lon,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,

            }}>
                <Marker
                    key={data.dt}
                    coordinate={{
                        latitude: data.coord.lat,
                        longitude: data.coord.lon
                    }}
                    title={data.name}
                    description={data.weather[0].description}
                />

            </MapView>
            <View style={styles.card}>
                <BigWeatherCard data={data} />
            </View>
        </View>
    )
}

export default CityView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    map: {
        flex: 0.65,
    },
    card: {
        flex: 0.35
    },
})
