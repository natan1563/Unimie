<template>
  <div>
    <div class="shortlink">
      <input id="convertLink" type="text" v-model="newLink.link" placeholder="http://seu-link-enorme.com.br" />
      <button id="shortner" type="button" @click="createNewLink()"><i class="fas fa-cog"></i> <span>Encurtar</span></button>
    </div>

    <AlertCard 
      v-if="ok"
      :hash="lastHash"
      :urlFixa="urlFixa"
      :whatsapp="whatsapp"
      :twitter="twitter"
      :facebook="facebook"
      :telegram="telegram"
    />

    <AlertCardFail
      v-if="fail"
    />
    
    <div class="cards" v-if="links.length > 0">
      <h4 class="title">Últimas URLs encurtadas por vocês</h4>
      <Card
        v-for="item of links"
        :key="item.id"
        :created_at="item.created_at"
        :urlFixa="urlFixa"
        :hash="item.hash"
        :link="item.link"
        :links="links"
      />
      
      <button v-if="verifyLoadingMore" id="loadMore" class="btn btn-load" @click="carregarMais">
        <i class="fas fa-plus"></i>Carregar Mais
      </button>

    </div>
  </div>
</template>

<script>
import UrlService from '@/features/url/UrlService';
import AlertCard from '@/components/AlertCard.vue';
import AlertCardFail from '@/components/AlertCardFail.vue';
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
      urlFixa: 'https://unimine.com.br/',
      whatsapp: 'whatsapp://send?text=',
      twitter: 'https://twitter.com/intent/tweet?text=',
      facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
      telegram: 'https://t.me/share/url?url=',
      lastHash: '',
      urlServices: new UrlService(),
      links: [],
      testLink: [],
      newLink: {
        link: "",
        hash: "",
        created_at: ""
      },
      error: '',
      ok: false,
      fail: false
    }
  },
   mounted() {
    this.links = this.urlServices.getLinks();
  },

  computed: {
    verifyLoadingMore() {
      return !(this.links.length == JSON.parse(localStorage.getItem('links')).length);
    }
  },
  methods: {
    async createNewLink() {
      if (!this.newLink) {
        return;
      }

      try {
        let promise = null;
        promise = this.urlServices.postApi(this.newLink);
        promise = await promise.then(response => response);
        if(!promise)
            throw new Error("Opa, estamos fora do ar, volte mais tarde :)");

        if(promise.status !== 201) {
          this.fail = true;
          this.ok = false;

          throw new Error(promise.data.message);
        }
        
        this.newLink.hash = promise.data.data;
        this.newLink.created_at = promise.data.created_at;
        this.lastHash = this.newLink.hash;
        this.ok = true;
        this.fail = false;
        this.urlServices.deleteLinkDuplicated(this.links, this.newLink);
        this.urlServices.post(this.newLink, this.links);
        this.$toasted.success(promise.data.message);
        
      } catch (e) {
        this.$toasted.error(e);
      }

      this.newLink = {
        link: '',
        hash: ''
      }
    },

    carregarMais() {
      const newLinks = (this.links.length + 5);
      this.links = this.urlServices.getLinks(newLinks);
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
  height: 66px;
  font-size: 24px;
  padding: 16px 23px;
}

#shortner {
  padding: 15px;
  border-radius: 0 10px 10px 0;
  background-color: #E60004;
  border: 3px solid #E60004;
  color: #ffffff;
  font-size: 24px;
  height: 66px;
  cursor: pointer;
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
  }

  #shortner {
    border-radius: 10px;
    margin-top: 20px;
    left: 0;
  }
}
</style>
