import axios from 'axios'
import { ZIPCODEAPI_API_KEY } from './keys/keys'

const instance = axios.create({
  baseURL: 'https://developers.zomato.com/api/',
  timeout: 10000,
  headers: {
    'user-key': ZIPCODEAPI_API_KEY,
    Accept: 'application/json'
  }
})

export default instance
