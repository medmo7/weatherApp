import {SET_USER_LOCATION} from './actionsTypes'

export const setUserLocation = (location: { latitude: number, longitude: number }) => dispatch => {
    dispatch({
        type: SET_USER_LOCATION,
        payload: location,
    });
}