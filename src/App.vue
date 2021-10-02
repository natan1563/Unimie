<template>
  <div id="app" class="container">
    <header>
      <img id="logoUnimine" src="@/assets/logo.png" alt="Logo Unimine">
      <p id="messageInsert">Insira sua Url que a encurtaremos para você :)</p>
    </header>
    <div class="shortlink">
      <input id="convertLink" type="text" placeholder="http://seu-link-enorme.com.br" />
      <button id="shortner" type="button"><i class="fas fa-cog"></i> <span>Encurtar</span></button>
    </div>
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
    <router-view/>
    </div>
    <footer>
      <p>Desenvolvido com todo amor e carinho por:</p>
      <p><span id="un1d3v">Un1d3v</span> - Nucleo de Desenvolvimento Unime (Lauro de Freitas)</p>
    </footer>
  </div>
</template>

<script>
import UrlService from '@/features/url/UrlService';
import Card from '@/components/Card';

export default {
  components: {
    Card,
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

<style>

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

p {
  color: #454347;
}

body {
  background-color: #ECECEC;
}

.container {
  width: 100%;
  max-width: 828px;
  text-align: center;
  margin: 0 auto;
  padding: 0 30px;
}

header {
  padding: 0px;
}

#logoUnimine {
  max-height: 141px;
}

#messageInsert {
  margin-top: 32px;
}

h4{
  text-align: left;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

header {
  padding: 0px;
}

#logoUnimine {
  max-height: 141px;
}

#messageInsert {
  margin-top: 32px;
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

#un1d3v {
    font-weight: bold;
    color: #f26139;
}

footer {
  margin-bottom: 20px;
}
</style>
