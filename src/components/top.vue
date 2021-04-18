<template>
  <div class="top-bar">
    <div class="item" @click="changetab(0)">
      <router-link to="/index" tag="span" :class="tabindex == 0 ? 'active' : ''"
        >直播</router-link
      >
    </div>
    <div class="item" @click="changetab(1)">
      <router-link
        to="/follow"
        tag="span"
        :class="tabindex == 1 ? 'active' : ''"
        >安达</router-link
      >
    </div>
    <div class="item" @click="changetab(2)">
      <router-link to="/index" tag="span" :class="tabindex == 2 ? 'active' : ''"
        >关注</router-link
      >
    </div>
    <div class="item" @click="changetab(3)">
      <router-link to="/index" tag="span" :class="tabindex == 3 ? 'active' : ''"
        >推荐</router-link
      >
    </div>
    <div class="item" @click="changetab(4)">
      <router-link to="/index" tag="span" :class="tabindex == 4 ? 'active' : ''"
        >搜索</router-link
      >
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      tabindex: 0,
    };
  },
  methods: {
    changetab(index) {
      this.tabindex = index;
      console.log(this.tabindex);
    },
  },
};
</script>

<style lang="less"  scoped>
.top-bar {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  color: #f3eded;
  z-index: 10;
  box-sizing: border-box;
  opacity: .8;
}
.item {
  display: flex;
}
.active {
  color: #ffffff;
}
</style>