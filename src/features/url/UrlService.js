import axios from "axios";
import Toasted from 'vue-toasted';
import Vue from 'vue'

Vue.use(Toasted, {
  duration: 5000
})

export default class UrlService {

  get(links) {
    if(JSON.parse(localStorage.getItem('links'))) {
      JSON.parse(localStorage.getItem('links')).slice(0).reverse().forEach(link => {
        links.push(link)
      })
    }
  }
  
  getLinks(limit = 5) {
    const links = JSON.parse(localStorage.getItem('links'));
    return (links.length) ? links.slice(0, limit) : [];
  }
  
  post(data, links) {
    links.unshift(data);
    localStorage.setItem('links', JSON.stringify(links));
  }

  postApi(link) {
    return axios.post('url', link)
      .then(response => response)
      .catch((error) => error.response);
  }

  deleteLinkDuplicated(links, link) {
    links.forEach((element, key) => {
      if(element.link === link.link) {
        this.changePositionArray(links, key, 0);
        throw new Error("URL já encurtada anteriormente");
      }
    });

    return links;
  }

  changePositionArray(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
    return array;
  }

  deleteLink(links, link) {
    links.forEach((element, index) => {
      if(element.link === link) {
        links.splice(index, 1);
        localStorage.setItem('links', JSON.stringify(links));
        Vue.toasted.success(`Link ${element.link} deletado.`);
      }
    })
  }

  // getIp(url) {
  //   axios.get(url).then(response => {
  //     return this.results = response.data
  //   })
  // }
}