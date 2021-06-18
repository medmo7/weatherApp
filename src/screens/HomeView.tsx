import { FlatList, StyleSheet, Text, View } from 'react-native'
import SmallWeatherCard from '../components/SmallWeatherCard'

function HomeView() {


    const renderCity = () => {
        return (
            <SmallWeatherCard />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1]}
                renderItem={renderCity} />
        </View>
    )
}

export default HomeView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        paddingHorizontal: 5,
    }
})
