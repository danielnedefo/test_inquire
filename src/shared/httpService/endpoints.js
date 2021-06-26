const createPost = "/posts"
const getPosts = "/posts"
const getComments = (num) => `/posts/${num}?_embed=comments`
const updatePost = (num) => `/posts/${num}`
const deletePost = (num) => `/posts/${num}`
const commentPost = '/comments'

export default {
  createPost,
  getPosts,
  getComments,
  updatePost,
  deletePost,
  commentPost
}
