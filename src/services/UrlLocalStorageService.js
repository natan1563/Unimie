export default class UrlLocalStorageService {
  async getAll() {
    const links = await JSON.parse(localStorage.getItem('links'))

    return (links) ? links : []
  }

  async getPaginate(amount) {
    const links = await this.getAll()
    return (links.length) ? links.slice(0, amount) : [];
  }

  save(data) {
    data.reverse()
    console.log(data)
    localStorage.setItem('links', JSON.stringify(data))
  }

  async removeItem(item) {
    return this.getAll().then(data => {
      const index = data.indexOf(data.find(link => link.hash === item.hash))
      data.splice(index, 1)
      this.save(data)
    })
  }
}