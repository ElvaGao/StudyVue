<template>
  <div id="app">
    <header-view :logo="logoMsg"></header-view>
    <router-view></router-view>
  </div>
</template>

<script>
    import headerView from 'components/header/header'
    import Vue from 'vue';
    import VueResource from 'vue-resource';
    Vue.use(VueResource);

    export default {
        data(){
            return{
                logoMsg: null
            }
        },
        components: { headerView },
        name: 'App',
        created(){
           this.$http.get('./api/seller').then(function(res){
             res = res.body.data;
             this.logoMsg = res;
             console.log(res)
           });
           this.$http.get('./api/goods').then(function(res){
             res = res.body.data;
             console.log(res)
           });
           this.$http.get('./api/ratings').then(function(res){
             res = res.body.data;
             console.log(res)
           })
         }
    }
</script>

<style>

</style>
