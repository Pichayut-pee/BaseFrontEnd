import React  from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';



const BaseButton = (props) => {


    const {label, onClickHandleParent} = props;

    return(
        <Button variant="contained"  onClick={() => onClickHandleParent('From BaseButton Class')}>
            {label}
        </Button>
    )



}

BaseButton.propTypes = {
    onClickHandleParent: PropTypes.func.isRequired,
};

export default BaseButton