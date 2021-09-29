import axios from 'axios';

export default class UrlService {
  get() {
    return axios.get('url').then(this.responseGet);
  }

  responseGet(response) {
    return response.data.data;
  }
}