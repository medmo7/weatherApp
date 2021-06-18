import { StyleSheet, Text, View } from 'react-native';

import assetsManager from '../assets/assetsManager'

export default function SmallWeatherCard() {
    return (
        <View style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>Agadir</Text>
                <Text style={styles.cityWeather}>Sunny</Text>
            </View>
            <View style={styles.temp}>
                <Text style={styles.tempInNum}>25 c</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: assetsManager.COLORS.WHITE
    },
    city: {
        justifyContent: "space-between",
        alignItems: 'flex-start'
    },
    temp: {
        justifyContent: "center",
        alignItems: 'flex-end'
    },
    cityName: {},
    cityWeather: {},
    tempInNum: {},
})
