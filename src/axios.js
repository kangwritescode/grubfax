import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://developers.zomato.com/api/',
  timeout: 10000,
  headers: {
    'user-key': '9e358651448ff0859f5c04c62770b1d2',
    Accept: 'application/json'
  }
})

export default instance
