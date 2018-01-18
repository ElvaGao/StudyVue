<template>
  <div id="app">
    <header-view :seller="seller"></header-view>
    <div>
      <div class="flex">
        <router-link to="/seller">1</router-link>
        <router-link to="/goods">2</router-link>
        <router-link to="/ratings">3</router-link>
      </div>
      <router-view></router-view>
    </div>

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
                seller: ""
            }
        },
        components: { headerView },
        name: 'App',
        created(){
           this.$http.get('./api/seller').then(function(res){
               res = res.body;
                if(res.code==0){
                 this.seller = res.data;
              }

           });
           this.$http.get('./api/goods').then(function(res){
             res = res.body.data;
           });
           this.$http.get('./api/ratings').then(function(res){
             res = res.body.data;
           })
         }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .flex
      display:flex
      &::before
          content ''
          display block
          width 100%
          position: absolute
          height 1px
          background-color #000
      a
        flex:1;
        text-align center
        text-decoration none
</style>
