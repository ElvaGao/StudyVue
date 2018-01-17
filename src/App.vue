<template>
  <div id="app">
    <router-link to="/seller">seller</router-link>
    <router-link to="/goods">goods</router-link>
    <router-link to="/ratings">ratings</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './js/routers'

export default {
  name: 'App',
  router
}
</script>

<style>

</style>
