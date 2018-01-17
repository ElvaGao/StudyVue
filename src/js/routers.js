
import Vue from 'vue'
import VueRouter from 'vue-router'
import seller from '../components/seller/seller'
import ratings from '../components/ratings/ratings'
import goods from '../components/goods/goods'

Vue.use(VueRouter)
var routes = [
    {
        path: '/seller',
        component: seller
    },
    {
        path: '/ratings',
        component: ratings
    },
    {
        path: '/goods',
        component: goods
    },
    {
        path: '/',
        component: seller
    }
]

var router = new VueRouter({
    routes
})

export default router