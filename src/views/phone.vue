<template>
    <div class="sign">
        <div class="sign-top">
            <router-link to="/index" class="close" >←</router-link>
            <span class="help">帮助</span>
        </div>
        <div class="content">
            <h2>手机号码登陆</h2>
            <div class="sign-box">
                <div >
                    <select name="" id="" class="select-box">
                        <option value="">+86 </option>
                    </select>
                </div>
                <input class="input-box" type="text" placeholder="请输入手机号码">
            </div>
            <div class="sign-box">
                <input class="input-box" type="text" placeholder="  请输入密码">
            </div>
            
             <span class="tint">登录即表明同意<a href="">用户协议</a>和<a href="">隐私政策</a></span>
            <div >
                <button class="button-box">登录</button>
            </div>
            <div class="other">
                <a href="">忘记了</a>
                <a href="">找回密码</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
     
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
    width: 90%;
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
</style>