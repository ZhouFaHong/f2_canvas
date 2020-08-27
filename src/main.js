import Vue from 'vue'
import App from './App.vue'

import F2 from '@antv/f2/lib/index-all';
import router from './router'
import store from './store'

Vue.prototype.F2 = F2;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
