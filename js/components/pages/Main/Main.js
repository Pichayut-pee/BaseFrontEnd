/*
 * UploadCatalog
 *
 * This is the first page users see of the app. Use to upload catalog excel
 * Route: /uploadCatalog
 *
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import  { SearchAction as searchWeather } from '../../../actions/SearchAction'


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            displayTable: false
        };

        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
        this.handleInputSearch = this.handleInputSearch.bind(this);
    }

    componentDidUpdate(prevProps) {


        if(prevProps !== this.props ){
            console.log('componentDidUpdate');

            this.setState({
                displayTable: true
            })
        }
    }


    render() {

        const {main, name} = this.props.weatherData;

        return(
            <div className="page-content">

                <input type="text" value={this.state.inputValue} onChange={evt => this.handleInputSearch(evt)}/>
                <input type="button" value="Search" onClick={this.handleSubmitSearch} />

                {this.state.displayTable &&
                <table>
                    <tbody>
                    <tr>
                        <td>NAME     : {name}</td>
                    </tr>
                    <tr>
                        <td>PRESSURE : {main.pressure}</td>
                    </tr>
                    <tr>
                        <td>TEMP     : {main.temp}</td>
                    </tr>
                    <tr>
                        <td>HUMIDITY : {main.humidity}</td>
                    </tr>
                    </tbody>
                </table>
                }
            </div>



        )
    }

    handleInputSearch(evt){
        this.setState({
            inputValue: evt.target.value
        });
    }

    handleSubmitSearch(){

      this.props.dispatchSearchWeather(this.state.inputValue);
    }
}

//Map global state to component prop
function mapStateToProp(payload) {
    return {
        weatherData: payload.weatherReducer.weatherData
    };
}

const mapDispatchToProps = dispatch => ({
    dispatchSearchWeather: (value) => dispatch(searchWeather(value)),
    dispatch
});



// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProp, mapDispatchToProps)(Main);
