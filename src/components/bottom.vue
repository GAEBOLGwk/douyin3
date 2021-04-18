<template>
    <div class="tab-bar">
        <div class="item" @click="changetab(0)"><router-link to="/index" tag="span" :class="tabindex==0?'active':''">首页</router-link></div>
        <div class="item" @click="changetab(1)"><router-link to="/friend" tag="span" :class="tabindex==1?'active':''">朋友</router-link></div>
        <div class="item" @click="changetab(2)"><router-link to="/video" tag="span" :class="tabindex==2?'active':''">+</router-link></div>
        <div class="item" @click="changetab(3)"><router-link to="/message" tag="span" :class="tabindex==3?'active':''">消息</router-link></div>
        <div class="item" @click="changetab(4)"><router-link to="/me" tag="span" :class="tabindex==4?'active':''">我</router-link></div>

        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xxx"></use>
        </svg>
    </div>
</template>

<script >
    export default {
       data() {
           return {
             tabindex:0,
           }
       },
        methods: {
            changetab(index) {
                this.tabindex = index
                
                console.log(this.tabindex);
            }
        },
    }
</script>

<style  scoped>
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
    .tab-bar{
        height: 50px;
        width: 100%;
        line-height: 50px;
        position: fixed;
        background: #000;
        bottom: 0;
        left: 0;
        display: flex;
        font-size: 16px;
        color: #cccccc;
        justify-items: center;
        z-index: 30;
    }
    .item{
        text-align: center;
        flex: 1;
    }
    .active{
        color:#ffffff;
    }
</style>