import {config} from '../../../config.js';
import axios from 'axios';


/**
 * Authentication lib
 * @type {Object}
 */

var searchRepository = {


    /**
     * Upload catalog file
     * @param  {string}   fileName  : Upload filename
     * @param  {string}   fileSize  : Size of file in byte
     * @param  {object}   formData  : upload byte array
     * @param  {Function} callback Called after a user was logged in on the remote server
     */
    search(searchValue, callback) {
        // const url =`${config.apiUrl}/api/catalog/upload`;
        console.log('searchValue',searchValue)

        const url =`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=4fad5f087e5a012829713341cf56ac2d`;

        axios.get(url).then(function (response) {

            callback(true, response);
        }).catch(function (error) {
            callback(false, error);

        });
    }
}

export default searchRepository;
