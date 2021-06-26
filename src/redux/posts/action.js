import {createAction} from '@reduxjs/toolkit'

const createPostRequest = createAction('post/createPostRequest')
const createPostSuccess = createAction('post/createPostSuccess')
const createPostError = createAction('post/createPostError')


const getPostsRequest = createAction('post/getPostsRequest')
const getPostsSuccess = createAction('post/getPostsSuccess')
const getPostsError = createAction('post/getPostsError')

const updatePostRequest = createAction('post/updatePostRequest')
const updatePostSuccess = createAction('post/updatePostSuccess')
const updatePostError = createAction('post/updatePostError')

const deletePostRequest = createAction('post/deletePostRequest')
const deletePostSuccess = createAction('post/deletePostSuccess')
const deletePostError = createAction('post/deletePostError')

export default {
  createPostRequest,
  createPostSuccess,
  createPostError,
  getPostsRequest,
  getPostsSuccess,
  getPostsError,
  updatePostRequest,
  updatePostSuccess,
  updatePostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError
}

