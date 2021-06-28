import { useEffect, useState,useMemo } from "react";
import React from 'react'
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import postOperations from '../../redux/posts/operations'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { shallowEqual, useSelector } from 'react-redux'
import postSelector from '../../redux/posts/selector'
import PostpageList from './PostPageList/PostPageList'
import AddPost from './ModalForAdd/AddUpadtePost'
import useForm from '../../shared/useForm/useForm'
import initialState from './initialState/initialState'
const PostPage = () => {
 const [data,setdata,handleChange] = useForm(initialState)
 const [loading,setloading] = useState(false)
 const [showModal,setModal] = useState(false)
 const [upload,setupload] = useState(true)
 const dispatch = useDispatch()
 const postsFromSelector = useSelector(postSelector,shallowEqual)
 useEffect(() => {
   if(upload){
     dispatch(postOperations.getPosts())
     setupload(false)
     setloading(true)
   }
}, [postsFromSelector])
console.log(postsFromSelector)
const deletePost = (idx) =>{
  dispatch(postOperations.deletePost(idx))
  setupload(true)
}
const toggleModal = () =>{
  setModal(!showModal)
}
const addPostSubmit = () =>{
  dispatch(postOperations.createPost(data))
  toggleModal()
  setdata(initialState)
}
const updatePost = () =>{
  setModal(!showModal)
}

return (
  <React.Fragment>
  {postsFromSelector.length > 0 && loading ? <React.Fragment><h1>Posts</h1> 
    <TableContainer component={Paper} styles={{width:"100%"}}>
      <Table aria-label="collapsible table" >
        <TableHead >
          <TableRow>
            <TableCell ></TableCell>
            <TableCell align="center">Post Id</TableCell>
            <TableCell>Tittle</TableCell>
            <TableCell align="right">Update/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <PostpageList updatePost={updatePost} deletePost={deletePost} posts={postsFromSelector}/>
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick={() =>toggleModal()} variant="contained" color="primary">
        Create a new Post
      </Button>
    </React.Fragment>: <p>Loading...</p>}
    {showModal && <AddPost addPostSubmit={addPostSubmit}  handleChange={handleChange} data={data} open={showModal} handleClose={toggleModal}/>}
    </React.Fragment>
);
}
 
export default PostPage;