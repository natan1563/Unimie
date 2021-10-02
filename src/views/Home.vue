<template>
  <div>
    <div class="shortlink">
      <input id="convertLink" type="text" placeholder="http://seu-link-enorme.com.br" />
      <button id="shortner" type="button"><i class="fas fa-cog"></i> <span>Encurtar</span></button>
    </div>

    <AlertCard />

    <div class="cards">
      <h4 class="title">Últimas URLs encurtadas por vocês</h4>
      <Card
        v-for="item of resource"
        :key="item.id"
        :created_at="item.created_at"
        urlFixa="https://unimine.com.br/"
        :hash="item.hash"
        :link="item.link"
      />
      
      <button id="loadMore" class="btn btn-load">
        <i class="fas fa-plus"></i>Carregar Mais
      </button>

    </div>
  </div>
</template>

<script>
import UrlService from '@/features/url/UrlService';

import AlertCard from '@/components/AlertCard.vue';
import Card from '@/components/Card'

export default {
  name: 'Home',
  components: {
    AlertCard,
    Card
  },
  data() {
    return {
      urlFixa: 'https://unimine.com.br/',
      urlServices: new UrlService(),
      resource: [],
    }
  },
  created() {
    this.urlServices.get().then((response) => {
      this.resource = response;
      console.log(this.resource);
    });
  },
}
</script>

<style lang="scss" scoped>

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

</style>
