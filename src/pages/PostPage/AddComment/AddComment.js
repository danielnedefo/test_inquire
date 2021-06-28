import Modalka from '../../../shared/Modal/Modal'
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const AddComment = ({open,handleClose,hadleCommentChange,comment,makeComment}) => {
  return (
    <Modalka open = { open } handleClose = { handleClose }>
      <form style={{width:'600px',backgroundColor:"white",height:'200px',alignItems:'center',display:'flex'}} noValidate autoComplete="off">
      <TextField  style={{marginLeft:'110px'}} onChange={hadleCommentChange} value={comment.body} id="outlined-basic" name="body" label="Body" variant="outlined" />
        <Button
          onClick={makeComment}
          variant="contained" color="primary" >
        Add Comment
      </Button>
      </form>
      </Modalka>
   );
}
 
export default AddComment;