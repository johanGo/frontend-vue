import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import moment from 'moment'

import VueAlertify from 'vue-alertify';

Vue.use(VueAlertify);
// Vue.use(moment)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
