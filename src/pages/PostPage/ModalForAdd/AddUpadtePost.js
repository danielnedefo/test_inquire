import Modalka from '../../../shared/Modal/Modal'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const AddUpadtePost = ({open,handleClose,handleChange,data,addPostSubmit,updatePost}) =>{
    return(
        <Modalka open={open} handleClose={handleClose}>
      <form style={{width:'600px',backgroundColor:"white",height:'200px',alignItems:'center',display:'flex'}} noValidate autoComplete="off">
      <TextField onChange={handleChange} value={data.title} style={{marginLeft:'30px'}} id="outlined-basic" name="title" label="Title" variant="outlined" />
      <TextField  onChange={handleChange} value={data.body} id="outlined-basic" name="body" label="Body" variant="outlined" />
      <Button variant="contained" color="primary" onClick={addPostSubmit}>
        Add Post
      </Button>
      </form>
        </Modalka>
    )
}
export default AddUpadtePost