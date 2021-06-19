import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import assetsManager from '../assets/assetsManager';


const HEIGHT = Dimensions.get('window').height

export default function SmallWeatherCard(props) {


    const loadCityView = () => {
        props.handleCityView()
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={loadCityView}>
            <View style={styles.city}>
                <Text style={styles.cityName}>Agadir</Text>
                <Text style={styles.cityWeather}>Sunny</Text>
            </View>
            <View style={styles.temp}>
                <Text style={styles.tempInNum}>25° c</Text>
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
        fontFamily: assetsManager.FONTS.regular,
        fontSize: assetsManager.FONTS_SIZE.FONT_SIZE_H2
    },
    cityWeather: {
        fontFamily: assetsManager.FONTS.regular,
        fontSize: assetsManager.FONTS_SIZE.FONT_SIZE_H3
    },
    tempInNum: {
        fontFamily: assetsManager.FONTS.semiBold,
        fontSize: assetsManager.FONTS_SIZE.FONT_SIZE_H1_MAX
    },
})
