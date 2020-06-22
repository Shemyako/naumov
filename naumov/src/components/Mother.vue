<template>
	<div id="app">
	
	
	
	<main>
		<div class="badge badge-success">Материнские платы</div>	
		<div class="row mt-1" v-for="(note,index) in notes" :key="note.id">
			<div class="MamaMain list-group-item-info">
			<div class="col-8" >Название: {{note.name}};</div>
			<div class="col-8" >Производитель: {{note.creator}};</div>
			<div class="col-8" >Чипсет: {{note.cipSet}};</div>
			<div class="col-8" >Гарантия: {{note.garanted}} мес.;</div>
			</div>
			
		</div>
	</main>
	
	
	
	</div>
</template>

<script>

export default {
	name: 'App',
	data: function() {
	return{
		notes: []
		
	};
	},
	mounted(){
		this.onLoad();
	},
	methods:{
		async onLoad() {
			this.$http
				.get("http://localhost:3000/mother")
				.then(res => res.json())
				.then(res => (this.notes = res));
		}
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.MamaMain{
	text-align:center;
	margin: 0 auto;
}
</style>
