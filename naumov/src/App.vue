<template>
<div id="app">
	<header>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<router-link to="./Home" class="nav-link" >Home<span class="sr-only">(current)</span></router-link>
					</li>
					<li class="nav-item">
						<router-link to="./Mother" class="nav-link" >Mother</router-link>
					</li>
					<li class="nav-item">
						<router-link to="./Cpu" class="nav-link" >Cpu</router-link>
					</li>
					<li class="nav-item">
						<router-link to="./Add" class="nav-link" >Add new</router-link>
					</li>
				</ul>
			</div>
		</nav>
		<router-view/>
	</header>
	
	<main>
	</main>
	
	<footer class="badge badge-secondary">
		<h1> Наумов Лев Николаевич, 22.06.2020</h1>
		<a href="https://bootstrap-4.ru/docs/4.0/components/navbar/" target="_blank">|Клац|</a>
		<a href="https://router.vuejs.org/ru/api/#exact" target="_blank">|Клац|</a>
		<a href="https://webformyself.com/kak-ispolzovat-marshrutizaciyu-vue-js-router/" target="_blank">|Клац|</a>
		<img class="movement" alt="Vue logo" src="./assets/logo.png">
	</footer>
	</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
body{
background-color:silver;
}
#app {
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}  
.movement:hover{
  transform: rotate(10deg);

}
@media print{
  body{
	background-color:white;
  }
  a{
	display:none;
  }
}
</style>
