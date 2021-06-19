import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import assetsManager from '../assets/assetsManager';
import { CityWeather } from '../util/types';

const HEIGHT = Dimensions.get('window').height

type Props = {
    data :CityWeather,
    handleCityView:(data:CityWeather) => void
}

export default function SmallWeatherCard(props:Props) {


    const loadCityView = () => {
        props.handleCityView(props.data)
    }

const temp = props.data.main.temp + '\xB0C';
const description = props.data.weather[0].description
const name = props.data.name
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={loadCityView}>
            <View style={styles.city}>
                <Text style={styles.cityName}>{name}</Text>
                <Text style={styles.cityWeather}>{description}</Text>
            </View>
            <View style={styles.temp}>
                <Text style={styles.tempInNum}>{temp}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: HEIGHT * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: assetsManager.COLORS.WHITE,
        borderBottomWidth: 0.3,
        borderBottomColor: '#dddddd',

    },
    city: {
        flex: 0.5,
        justifyContent: "space-between",
        alignItems: 'flex-start',
    },
    temp: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: 'flex-end'
    },
    cityName: {
        fontFamily: assetsManager.FONTS.semiBold,
        fontSize: assetsManager.FONTS_SIZE.FONT_SIZE_H2
    },
    cityWeather: {
        fontFamily: assetsManager.FONTS.regular,
        fontSize: assetsManager.FONTS_SIZE.FONT_SIZE_H3
    },
    tempInNum: {
        fontFamily: assetsManager.FONTS.regular,
        fontSize: assetsManager.FONTS_SIZE.FONT_SIZE_H1_MAX
    },
})
