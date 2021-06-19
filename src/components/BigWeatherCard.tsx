import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import assetsManager from '../assets/assetsManager';

import { Icon } from 'react-native-elements'

const WIDTH = Dimensions.get('window').width
const ICON_SIZE = Math.floor(WIDTH * 0.2)

export default function BigWeatherCard(props) {


    return (
        <View 
            style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>Agadir</Text>
                <Text style={styles.weatherInfos}>Clear Sky</Text>
                <Text style={styles.weatherInfos}>Humidity: 70</Text>
                <Text style={styles.weatherInfos}>Wind Speed: 5.52</Text>
                <Text style={styles.weatherInfos}>Max. Temp: 38° c</Text>
                <Text style={styles.weatherInfos}>Min. Temp: 27° c</Text>
            </View>
            <View style={styles.temp}>
                <Text style={styles.tempInNum}>25° c</Text>
                <Icon name="wb-sunny" size={ICON_SIZE}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        paddingBottom:20,
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
})
