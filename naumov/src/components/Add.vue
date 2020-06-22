<template>
	<div id="app">
	
	
	<main>
		<form>
		<div class="form-group w-100">
			<label>Вид товара</label>
			<select size="2" class="form-control" id="exampleSelect2" v-model="selected" >
				<option v-on:click=Click()>mother</option>
				<option v-on:click=Click()>cpu</option>
			</select>
		</div>
		<div class="form-group w-100">
			<label for="name">Название</label>
			<input type="text" id="name" placeholder="GIGABYTE 'GA-78LMT-S2 R2'" class="form-control" v-model="name">
		</div>
		<div class="form-group w-100">
			<label for="surname">Производитель</label>
			<input type="text" id="surname" placeholder="GIGABYTE" class="form-control" v-model="surname">
		</div>
		<div class="form-group w-100">
			<label for="phone">Срок гарантии, мес.</label>
			<input type="text" id="phone" placeholder="36" class="form-control" v-model="phone">
		</div>
		<div class="form-group w-100">
			<label id="jadro" for="is_jadro">{{is_jadro}}</label>
			<input type="text" id="jadro" placeholder="AMD 760G / SB710" class="form-control" v-model="jadro">
		</div>
		<div class="btn btn-success" @click="onSave">Сохранить</div>
		</form>
	</main>
	
	
	
	</div>
</template>

<script>

export default {
	name: 'App',
	data: function(){
	return{
		selected:"",
		name:"",
		surname:"",
		phone:"",
		jadro:"",
		is_jadro:""
	};
	},
	methods:{
		async onSave() {
			let note = {
				name: this.name,
				creator: this.surname,
				garanted: this.phone,
			};
			if (this.is_jadro=="Ядро"){
				note.jadro= this.jadro;
			}else{
				note.cipSet= this.jadro;
			}
			try{
				await this.$http
					.post('http://localhost:3000/'+this.selected, note)
				
				this.name = "";
				this.surname = "";
				this.phone = "";
				this.jadro = "";
			}catch(err){
				console.log(err);
			}
		},
		Click(){
			if (this.selected=="cpu"){
				this.is_jadro = "Ядро";
			}else if (this.selected == "mother"){
				this.is_jadro = "Чипсет";
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
