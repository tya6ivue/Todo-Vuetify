import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import plugin from './plugin'
import {store} from './store/store'
Vue.config.productionTip = false


new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
