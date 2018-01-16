// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  created(){
    this.$http.get('./api/seller').then(function(res){
      res = res.body;
      console.log(res)
    });
    this.$http.get('./api/goods').then(function(res){
      res = res.body;
      console.log(res)
    });
    this.$http.get('./api/ratings').then(function(res){
      res = res.body;
      console.log(res)
    })
  }
})
