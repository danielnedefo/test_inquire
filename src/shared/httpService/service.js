import axios from 'axios'

axios.defaults.baseURL = "https://bloggy-api.herokuapp.com"

const post = async (endpoint, info) => {
  try {
    const data = await axios.post(endpoint, info)
    return data
  } catch (error) {
    throw error
  }
}
const get = async (endpoint, info) => {
  try {
    const data = await axios.get(endpoint, info)
    return data
  } catch (error) {
    throw error
  }
}
const put = async (endpoint, info) => {
  try {
    const data = await axios.put(endpoint, info)
    return data
  } catch (error) {
    throw error
  }
}
const deletePost = async (endpoint, info) => {
  try {
    const data = await axios.delete(endpoint, info)
    return data
  } catch (error) {
    throw error
  }
}
export default {
  post,
  get,
  put,
  deletePost
}