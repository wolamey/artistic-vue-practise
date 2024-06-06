<template>
  <Header />

  <Video :videoSrc="videoSrc" :isVideoPlaying="isVideoPlaying" :setVideo="setVideo" />
  <router-view :videoSrc="videoSrc" :isVideoPlaying="isVideoPlaying" :setVideo="setVideo" />
</template>







<script>
import Header from './layout/Header.vue'
import Video from './components/Video.vue'

export default {
  components: { Header, Video },
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
