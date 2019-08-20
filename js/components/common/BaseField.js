import React from 'react';
import TextField from '@material-ui/core/TextField';


const BaseField = (props) => {

    const {defaultValue} =  props;
    const {handleChange} =  props;
    const {label} =  props;
    const {id} =  props;
    const {isError} =  props;

    return(

        <div>
            <TextField
                error={isError?isError:false}
                id={id}
                label={label}
                defaultValue={defaultValue}
                onChange={handleChange}
                margin="normal"
                variant="outlined"

            />
        </div>

    )

}

export default BaseField