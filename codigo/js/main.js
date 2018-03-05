//Un componente es una parte de la web que puede ser reutilizado nuevamente al ser independiente
//Así se declara en vue Vue.componente('nombre', json);
//En otras palabras un componente es crear una etiqueda (Concepto muy básico)

Vue.component('peliculas', {
	template: ` <div class="componente-pelis">
					<h1> Componente {{titulo}}</h1>
					<h1>Listado por Ajax dentro de componente</h1>
					<ol v-if="posts">
						<li v-for="(post, index) in posts">
							{{post.title}}
						</li>
					</ol>
					<span v-else>CARGANDO</span>
				</div>
		 `,
	/* La diferencia con una instancia es que las propiedades se declaran como metodos y deben returnar valores  */
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((respuesta) => {
			this.posts = respuesta.data;
		});
	},
	data(){
		return {
			titulo: 'peliculas',
			posts: null,
		}
	}
	});


Vue.component('frutas', {
	props: ['objeto'],
	template: `
	 		<div>
	 			<h1>Componente frutas </h1> 
	 			<h4>{{objeto.nombre}}</h4>
	 		</div>
	 	`,
	mounted(){
		console.log(this.objeto)
	}
	});
Vue.component('padre', {
	template: `<div>
	<h1>Componente padre</h1>
	<div>
		<hijo></hijo>
	</div>
	</div>
	`,
	});

Vue.component('hijo', {
	template: `<p style="background: yellow;">
	Soy un parrafo en el componente hijo</p>`,
	});






//Este es un filtro global 
Vue.filter('Mayusculas', (value) => value.toUpperCase());
//Este es nuestra clase vue
new Vue({
	el: 'main', //el nos sirve para declarar la etiqueta, id o clase donde trabajaremos nuestros archivo
	mounted(){ //Este metodo es el que carga antes que toda las instancias, es lo primero en cargar
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((respuesta) => {
			this.posts = respuesta.data;
		});
	},
	data: { //data es donde mantenmos nuestros objetos
		texto: 'Hola mundo soy Fic',
		nombre: 'Victor',
		apellido: 'Leal',
		nota: 5,
		cosas: ['cosa 1', 'cosa 2', 'apellido'],
		frutas: [
			{nombre: 'Manzana', temporada: 'otoño', precio: 'bajo'},
			{nombre: 'pera', temporada: 'verano', precio: 'medio'},
			{nombre: 'cereza', temporada: 'primavera', precio: 'alto'}
		],
		superfruta: {nombre: 'Papaya', temporada: 'primavera', precio: 'alto'} ,
		cosaNueva: null,
		busqueda: 'null',
		confirmado: null,
		posts: null
	},
	methods:{
		crearCosa(){
			this.cosas.unshift(this.cosaNueva);
			this.cosaNueva = null;
		},
		borrarCosa(indice){
			//alert(JSON.stringify(this.frutas));
			this.cosas.splice(indice, 1);
		}, 
		marcar(index){
			this.confirmado = index;
		}
	},
	computed:{
		nombreYapellido(){
			var date = new Date();
			var year = date.getFullYear();
			return this.nombre + ' ' + this.apellido + ' - Nota: ' + this.nota + ' '+ date.getMonth() + ' '+ year;  
		},
		ordenarCosas(){
			return this.cosas.sort();
		},
		buscarFrutas(){
			//Este es un filtro pero metodos computados
			return this.frutas.filter((fruta) =>  fruta.nombre.includes(this.busqueda));
		}
		
	}
});

//Segunda instancia Vue

const vue2 = new Vue({
	el: '#app',
	data:{
		texto: 'Segunda instancia Vue'
	}
});

const vue3 = new Vue({
	el: '#tercera',
	data: {
		texto: 'Tercera instancia Vue'
	}
});