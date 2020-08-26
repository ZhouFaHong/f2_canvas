import Vue from 'vue'
import App from './App.vue'

import F2 from '@antv/f2';
import router from './router'

Vue.prototype.F2 = F2;


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
