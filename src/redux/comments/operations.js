import HttpService from '../../shared/httpService/service'
import endpoints from '../../shared/httpService/endpoints'
import commentsActions from './actions'
const getCommentsFromOnePost = (num) => async dispatch => {
  dispatch(commentsActions.getCommentsRequest())
  try {
    const { data } = await HttpService.get(endpoints.getComments(num))
    dispatch(commentsActions.getCommentsSuccess(data))
  } catch (error) {
    dispatch(commentsActions.getCommentsError(error))
  }
}
const createComment = (info) => async dispatch => {
    dispatch(commentsActions.createCommentRequest())
    try {
      const { data } = await HttpService.post(endpoints.commentPost,info)
      dispatch(commentsActions.createCommentSuccess(data))
    } catch (error) {
      dispatch(commentsActions.createCommentError(error))
    }
  }
export default {
    getCommentsFromOnePost,
    createComment 
}