import React, {useEffect} from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar } from 'react-native';

import assetsManager from '../assets/assetsManager';

import SmallWeatherCard from '../components/SmallWeatherCard'

function HomeView(props) {

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

    const loadCityView = () =>{
        props.navigation.push('CityView')
    }

    const renderCity = () => {
        return (
                <SmallWeatherCard handleCityView={loadCityView}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1]}
                renderItem={renderCity} />
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
