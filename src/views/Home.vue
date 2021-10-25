<template>
  <div>
    <p id="messageInsert">Insira sua Url que a encurtaremos <span>para você :)</span></p>
    <div class="shortlink">
      <input id="convertLink" type="text" v-on:keyup.enter="createNewLink()" v-model="bigUrl" placeholder="http://seu-link-enorme.com.br" />
      <button id="shortner" type="button" @click="createNewLink()"><i class="fas fa-cog"></i> <span>Encurtar</span></button>
    </div>

    <AlertCard 
      v-if="!hasError && newLink.hasOwnProperty('hash')"
      :hash="newLink.hash"
      :urlFixa="urlFixa"
      :whatsapp="whatsapp"
      :twitter="twitter"
      :facebook="facebook"
      :telegram="telegram"
    />

    <AlertCardFail
      v-if="hasError"
    />
    
    <div class="cards" v-if="showing.length > 0">
      <h4 class="title">Últimas URLs encurtadas por vocês</h4>
      <Card
        v-for="item of showing"
        :key="item.id"
        :created_at="item.created_at"
        :urlFixa="urlFixa"
        :linkItem="item"
        v-on:deleted="mountList"
      />
      
      <button v-if="verifyLoadingMore" id="loadMore" class="btn btn-load" @click="loadMore">
        <i class="fas fa-plus"></i>Carregar Mais
      </button>

    </div>
  </div>
</template>

<script>
import UrlApiService from '@/services/UrlApiService'
import UrlLocalStorageService from '@/services/UrlLocalStorageService'
import AlertCard from '@/components/AlertCard.vue'
import AlertCardFail from '@/components/AlertCardFail.vue'
import Card from '@/components/Card'

export default {
  name: 'Home',
  components: {
    AlertCard,
    Card,
    AlertCardFail
  },
  data() {
    return {
      urlFixa: process.env.VUE_APP_BASE_URL,
      whatsapp: 'whatsapp://send?text=',
      twitter: 'https://twitter.com/intent/tweet?text=',
      facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
      telegram: 'https://t.me/share/url?url=',
      bigUrl: '',
      newLink: {},
      hasError: false,
      urlApiService: new UrlApiService(),
      urlLocalStorageService: new UrlLocalStorageService(),
      links: [],
      showing: []
    }
  },
  mounted() {
    this.mountList()
  },

  computed: {
    verifyLoadingMore() {
      return !(this.showing.length === this.links.length);
    }
  },
  methods: {
    mountList() {
      this.urlLocalStorageService.getPaginate(5).then(data => this.showing = data) 
      this.urlLocalStorageService.getAll().then(data => this.links = data) 
    },

    async createNewLink() {
      if(this.bigUrl.indexOf('http') === -1) {
        this.bigUrl = 'http://' + this.bigUrl;
      }
      

      this.urlApiService.post({
        'link': this.bigUrl
      }).then(response => {
        this.newLink = response.data.data
        this.bigUrl = ''

        /**
         * Insere o novo link no Array e salva no Localstorage
         * Caso o hash já exista, ignora...
         */
        const hashAlreadyExists = this.links.find(link => link.hash === this.newLink.hash)

        if (!hashAlreadyExists) {
          this.links.push(this.newLink)
          this.urlLocalStorageService.save(this.links)
          this.urlLocalStorageService.getPaginate(5).then(data => this.showing = data) 
          this.urlLocalStorageService.getAll().then(data => this.links = data) 
        }

        this.hasError = false
      }).catch(() => {
        this.hasError = true
      })
    },

    loadMore() {
      this.urlLocalStorageService.getPaginate(this.showing.length + 5).then(data => this.showing = data) 
    }
  }
}
</script>

<style lang="scss" scoped>

.title {
  margin-top: 60px;
  margin-bottom: -19px;
}

.shortlink {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: auto;
}

.shortlink, 
#convertLink {
  padding: 15px 0;
}

#convertLink {
  width: 1%;
  min-width: 0;
  flex: 1 1 auto;
  border-radius: 10px 0 0 10px;
  border: 3px solid #F6A6A7;
  border-right: none;
  height: 50px;
  font-size: 30px;
  padding: 16px 23px;
}

#shortner {
  padding: 5px;
  border-radius: 0 10px 10px 0;
  background-color: #E60004;
  border: 3px solid #E60004;
  color: #ffffff;
  font-size: 24px;
  height: 50px;
  cursor: pointer;
}

#messageInsert {
  margin-top: 32px;
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
}

#loadMore {
  margin-top: 40px;
  margin-bottom: 40px;
}

.btn {
  font-size: 22px;
  color: #FFF;
  display: inline-block;
  padding: 10px 13px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 8px;
}

.btn-load {
  background-color: #E60004;
  border-color: #E60004;
  margin-top: 20px;
}

.fa-plus {
  margin-right: 13px;
  width: 16px;
  height: 16px;
}

@media (max-width: 768px) {
  .shortlink {
    display: block;
  }
  
  #convertLink {
    width: 100%;
    border: 3px solid #F6A6A7;
    border-radius: 10px;
    font-size: 18px;
  }

  #shortner {
    border-radius: 10px;
    margin-top: 20px;
    height: 50px;
    left: 0;
  }
}

@media (max-width: 576px) {
    #messageInsert span {
      white-space: pre;
    }
  }
</style>
