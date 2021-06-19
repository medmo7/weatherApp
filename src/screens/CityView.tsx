import React, {useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

import MapView from 'react-native-maps';

import BigWeatherCard from '../components/BigWeatherCard';

function CityView() {

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={region}>

            </MapView>
            <View style={styles.card}>
            <BigWeatherCard/>
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
