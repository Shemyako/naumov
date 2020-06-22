import Vue from 'vue'
import Router from 'vue-router'
import Mother from '@/components/Mother'
import Cpu from '@/components/Cpu'
import Home from '@/components/Home'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Mother',
      name: 'Mother',
      component: Mother
    },
	{
      path: '/Cpu',
      name: 'Cpu',
      component: Cpu
    },
	{
      path: '/Home',
      name: 'Home',
      component: Home
    },
	{
      path: '/Add',
      name: 'Add',
      component: Add
    }
  ]
})
