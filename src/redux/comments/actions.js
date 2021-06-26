import {createAction} from '@reduxjs/toolkit'

const getCommentsRequest = createAction('comment/getCommentsRequest')
const getCommentsSuccess = createAction('comment/getCommentsSuccess')
const getCommentsError = createAction('comment/getCommentsError')

const createCommentRequest = createAction('comment/createCommentRequest')
const createCommentSuccess = createAction('comment/createCommentSuccess')
const createCommentError = createAction('comment/createCommentError')

export default {
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,
  createCommentRequest,
  createCommentSuccess,
  createCommentError
}