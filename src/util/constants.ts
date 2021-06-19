module.exports = {
    getWeatherIcons(code: string) {
        switch (code) {
            case '01d':
                return require("../assets/images/01d.png")
            case '02d':
                return require("../assets/images/02d.png")
            case '03d':
                return require("../assets/images/03d.png")
            case '04d':
                return require("../assets/images/04d.png")
            case '09d':
                return require("../assets/images/09d.png")
            case '10d':
                return require("../assets/images/10d.png")
            case '11d':
                return require("../assets/images/11d.png")
            case '13d':
                return require("../assets/images/13d.png")
            case '50d':
                return require("../assets/images/50d.png")
            case '01n':
                return require("../assets/images/01n.png")
            case '02n':
                return require("../assets/images/02n.png")
            case '03n':
                return require("../assets/images/03n.png")
            case '04n':
                return require("../assets/images/04n.png")
            case '09n':
                return require("../assets/images/09n.png")
            case '10n':
                return require("../assets/images/10n.png")
            case '11n':
                return require("../assets/images/11n.png")
            case '13n':
                return require("../assets/images/13n.png")
            case '50n':
                return require("../assets/images/50n.png")
            default:
                break;
        }
    }
}








