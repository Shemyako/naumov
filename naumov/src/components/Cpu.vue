<template>
	<div id="app">
	
	
	<main>
		<div class="badge badge-success">Процессоры </div>
		<div class="row mt-1" v-for="(note,index) in notes" :key="note.id">
			<div class="CpuMain list-group-item-info">
			<div class="col-8" >Название: {{note.name}};</div>
			<div class="col-8" >Производитель: {{note.creator}};</div>
			<div class="col-8" >Ядро: {{note.jadro}};</div>
			<div class="col-8" >Гарантия: {{note.garanted}} мес.;</div>
			</div>
			
		</div>
	</main>
	
	
	
	</div>
</template>

<script>

export default {
	name: 'App',
	data: function(){
	return{
	notes: []
	};
	},
	mounted(){
		this.onLoad();
	},
	methods:{
		async onLoad() {
		try{
			let res = await this.$http.get("http://localhost:3000/cpu");
			//console.log(await res.json());
			this.notes = await res.json();
		} catch(e){
			console.log(e);
		}
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
.CpuMain{
	text-align:center;
	margin: 0 auto;
}
</style>
