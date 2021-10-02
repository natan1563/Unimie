<template>
  <div id="app" class="container">
    <header>
      <img id="logoUnimine" src="@/assets/logo.png" alt="Logo Unimine">
      <p id="messageInsert">Insira sua Url que a encurtaremos para você :)</p>
    </header>

    <router-view/>

    <footer>
      <p>Desenvolvido com todo amor e carinho por:</p>
      <p><span id="un1d3v">Un1d3v</span> - Nucleo de Desenvolvimento Unime (Lauro de Freitas)</p>
    </footer>
  </div>
</template>

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

footer {
  margin-bottom: 20px;
}
</style>
