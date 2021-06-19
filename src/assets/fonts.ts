
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const FONTS_SIZE = {
    FONT_SIZE_H1_LARGE: width > 400 ? 70 : 60,
    FONT_SIZE_H1_MAX: width > 400 ? 40 : 30,
    FONT_SIZE_HOME_BUTTON: width > 400 ? 23 : 20,
    FONT_SIZE_H1: width > 400 ? 25 : 20,
    FONT_SIZE_H2: width > 400 ? 21 : 18,
    FONT_SIZE_H25: width > 400 ? 19 : 16,
    FONT_SIZE_H3: width > 400 ? 17 : 15,
    FONT_SIZE_H35: width > 400 ? 15 : 13,
    FONT_SIZE_H36: width > 400 ? 14 : 11,
    FONT_SIZE_H37: width > 400 ? 13 : 10,
    FONT_SIZE_H38: width > 400 ? 12 : 10,
    FONT_SIZE_H4: width > 400 ? 12 : 9,
    FONT_SIZE_H425: width > 400 ? 11.6 : 8.6,
    FONT_SIZE_H45: width > 400 ? 11 : 8,
    FONT_SIZE_H5: width > 400 ? 10 : 7,
}




export const FONTS = {

    bold: 'Roboto-Bold',
    semiBold: 'Roboto-Medium',
    regular: 'Roboto-Regular',

}

