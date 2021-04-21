<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="5" v-for="source in sources" :key="source.id">
      <v-card
          class="mx-auto"
          width="544"
      >
        <center>
          <v-img
              :src="source.src"
              height="200px"
              width="250px"
              ></v-img>
        </center>
        <v-card-title>
          <article>
            {{source.texi}} <span class="answer">{{source.principal}}</span>{{source.texe}}
          </article>
        </v-card-title>
        <vue-audio-native
            :url="source.url"
            :showDownload="false"
            :showVolume="false"
            :hint="load"
        ></vue-audio-native>
        <v-card-actions>

        </v-card-actions>
       </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Listening",
  data: () => ({
    load:'Cargando ...',
    sources:[
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FOver.png?alt=media&token=72c61b6b-dba3-421d-93c8-59ce7c6c6957',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fover.ogg?alt=media&token=9efd2fb1-e08e-4037-b765-d2cdc1866942',
        texi:'The ball is  ',
        principal:'over',
        texe:' the box'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FThrough.jpg?alt=media&token=0a062c9c-168b-4f29-8021-335166690971',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fthrough.ogg?alt=media&token=40020b99-7916-40dd-a31a-b066335926cb',
        texi:'The ball is  ',
        principal:'through',
        texe:' the window'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FInto.jpg?alt=media&token=9486be1d-319f-48b7-baca-b39b9c58f153',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Finto.ogg?alt=media&token=cb0b840a-642e-4e4b-a785-4d624c74379a',
        texi:'The ball is  ',
        principal:'into',
        texe:' the box'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FBeside%20.png?alt=media&token=bf4930da-b745-429b-a12c-69a028e46417',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fbeside.ogg?alt=media&token=37e864c0-8a31-45af-97db-a35947ee3e22',
        texi:'The ball is  ',
        principal:'beside',
        texe:' the table'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FAround.png?alt=media&token=b22a59a5-30c3-4c06-a20e-54c6b6915084',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Faround.ogg?alt=media&token=b289ec95-2d87-4d12-92df-9fb0eeee2196',
        texi:'The ball is  ',
        principal:'around ',
        texe:' the table'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FAbove.png?alt=media&token=238b4898-fad3-43de-aea6-d49e92f3c5b5',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fabove.ogg?alt=media&token=f7953d08-3420-46e9-8bbe-57b8d2cbdc0c',
        texi:'The ball is  ',
        principal:'above ',
        texe:' the table'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FOn.png?alt=media&token=ce872a31-3cc6-4730-b55e-10dd4c2913eb',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fon.ogg?alt=media&token=d39d0ffc-a2e2-4403-9243-1169dc65fe91',
        texi:'The ball is  ',
        principal:' on  ',
        texe:' the table'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FUnder.png?alt=media&token=30c7d8e2-cfb6-485b-9eea-593f53dba65a',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Funder.ogg?alt=media&token=5c792682-0f48-496c-ae2f-898feca1a8f1',
        texi:'The ball is  ',
        principal:' under   ',
        texe:' the table'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FOut.jpg?alt=media&token=5439be74-f4d5-49ba-9ed2-23b669d334c9',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fout.ogg?alt=media&token=462e7de0-dd43-41cc-b308-fd3f1eff6426',
        texi:'The ball is  ',
        principal:'  out   ',
        texe:' the box'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FBetween.png?alt=media&token=f183a51d-c778-4993-b279-8bea6c4e910c',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fbetween.ogg?alt=media&token=a5775584-580b-44cd-86e2-073bcc7a6064',
        texi:'The ball is  ',
        principal:' between   ',
        texe:' the box and then table'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FAmong.png?alt=media&token=ea66fae2-8c16-48f9-b243-b15761c65912c',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Famong.ogg?alt=media&token=b8b432d5-05e3-4d5e-8154-63b5b47e3370',
        texi:'The ball is  ',
        principal:'among',
        texe:' the box'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2Ffront%20.png?alt=media&token=ae6ad386-3026-4b1c-9bc8-d95057057972',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fin%20front.ogg?alt=media&token=4c6515b7-a067-4680-bcbb-bfcb36977fc7',
        texi:'The ball is in  ',
        principal:'front ',
        texe:' of the box'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FBehind.png?alt=media&token=1f850d6e-844e-4fe4-96c3-c101c6f4e623',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fbehind.ogg?alt=media&token=ac8cd16a-f38d-47bc-b31a-18b22e409da5',
        texi:'The ball is  ',
        principal:'behind  ',
        texe:' the box'
      },
       {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FBelow.png?alt=media&token=9499f32d-a70c-4289-9358-671509eb4267',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fbelow.ogg?alt=media&token=12ed8a51-da14-404e-83cd-cd4660dc6540',
        texi:'The ball is  ',
        principal:'below   ',
        texe:' the box'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FInto.jpg?alt=media&token=9486be1d-319f-48b7-baca-b39b9c58f153',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Finto.ogg?alt=media&token=cb0b840a-642e-4e4b-a785-4d624c74379a',
        texi:'The ball is  ',
        principal:'in ',
        texe:' to the box'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FNear.png?alt=media&token=5d7b1d78-63cb-44b2-9d31-207331a399bc',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fnear.ogg?alt=media&token=0de02454-ade1-4a9f-82bc-007f157b8c0d',
        texi:'The ball is  ',
        principal:' near ',
        texe:' the box'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FFar.png?alt=media&token=2fde898d-3459-4002-afff-e207676a726f',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Ffar.ogg?alt=media&token=1d8c5391-687b-4241-a049-62cfb8099101',
        texi:'The ball is  ',
        principal:' far ',
        texe:' from the box'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FNext%20to.png?alt=media&token=6bae8063-f122-4bd7-a17c-7f54e3344312',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fnext.ogg?alt=media&token=877226a3-9617-4e27-8846-dc372c38b25d',
        texi:'The ball is  ',
        principal:'next to ',
        texe:' the box'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2Fto.jpeg?alt=media&token=cbca2fcb-69ee-407e-9c55-a73865055805',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fto.ogg?alt=media&token=6c96db0b-730e-431b-901c-4fac90cbc0f1',
        texi:'The people  ',
        principal:'go ',
        texe:' to the cinema'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FUp.png?alt=media&token=af302f68-7647-4871-8524-811917685983',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fup.ogg?alt=media&token=2e7a5d51-3d56-42a1-9aba-e54c883cf563',
        texi:'The ball is  ',
        principal:'up ',
        texe:' in the air'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FAcross.jpg?alt=media&token=6f3a6735-95fd-487a-a540-0162aefbc85e',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Facross.ogg?alt=media&token=93f7c2ab-be28-4cc1-ba5f-4828bfb3a14f',
        texi:'The ball is rolling ',
        principal:'across ',
        texe:' the carpet'
      },
      {
        src:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FDown.png?alt=media&token=f636b428-49b0-4f13-99f8-ba5a67840bca',
        url:'https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/audios%2Fdown.ogg?alt=media&token=64ba22ab-861a-4876-9e51-4e0c9f3317d7',
        texi:'The ball is',
        principal:'down ',
        texe:' the table'
      }

    ]
  })
 }
</script>

<style scoped>
.answer{
  color: #150651;
  font-weight: bold;
}
</style>