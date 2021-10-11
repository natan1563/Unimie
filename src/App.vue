<template>
  <div id="app" class="container">
    <header>
      <router-link to="/">
        <img id="logoUnimine" src="@/assets/logo.png" alt="Logo Unimine">
      </router-link>
    </header>

    <router-view class="content"/>

    <footer>
      <cookie-law theme="blood-orange" buttonText="Continuar e fechar">
        <div slot="message">
          A plataforma Unimine usa cookies para personalizar anúncios e melhorar a sua experiência no site.
          Ao continuar navegando, você concorda com a nossa <strong><router-link :to="{ name: 'PrivacyPolicy' }">Política de Privacidade</router-link></strong>.
        </div>
      </cookie-law>
      <p>Desenvolvido com todo amor e carinho por:</p>
      <p><span id="un1d3v">Un1d3v</span> - Nucleo de Desenvolvimento Unime (Lauro de Freitas)</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
import CookieLaw from 'vue-cookie-law'

export default {
  components: { CookieLaw },
  data() {
    return {
      url: 'https://api.ipify.org?format=json'
    }
  },
  mounted() {
    axios.get(this.url).then(response => {
      this.results = response.data;
    })
  }
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
  height: 100vh;
  text-align: center;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1 0 auto;
}

header {
  padding: 0px;
}

#logoUnimine {
  margin-top: 10px;
  max-height: 141px;
  max-width: 345px;
}

h4{
  text-align: left;
}

.title {
  font-weight: bold;
  font-size: 24px;
  color: #454347;
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

#un1d3v {
  font-weight: bold;
  color: #f26139;
}

a {
  text-decoration: none;
  color: #E76A68;
}

footer {
  flex-shrink: 0;
  padding: 20px;
  text-align: center;
}

footer cookie-law {
  text-align: justify;
}

@media (max-width: 576px) {
    #logoUnimine {
      width: 100%;
    }
  }
</style>
