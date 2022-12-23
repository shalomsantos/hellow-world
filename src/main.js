import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./tools/boostrap/css/bootstrap.css"
import "./tools/boostrap/css/carousel.css"
import './components/style.css'
import "./tools/boostrap/js/bootstrap.js"
import "./tools/fontawesome/css/all.min.css"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
