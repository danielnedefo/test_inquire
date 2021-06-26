import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import postOperations from '../../redux/posts/operations'
const PostPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(postOperations.getPosts())
  }, [])
  return ( <>
  </>
  );
}
 
export default PostPage;