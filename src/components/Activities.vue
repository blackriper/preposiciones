<template>

  <div class="actividad">
      <vue-iframe
        v-if="id_act==='act1'"
        src="https://wordwall.net/es/embed/992a750580b4440d89f3dbc52036fe27?themeId=1&templateId=3"
        allow="camera *; geolocation *; microphone *; autoplay *; fullscreen *"
        frame-id="actividad1"
        name="frame1"
         />

    <vue-iframe
        v-if="id_act==='act2'"
        src="https://wordwall.net/es/embed/4008b89c6c0e4f50b711990bcdbdab34?themeId=53&templateId=49"
        allow="camera *; geolocation *; microphone *; autoplay *;fullscreen *"
        frame-id="actividad1"
        name="frame1"
    />

   </div>

  </template>

<script>
export default {
  name: "Activities",
  props:{
    id_act:String
  }
}
</script>

<style scoped>
 .actividad{
    width: 90%;
    height: 500px;
    padding-left: 10%;
    padding-top: 10%;

 }
</style>