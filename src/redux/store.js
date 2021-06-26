import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import posts from './posts/reducer'
const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer: {
    posts
  },
  middleware
})

export default store