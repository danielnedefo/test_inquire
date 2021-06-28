import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import commentsActions from './actions'
const comments = createReducer([],{
   [commentsActions.createCommentSuccess]:(_,{payload}) =>payload,
   [commentsActions.getCommentsSuccess]:(state,{payload}) =>[...state,...payload.comments]
})
const error = createReducer(null,{
    [commentsActions.createCommentError]:(_,__) =>true,
    [commentsActions.getCommentsError]:(_,__) =>true,
})

const rootReducer = combineReducers({
    comments,
    error
})
export default rootReducer