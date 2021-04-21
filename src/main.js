import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueIframe from 'vue-iframes'
import vueAudioNative from 'vue-audio-native'


import '@babel/polyfill'

Vue.config.productionTip = false
Vue.use(VueIframe)
Vue.use(vueAudioNative)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
