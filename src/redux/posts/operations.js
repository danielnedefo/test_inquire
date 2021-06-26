import HttpService from '../../shared/httpService/service'
import endpoints from '../../shared/httpService/endpoints'
import postActions from './action'
const getPosts = () => async dispatch => {
  dispatch(postActions.getPostsRequest())
  try {
    const { data } = await HttpService.get(endpoints.getPosts)
    dispatch(postActions.getPostsSuccess(data))
  } catch (error) {
    dispatch(postActions.getPostsError(error))
  }
}
const createPost = info => async dispatch => {
    dispatch(postActions.createPostRequest())
  try {
    const { data } = await HttpService.post(endpoints.createPost, info)
    dispatch(postActions.createPostSuccess(data))
  } catch (error) {
    dispatch(postActions.createPostError(error))
  }
}
const deletePost = info => async dispatch => {
  dispatch(postActions.deletePostRequest())
  try {
    const { data } = await HttpService.deletePost(endpoints.deletePost(info))
    dispatch(postActions.deletePostSuccess(data))
  } catch (error) {
    dispatch(postActions.deletePostError(error))
  }
}
const updatePost = info => async dispatch => {
  dispatch(postActions.updatePostRequest())
  try {
    const { data } = await HttpService.put(endpoints.updatePost(info))
    dispatch(postActions.updatePostSuccess(data))
  } catch (error) {
    dispatch(postActions.updatePostError(error))
  }
}
export default {
  getPosts,
  deletePost,
  createPost,
  updatePost
}