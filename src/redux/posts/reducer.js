import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import postActions from './action'

const posts = createReducer([], {
  [postActions.getPostsSuccess]: (_, { payload }) => payload,
  [postActions.createPostSuccess]: (state, { payload }) => [...state, payload],
  [postActions.deletePostSuccess]: (state, _) => state,
  [postActions.updatePostSuccess]: (state, { payload }) => {
    const updated = state.filter(item => item.id === payload.id)
    const id = state.indexOf(updated)
    const newState = [...state]
    newState.splice(id, 1, payload)
    return newState
  }
})

export default posts