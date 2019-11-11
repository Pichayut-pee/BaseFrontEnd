/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import { WEATHER_FETCH_SUCCESS, WEATHER_FETCH_FAIL } from '../constants/Constants';
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');

const initialState = {
    weatherData: {

    },
};

// Takes care of changing the application state
export function weatherReducer(state = initialState, action) {


    switch (action.type) {
        case WEATHER_FETCH_SUCCESS:
            console.log('Reducer', action.newState.data);
            return assign({}, state, {
                weatherData: action.newState.data
            });
        case WEATHER_FETCH_FAIL:
                    console.log('Reducer', action.newState.data);
                    return assign({}, state, {
                        weatherData: action.newState.data
                    });
            break;
        default:
            return state;
    }
}