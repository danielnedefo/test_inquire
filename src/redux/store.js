import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import posts from './posts/reducer'
import comments from './comments/reducer'
const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer: {
    posts,
    comments
    },
  middleware
})

export default store