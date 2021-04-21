<template>
  <div class="tutorial">
    <video ref="videoPlayer" class="video-js dimensions "></video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }

}
</script>

<style scoped>
.tutorial{
  width: 90%;
  height: 90%;
  padding-left: 15%;
  padding-top: 10%;

}
.dimensions {
  width: 800px;
  height: 380px;
}

 </style>