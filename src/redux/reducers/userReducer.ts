import { SET_USER_LOCATION } from '../actions/actionsTypes';


const initialState: { latitude: number, longitude: number } | null = null;

export default function (state = initialState, { type, payload }) {
    let newState;
    switch (type) {
        case SET_USER_LOCATION:
            newState = { ...payload };
            return newState || state;


        default:
            return state;
    }
}
