import {config} from '../../../config.js';
import axios from 'axios';


/**
 * Authentication lib
 * @type {Object}
 */

var pollingRepository = {


    /**
     * Upload catalog file
     * @param  {string}   fileName  : Upload filename
     * @param  {string}   fileSize  : Size of file in byte
     * @param  {object}   formData  : upload byte array
     * @param  {Function} callback Called after a user was logged in on the remote server
     */
    poll( callback) {
        // const url =`${config.apiUrl}/api/catalog/upload`;
        console.log('poll')

        const url =`http://localhost:8082/getProgress`;

        axios.get(url).then(function (response) {

            callback(true, response);
        }).catch(function (error) {
            callback(false, error);

        });
    }
}

export default pollingRepository;
