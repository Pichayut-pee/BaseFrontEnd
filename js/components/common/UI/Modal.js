import React from 'react';
import Modal from '@material-ui/core/Modal';


const Modal = (props) => {

    const {alertLevel} =  props;
    const {Message} =  props;


    return(

          <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
              >

    )

}

export default BaseField