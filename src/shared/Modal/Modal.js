import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }));
const Modalka = ({children,open,handleClose}) => {
    const classes = useStyles();
 return(
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
  >
    {children}
  </Modal>
 )
}
export default Modalka 