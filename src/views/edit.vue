<template>
  <div class="edit">
    <router-link to="/me" class="back-link">返回</router-link>
    <div class="edit-top">
      <span>编辑资料</span>
    </div>
    <div class="edit-img">
      <img src="../assets/logo.png" alt="" />
      <input type="file">
      <span>点击更换头像</span>
    </div>
    <div class="content">
      <div class="edit-box">
        <div class="edit-item">
          <span class="label">名字</span>
          <span>测试员1号<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">抖音号</span>
          <span>111111<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">简介</span>
          <span>我是一行简介<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">学校</span>
          <span>点击设置<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">性别</span>
          <span>机器人<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">生日</span>
          <span>2020-04-01<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">地区</span>
          <span>中国-北京<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">名字</span>
          <span>测试员1号<span class="icon">→</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.edit-img{
     position: relative;
}
.edit-img input{
    display: flex;
    position: absolute;
    width: 50%;
    top: 0;
    height: 80px;
    opacity: 0;
}
.edit{
    padding: 20px;
}
.edit-top{
    display: flex;
    justify-content: center;
    align-items: center;
}
.edit-img{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px;
}
.edit-img img{
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin: 10px;
}
  .edit-item{
    display: flex;
    justify-content: space-between;
    line-height: 45px;
  }
  .edit-item .label{
    color:#252222;
  }
  .icon{
    margin-left: 10px;
  }
  .back-link{
      list-style: none;
  }
</style>