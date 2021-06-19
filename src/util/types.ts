export type CityWeather = {
    name: string,
    coord: {
        lat: number,
        lon: number
    },
    main:
    {
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    }
    weather: [
        {
            description: string
            icon: string
            id: number
            main: string
        }
    ]
    wind: {
        deg: number,
        speed: number

    },
    dt:number


}