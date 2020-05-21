import Vue from 'vue'
import Router from 'vue-router'
import DataV from '@/components/dataV'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataV',
      component: DataV
    }
  ]
})
