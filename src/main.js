import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@state/store'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css'

import 'animate.css'
import VCurrencyField from 'v-currency-field'
Vue.use(VCurrencyField, {
  locale: 'pt-BR',
  decimalLength: 2,
  autoDecimalMode: true,
  min: null,
  max: null,
  defaultValue: null,
})

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
