import { config } from './../config'

async function get(url, params) {
  return this.request(url + parseUrlParams(params))
}

async function request(url) {
  const response = await fetch(`${this.baseUrl}${url}&api_key=${this.apiKey}`)
  return response.json()
}

export function parseUrlParams(params) {
  return (
    '?' +
    Object.entries(params).reduce(
      (previous, current) => `${previous}${previous ? '&' : ''}${current[0]}=${current[1]}`,
      ''
    )
  )
}

export default {
  baseUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity',
  apiKey: config.apiKey,
  get,
  request
}
