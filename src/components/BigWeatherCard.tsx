import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

import { Icon } from 'react-native-elements'

import assetsManager from '../assets/assetsManager';
import constants from '../util/constants';
import { CityWeather } from '../util/types';


const WIDTH = Dimensions.get('window').width
const ICON_SIZE = Math.floor(WIDTH * 0.3)

type Props = {
    data: CityWeather,
}

export default function BigWeatherCard(props: Props) {

    const name = props.data.name
    const description = props.data.weather[0].description
    const temp = props.data.main.temp + '\xB0C';
    const tempMax = props.data.main.temp_max + '\xB0C';
    const tempMin = props.data.main.temp_min + '\xB0C';
    const humidity = props.data.main.humidity
    const windSpeed = props.data.wind.speed
    const weatherImage = constants.getWeatherIcons(props.data.weather[0].icon)
    return (
        <View
            style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>{name}</Text>
                <Text style={styles.weatherInfos}>{description}</Text>
                <Text style={styles.weatherInfos}>Humidity: {humidity}</Text>
                <Text style={styles.weatherInfos}>Wind Speed: {windSpeed}</Text>
                <Text style={styles.weatherInfos}>Max. Temp: {tempMax}</Text>
                <Text style={styles.weatherInfos}>Min. Temp: {tempMin}</Text>
            </View>
            <View style={styles.temp}>
                <Text style={styles.tempInNum}>{temp}</Text>
                {/* <Icon name="wb-sunny" size={ICON_SIZE} /> */}
                <Image source={weatherImage} resizeMode="contain" style={styles.weatherImage} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: assetsManager.COLORS.WHITE,

    },
    city: {
        flex: 0.5,
        justifyContent: "space-evenly",
        alignItems: 'flex-start',
    },
    temp: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: 'center'
    },
    cityName: {
        fontFamily: assetsManager.FONTS.bold,
        fontSize: assetsManager.FONTS_SIZE.FONT_SIZE_H1
    },
    weatherInfos: {
        fontFamily: assetsManager.FONTS.regular,
        fontSize: assetsManager.FONTS_SIZE.FONT_SIZE_H25
    },
    tempInNum: {
        fontFamily: assetsManager.FONTS.regular,
        fontSize: assetsManager.FONTS_SIZE.FONT_SIZE_H1_MAX
    },
    weatherImage: {
        width: ICON_SIZE,
        height: ICON_SIZE
    }
})
