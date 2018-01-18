<template>
    <div id="header">
        <div class="avatar">
            <img :src="seller.avatar">
        </div>
        <div class="info">
            <div>
                {{ seller.deliveryTime }}就是小哪吒
            </div>
            <ul>
                <li v-for="item in itemList">{{ item.description }}</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                itemList:[]
            }
        },
        props: [ 'seller' ],
        created(){
            this.itemList = this.seller.supports
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../css/unit.styl"

    #header
        display flex
        .avatar
            flex 1
            margin-left 30px
        .info
            float right
        img
            img-size(50px)

</style>
