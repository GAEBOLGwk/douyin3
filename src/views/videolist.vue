<template>
  <div id="video-list">
    <swiper :options="swiperOption" class="swiper-container">
      <!-- 幻灯内容 -->
      <swiper-slide v-for="(item, index) in datalist" :key="index">
        <videos ref="videos" :datalist="item" :index="index"></videos>
        <div class="left-wrap">
          <leftwrap />
        </div>
        <div class="right-wrap">
          <rightwrap @changeCom="showCom"></rightwrap>
        </div>
      </swiper-slide>
      <swiper-slide>slide2</swiper-slide>
      <swiper-slide>slide3</swiper-slide>
      <swiper-slide>slide4</swiper-slide>
    </swiper>
    <!-- 评论 -->
    <transition name="up">
    <div class="comment-wrap" v-if="showComment">
      <div class="comment-top">
        <div class="comment-number"> 22.2w条评论</div>
        <div class="exit"><span @click="close">x</span></div>
      </div>
      <div class="comment-body">
        <div class="comment-box">
          <div class="comment-items">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="comment-info">
            <p class="comment-title">标题 楷楷最帅</p>
            <p class="comment-data">内容数据</p>
            <div class="comment-assist">点赞数图标</div>
          </div>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"; //导入组件
import videos from "./videos";
import leftwrap from "../components/leftwrap";
import rightwrap from "../components/rightwrap";
export default {
  name: "videoList",
  components: {
    swiper, //定义组件
    swiperSlide,
    videos,
    leftwrap,
    rightwrap,
  },
  methods: {
    playAction(index) {
      this.$refs.videos[index].playorstop();
    },
    //上滑
    nextVideo(index) {
      //通过DOM元素来获取子组件的方法
      //上一个视频停止
      this.$refs.videos[index - 1].stop();
      //下一个视频开始
      this.$refs.videos[index].play();
    },
    //下滑
    preVideo(index) {
      this.$refs.videos[index + 1].stop();
      this.$refs.videos[index].play();
    },
      showCom(){
      this.showComment = true;
    },
    close() {
      this.showComment = false;
    },
  },
  data() {
    return {
      showComment: false,
      page: 1,
      swiperOption: {
        direction: "vertical",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0,
        observeParents: true,

        on: {
          //详见：https://www.swiper.com.cn/api/event/226.html
          tap: () => {
            this.playAction(this.page - 1);
          },
          //上滑
          //详见：https://www.swiper.com.cn/api/event/290.html
          slideNextTransitionStart: () => {
            // alert('开始切换');
            this.page += 1;
            this.nextVideo(this.page - 1);
            console.log(this.page);
          },
          slidePrevTransitionStart: () => {
            if (this.page > 1) {
              this.page -= 1;
              this.preVideo(this.page - 1);
              console.log(this.page);
            }
          },
        },
      },

      datalist: [
        {
          id: "1",
          url:
            "http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4",
        },
        {
          id: "2",
          url:
            "http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4",
        },
        {
          id: "3",
          url:
            "http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4",
        },
        {
          id: "4",
          url:
            "http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4",
        },
      ],
    };
  },
};
</script>
<style scoped>
.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
  transform: translateY(100%);
}

#video-list {
  height: 100%;
}
.swiper-container {
  height: 100%;
}
.left-wrap {
  display: flex;
  position: absolute;
  bottom: 60px;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 40;
  color: #eee;
  padding: 10px;
}
.right-wrap {
  display: flex;
  position: absolute;
  right: 0;
  bottom: 60px;
  width: 60px;
  height: 100%;
  z-index: 40;
  color: #eee;
  align-items: flex-end;
}

.comment-wrap{
  z-index: 999;
  height: 400px;
  width: 100%;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.comment-top{
  display: flex;
  align-items: center;
}
.comment-number{
  text-align: center;
  flex: 1;
  margin: 10px;
}
.exit{
  text-align: right;
  display: flex;
  padding-right: 10px;
  font-size: 20px;
  color: #666;
}
.comment-box{
  display: flex;
}
.comment-items{
   margin-right: 10px;
}
.comment-items img{
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.comment-title{
  font-size: 14px;
  color: #666;
}
</style>