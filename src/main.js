import Vue from 'vue'
import App from './App.vue'
import router from './router'

//挂载轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// swiper/css/swiper.css
import 'swiper/swiper-bundle.css'
// import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//视频播放器
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
