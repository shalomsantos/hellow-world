import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import "./tools/bootstrap/css/bootstrap.css"
import "./tools/bootstrap/css/carousel.css"
import "./tools/bootstrap/js/bootstrap.js"
import "./tools/fontawesome/css/all.min.css"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
