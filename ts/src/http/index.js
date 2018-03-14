import axios from 'axios'
import { config as httpConfig } from './../config'
const instance = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity'
})
instance.interceptors.request.use(config => {
  config.params = Object.assign({}, config.params, { api_key: httpConfig.apiKey })
  return config
})
export const http = instance
