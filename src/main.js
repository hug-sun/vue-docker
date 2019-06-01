import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 很普通的独享
let obj = {
  name : 'kaikeba'
}
// let obj = {
//   name:'xx'
// }

const property = Object.getOwnPropertyDescriptor(obj, 'name')
console.log( property.configurable)

Object.freeze(obj)

const property1 = Object.getOwnPropertyDescriptor(obj, 'name')
console.log( property1.configurable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
