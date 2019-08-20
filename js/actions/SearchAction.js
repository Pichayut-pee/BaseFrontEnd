
import searchRepository from './repository/SearchRepository';
import {WEATHER_FETCH_SUCCESS } from  '../constants/Constants'


export function SearchAction( searchValue) {

    console.log('Action',searchValue );

    return (dispatch) => {

        searchRepository.search( searchValue, (success, newState) => {
            if (success) {
                dispatch({ type: WEATHER_FETCH_SUCCESS
                         , newState });
            } else {

            }
        });

    }
}



