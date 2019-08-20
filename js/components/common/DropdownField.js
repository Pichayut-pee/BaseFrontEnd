import React from 'react';
import BaseField from "./BaseField";



class DropdownField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isError: false
        }

        this.handleChangeValidate = this.handleChangeValidate.bind(this);
    }

    handleChangeValidate(event) {
        const {defaultValue } = this.props;

        if(isNaN(event.target.value)){
            alert('Not a number');
            event.target.value =defaultValue;
            this.setState({
                isError: true
            });

            return;
        }

        this.setState({
            isError: false
        });

        const {handleChange} = this.props;
        handleChange(event);

    }

    render() {

        const {defaultValue } = this.props;
        const {label } = this.props;
        const {isError} = this.state;

        return (
            <BaseField isError={isError} id='1' label={label} defaultValue={defaultValue} handleChange={this.handleChangeValidate}></BaseField>
        );
    }

}
export default DropdownField