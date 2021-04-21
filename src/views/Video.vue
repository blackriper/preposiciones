<template>
  <div>
   <video-player :options="videoOptions"/>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  name: "Video",
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src:"https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/videos%2FMaterial%20did%C3%A1ctico.mp4?alt=media&token=d8568bbe-19cf-435c-86fc-f90f46389b8f",
            type: "video/mp4"
          }
        ],
        poster:'https://elblogdeidiomas.es/wp-content/uploads/2020/10/Las-preposiciones-en-ingles-.png'
      }
    };
  }
}
</script>

<style scoped>

</style>