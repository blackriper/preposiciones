import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueIframe from 'vue-iframes'
import '@babel/polyfill'

Vue.config.productionTip = false
Vue.use(VueIframe)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
