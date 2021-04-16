<template>
  <div class="contenedor">
   <h2 class="title">The most common prepositions of place and movement</h2><br><br>
   <h3 class="subtitle">What is a preposition?</h3><br>
    <article>
      A preposition is a word or phrase that tells us where an object is in relation to another object.<br>
      Prepositions of space and place usually follow the following pattern.
    </article>
    <img alt="Rules" src="https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2Frules.png?alt=media&token=6aea2305-76da-45e3-bb26-b5313a9ebdf4">
    <Introduction/>
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from '@/components/Introduction.vue'

export default {
  name: 'Home',
  components: {
    Introduction
  }
}
</script>
<style>
  .title{
    color: #150651;
    font-weight: bold;
   }
  .contenedor{
    padding-top: 5%;

  }
  .subtitle{
    color: #140a32;
    padding-right: 72%;
  }
  article{
    text-align: justify;
    padding-left: 5%;
  }

</style>