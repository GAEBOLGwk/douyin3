<template>
    <div class="sign">
        <div class="sign-top">
            <router-link to="/index" class="close" >←</router-link>
            <span class="help">帮助</span>
        </div>
        <div class="content">
            <h2>请输入验证码</h2>
            <span class="tint">验证码已通过手机下发到手机上</span>
            <div class="sign-box">
                <input class="input-box" type="text" placeholder="  请输入验证码"  >
                <div class="times">
                 {{time}}
                </div>
            </div>
            <div>
                <button class="button-box" @click="timer">登录</button>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          time: 60,

        }
      },
       methods: {
           timer (){
             if(this.time > 0){
               this.time--;
               setTimeout(this.timer,1000)
             }
             else{
               this.time ==0;
             }
           },
       },
    }
</script>

<style  scoped>
.sign{
    padding:20px;
}
.sign-top{
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.sign-top span{
    line-height: 20px;
    font-size: 20px; 
    display: flex; 
}
.close{
    line-height: 20px;
    font-size: 20px; 
    color: black;
}
.tint{
    color: darkgray;
}
a{
    text-decoration: none;
    color: #7b7dff;
}
.sign-box{
    margin: 10px 0;
    display: flex;
    align-items: center;
    height: 50px;
    background: #f9f9f9;
}
.select-box{
    height: 36px;
    border: none;
    font-weight: bold;
    background: #f9f9f9;
    margin: 0 10px;
}
.input-box{
    height: 36px;
    border: none;
    background: #f9f9f9;
    width: 100%;
}
.title{
    color: #cacaca;
}
.button-box{
    height: 50px;
    /* background: rgba(0, 0, 0, .4); */
    background:#fa7a7a;
    border: none;
    text-align: center;
    width: 100%;
    color: white;
    font-size: 20px;
    margin: 20px 0;
}
.other{
    display: flex;
    justify-content: space-between;
}
.times{
  margin: 10px;
}
</style>