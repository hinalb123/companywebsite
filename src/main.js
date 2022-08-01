import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './axios'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import store from './store';

window.toastr = require('toastr')

Vue.config.productionTip = false

Vue.use(VueToastr2)

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
