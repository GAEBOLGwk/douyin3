<template>
    <div>
        <div class="top">
                <img src="../assets/logo.png" alt="">
                <div class="menu">三</div>
        </div>
        <div class="me-top">
            <div class="me-wrap">
                <div class="me-content">
                    <div class="me-info">
                        <img src="../assets/logo.png" alt="">
                        <div class="info">
                            <router-link to="/edit"><button class="btn">编辑资料</button></router-link>
                            <button class="btn">+朋友</button>
                        </div>
                    </div>
                    <div class="me-middle">
                        <h2>楷旋归来</h2>
                        <p>抖音号：12121212</p>
                        <p>介绍内容</p>
                    </div>
                    <div class="me-resume">
                        <span>22岁</span>
                        <span>黑龙江·哈尔滨</span>
                        <span>增加学校等标签</span>
                    </div>
                    <div class="me-resume">
                        <span><a href="">22w</a>获赞</span>
                        <span><a href="">22w</a>关注</span>
                        <span><a href="">22w</a>粉丝</span>
                    </div>
                </div>
                <div class="me-tabs">
                    <div class="me-items">
                        <div @click="changetabs(0)" :class="indextab==0?'active':''">作品</div>
                        <div @click="changetabs(1)" :class="indextab==1?'active':''">喜欢</div>
                    </div>
                    <div class="tab-wrap">
                        <div class="tab-con" v-show="indextab==0">
                            <div class="tab-img">
                            <img src="../assets/样式图.jpg" alt="">
                            <img src="../assets/样式图.jpg" alt="">
                            <img src="../assets/样式图.jpg" alt="">
                            <img src="../assets/样式图.jpg" alt="">
                            </div>
                        </div>
                        <div class="tab-con" v-show="indextab==1">
                            <div class="tab-img">
                            <img src="../assets/logo.png" alt="">
                            <img src="../assets/logo.png" alt="">
                            <img src="../assets/logo.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                indextab:0,
            }
        },
        methods: {
            changetabs(index) {
                this.indextab = index
            }
        },
    }
</script>

<style scoped>
.top{
    display: flex;
}
.top img{
    width: 100%;
    height: 60px;
}
.me-top{
    padding: 20px;
}
.menu{
    position: absolute;
    right: 20px;
    margin: 20px;
    color: rgb(27, 27, 27);
}
.me-wrap{
    top: 80px;
}
.me-content img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
}
.me-info{
   display: flex;
}
.me-info .btn{
    height: 40px;
    width: 120px;
    background: #eee;
    border: none;
    margin: 10px;
}
.me-resume{
    display: flex;
    margin:20px 0;
}
.me-resume span{
    margin: 0 5px;
}
.me-resume span a{
    text-decoration: none;
}
.me-items{
    display: flex;
    justify-content: space-around;
}
.active{
  border-bottom:2px solid #ffdf0e;
}
.tab-img img{
    width:30%;
    height:150px;
    margin: 5px;
}
</style>