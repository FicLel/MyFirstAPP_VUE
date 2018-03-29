import Vue from 'vue'
import App from './App.vue'
import home from './home.vue'
import contacto from './Contacto.vue'

Vue.component('home', home);
Vue.component('contacto', contacto);

new Vue({
  el: '#app',
  render: h => h(App)
})
