<template>
  <div right-wrap>
    <div class="right-img"><img src="../assets/logo.png" alt="" /></div>
    <div class="right-item"><span>点赞</span></div>
    <div class="right-item" @click.stop="showCom($event)"><span>评论</span></div>
    <div class="right-item"><span>转发</span></div>
    <div class="right-item"><span>音乐</span></div>
  </div>
</template>

<script>
export default {
  porps: ["showcomment"],
  methods: {
    showCom(e) {
      e.preventDefault();
      this.$emit("changeCom", this.showComment);
    },
  },
};
</script>

<style scoped>
.right-img {
  border-radius: 50%;
  text-align: centre;
}
img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 20px;
  text-align: center;
}
.right-wrap {
  padding: 5px 0;
  z-index: 50;
}
.right-item {
  padding: 15px;
}
</style>