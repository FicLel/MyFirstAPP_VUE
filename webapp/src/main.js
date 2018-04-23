import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import home from './home.vue'
import contacto from './Contacto.vue'
import restauranteTop from './RestauranteTop.vue'
import restauranteList from './RestaurantesList.vue'

Vue.use(VueRouter);

const routes = [
	{path: '/contacto', component: contacto},
	{path: '/restauranteDestacado/:id', name: 'restauranteDestacado', component: restauranteTop},
	{path: '/restauranteList', component: restauranteList},
	{path: '/home', component: home},
	{path: '/', component: home}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

Vue.component('home', home);
Vue.component('contacto', contacto);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
