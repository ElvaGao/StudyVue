<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{ seller.name }}</span>
                </div>
                <div class="description">
                    {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{ seller.supports[0].description }}</span>
                </div>
            </div>
            <div class="support-count" v-if="seller.supports">
                <span class="count">{{ seller.supports.length }}个 ></span>
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                classMap:[]
            }
        },
        props: [ 'seller' ],
        created(){
            this.classMap = ['descrease','discount','guarantee','invoice','special']
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./../../css/unit.styl"


    .header
        color #fff
        background-color #999
        position: relative;
        .content-wrapper
            padding 24px 12px 18px 24px
            font-size 0
            .avatar
                display inline-block
                vertical-align top
                img
                    -webkit-border-radius: 2px
                    -moz-border-radius 2px
                    border-radius: 2px
            .content
                display inline-block
                margin-left 30px
                font-size 14px
                .title
                    margin 2px 0 8px 0
                    .brand
                        display inline-block
                        width: 30px
                        height: 18px
                        bg-image('./../../img/brand')
                        background-size 30px 18px
                        background-repeat none
                    .name
                        margin-left 6px
                        font-size 16px
                        line-height 18px
                        font-weight bold
                .description
                    margin-bottom 10px
                    line-height: 12px
                    font-size 12px
                .support
                    .icon
                        display inline-block
                        width: 12px
                        height:12px
                        vertical-align top
                        margin-right: 4px
                        background-size 12px 12px
                        background-repeat no-repeat
                        &.descrease
                            bg-image('./../../img/decrease_1')
                        &.discount
                            bg-image('./../../img/discount_1')
                        &.guarantee
                            bg-image('./../../img/guarantee_1')
                        &.invoice
                            bg-image('./../../img/invoice_1')
                        &.special
                            bg-image('./../../img/special_1')
                    .text
                        font-size: 12px
                        line-height 10px
            .support-count
                position absolute
                right: 12px
                bottom 18px
                padding 0 10px
                height: 24px
                line-height: 24px
                border-radius  14px
                background-color rgba(0,0,0,0.2)
                text-align center
                .count
                    font-size 10px


</style>
