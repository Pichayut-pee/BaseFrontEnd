
import searchRepository from './repository/SearchRepository';
import pollingRepository from './repository/PollingRepository';
import {WEATHER_FETCH_SUCCESS } from  '../constants/Constants'


export function SearchAction( searchValue) {

    console.log('Action',searchValue );

    return (dispatch) => {

            pollingRepository.poll(  (success, newState) => {
                console.log(newState.data)
            });

//        searchRepository.search( searchValue, (success, newState) => {
//            if (success) {
//                dispatch({ type: WEATHER_FETCH_SUCCESS
//                         , newState });
//            } else {
//
//            }
//        });

    }
}



