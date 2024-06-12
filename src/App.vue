<template>
  <Header />

  <Video :videoSrc="videoSrc" :isVideoPlaying="isVideoPlaying" :setVideo="setVideo" />
  <router-view :videoSrc="videoSrc" :isVideoPlaying="isVideoPlaying" :setVideo="setVideo" />


  <Footer/>
</template>







<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
import Video from './components/Video.vue'

export default {
  components: { Header, Video, Footer },
  data() {
    return {
      isVideoPlaying: false,
      videoSrc: '',
    }
  },
  methods: {
    setVideo(src, bool) {
      this.videoSrc = src;
      this.isVideoPlaying = bool;
    }
  }
}
</script>








<style scoped>

</style>
