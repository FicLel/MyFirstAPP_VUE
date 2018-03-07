<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{msg}}</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Home</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Restaurantes</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Contacto</a></li>
      <li><a href="www.ministrarweb.com" target="_blank">Restaurante destacado</a></li>
    </ul>
    <!-- Cargando componente --> 
    <home></home>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Soy Fic App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
