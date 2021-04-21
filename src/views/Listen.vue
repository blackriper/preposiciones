<template>
  <div>
    <h2 class="title">The most common prepositions of place and movement</h2><br><br>
    <h5 class="subtitle">click on the play button to listen to the audio on each card</h5><br>
    <Listening/>
  </div>
</template>
<script>
// @ is an alias to /src
import Listening from '@/components/Listening.vue'

export default {
  name: 'Listen',
  components: {
    Listening
  }
}
</script>
<style>
.title{
  color: #150651;
  font-weight: bold;
}

.subtitle{
  color: #140a32;
  padding-right: 60%;
}


</style>