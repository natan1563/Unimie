import axios from "axios"

export default class UrlApiService {
  post(data) {
    return axios.post('url', data)
  }
}