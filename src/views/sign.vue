<template>
  <div class="sign">
    <div class="sign-top">
      <router-link to="/index" class="close">x</router-link>
      <span class="help">帮助</span>
    </div>
    <div class="content">
      <h2>登录后即可展示自己</h2>
      <span class="tint"
        >登录即表明同意<a href="">抖音协议</a>和<a href="">隐私政策</a></span
      >
      <div class="sign-box">
        <div>
          <select name="" id="" class="select-box">
            <option value="">+86</option>
          </select>
        </div>
        <input
          class="input-box"
          type="text"
          placeholder="请输入手机号码"
        />
      </div>
      <span class="title">未注册手机验证后登录</span>
      <div>
        <button class="button-box" @click="signsub">获取短信验证码</button>
      </div>
      <div class="other">
        <a href="">密码登录</a>
        <span @click="show">其他方式登录</span>
      </div>
    </div>

    <transition name="up">
      <div class="mask" v-if="showmask">
        <div class="oauth">
          <ul>
            <li class="oauth-item">今日头条登录</li>
            <li class="oauth-item">QQ登录</li>
            <li class="oauth-item">微信登录</li>
            <li class="oauth-item">微博登录</li>
            <li @click="close" class="oauth-item">取消</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showmask: false,
        }
    },
  methods: {
    show (){
        this.showmask = true;
    },
    close (){
        this.showmask = false
    },
    signsub() {
      this.$router.push('/code')
    },
  },
};
</script>

<style  scoped>
.sign {
  padding: 20px;
}
.sign-top {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.sign-top span {
  line-height: 20px;
  font-size: 20px;
  display: flex;
}
.close {
  line-height: 20px;
  font-size: 20px;
  color: black;
}
.tint {
  color: darkgray;
}
a {
  text-decoration: none;
  color: #7b7dff;
}
.sign-box {
  margin: 10px 0;
  display: flex;
  align-items: center;
  height: 50px;
  background: #f9f9f9;
}
.select-box {
  height: 36px;
  border: none;
  font-weight: bold;
  background: #f9f9f9;
  margin: 0 10px;
}
.input-box {
  height: 36px;
  border: none;
  background: #f9f9f9;
  width: 90%;
}
.title {
  color: #cacaca;
}
.button-box {
  height: 50px;
  /* background: rgba(0, 0, 0, .4); */
  background: #fa7a7a;
  border: none;
  text-align: center;
  width: 100%;
  color: white;
  font-size: 20px;
  margin: 20px 0;
}
.other {
  display: flex;
  justify-content: space-between;
}
.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
  transform: translateY(100%);
}
li{
    list-style: none;
}
ul{
    padding: 0;
}
.mask{
    width:100%;
    height:100%;
    position: fixed;
    top: 0;
    left:0;
    background: rgba(0, 0, 0, .4);
  }
  .oauth{
    height:48%;
    width:100%;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: white;
    text-align: center;
    justify-items: center;
  }
  .oauth-item{
    border-bottom: 1px solid #f5f5f5;
    line-height: 55px;
  }


</style>