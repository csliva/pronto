import Vue from 'vue'
import App from './App.vue'


console.log('[i] Starting client app')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: { App }
}).$mount('#root')
