<template>
  <div>
    <h2 class="title" >Exercise 3</h2>
    <h5><i>Ejercicio 3.</i></h5><br><br>

    <h3 class="subtitle">Choose the right answer.</h3>
    <h5 class="sub"><i>Elige la respuesta correcta.</i></h5><br>

    <v-form ref="form">

       <article>
         1. The table is below the window. The window is  <span class="answer">{{pregunta1||'null'}}</span> the table. <span :class="[resultado1 ? 'correcto' : 'incorrect']">{{mensaje1}}</span>
          <v-radio-group v-model="pregunta1" :disabled="active1" v-for="opcion in opciones" :key="opcion.id">
            <v-radio
                v-for="answer in opcion.answers1" :key="answer.id"
                :label="answer.label"
                :value="answer.value"
                color="indigo darken-3"
            ></v-radio>
          </v-radio-group>
         </article>

      <article>
        2. Your mouth is  <span class="answer">{{pregunta2||'null'}}</span> your nose. <span :class="[resultado2 ? 'correcto' : 'incorrect']">{{mensaje2}}</span>
        <v-radio-group v-model="pregunta2" :disabled="active2" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers2" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        3. Brenda is in front of Gina. Gina is <span class="answer">{{pregunta3||'null'}}</span> Brenda. <span :class="[resultado3 ? 'correcto' : 'incorrect']">{{mensaje3}}</span>
        <v-radio-group v-model="pregunta3" :disabled="active3" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers3" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        4. You must walk <span class="answer">{{pregunta4||'null'}}</span> Brenda. <span :class="[resultado4 ? 'correcto' : 'incorrect']">{{mensaje4}}</span>
        <v-radio-group v-model="pregunta4" :disabled="active4" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers4" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
      5. Your location is below this hill, Walk  <span class="answer">{{pregunta5||'null'}}</span> the hill and turn left. <span :class="[resultado5 ? 'correcto' : 'incorrect']">{{mensaje5}}</span>
      <v-radio-group v-model="pregunta5" :disabled="active5" v-for="opcion in opciones" :key="opcion.id">
        <v-radio
            v-for="answer in opcion.answers5" :key="answer.id"
            :label="answer.label"
            :value="answer.value"
            color="indigo darken-3"
        ></v-radio>
      </v-radio-group>
    </article>

      <article>
        6. That woman getting  <span class="answer">{{pregunta6||'null'}}</span> the supermarket is my mother. <span :class="[resultado6 ? 'correcto' : 'incorrect']">{{mensaje6}}</span>
        <v-radio-group v-model="pregunta6" :disabled="active6" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers6" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        7. We drove  <span class="answer">{{pregunta7||'null'}}</span> the tunnel <span :class="[resultado7 ? 'correcto' : 'incorrect']">{{mensaje7}}</span>
        <v-radio-group v-model="pregunta7" :disabled="active7" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers7" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

     <article>
       8. New York is the largest city  <span class="answer">{{pregunta8||'null'}}</span> the United States. <span :class="[resultado8 ? 'correcto' : 'incorrect']">{{mensaje8}}</span>
      <v-radio-group v-model="pregunta8" :disabled="active8" v-for="opcion in opciones" :key="opcion.id">
        <v-radio
            v-for="answer in opcion.answers8" :key="answer.id"
            :label="answer.label"
            :value="answer.value"
            color="indigo darken-3"
        ></v-radio>
      </v-radio-group>
      </article>

      <article>
        9. The shop is <span class="answer">{{pregunta9||'null'}}</span> the bank and the supermarket. <span :class="[resultado9 ? 'correcto' : 'incorrect']">{{mensaje9}}</span>
        <v-radio-group v-model="pregunta9" :disabled="active9" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers9" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        10. The dog jumped <span class="answer">{{pregunta10||'null'}}</span> the wall.  <span :class="[resultado10 ? 'correcto' : 'incorrect']">{{mensaje10}}</span>
        <v-radio-group v-model="pregunta10" :disabled="active10" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers10" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        11. He always goes <span class="answer">{{pregunta11||'null'}}</span> disco techs every night.  <span :class="[resultado11 ? 'correcto' : 'incorrect']">{{mensaje11}}</span>
        <v-radio-group v-model="pregunta11" :disabled="active11" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers11" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        12. The author's name is <span class="answer">{{pregunta12||'null'}}</span> the cover of the book.  <span :class="[resultado12 ? 'correcto' : 'incorrect']">{{mensaje12}}</span>
        <v-radio-group v-model="pregunta12" :disabled="active12" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers12" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        13. <span class="answer">{{pregunta13||'null'}}</span> the bed is a bedside table with a vase of flowers on it. <span :class="[resultado13 ? 'correcto' : 'incorrect']">{{mensaje13}}</span>
        <v-radio-group v-model="pregunta13" :disabled="active13" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers13" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        14. There was a big clock  <span class="answer">{{pregunta14||'null'}}</span> the painting.   <span :class="[resultado14 ? 'correcto' : 'incorrect']">{{mensaje14}}</span>
        <v-radio-group v-model="pregunta14" :disabled="active14" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers14" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        15. You need to go  <span class="answer">{{pregunta15||'null'}}</span> stairs to get to the temple. <span :class="[resultado15 ? 'correcto' : 'incorrect']">{{mensaje15}}</span>
        <v-radio-group v-model="pregunta15" :disabled="active15" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers15" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        16. The moon goes  <span class="answer">{{pregunta16||'null'}}</span> the earth. <span :class="[resultado16 ? 'correcto' : 'incorrect']">{{mensaje16}}</span>
        <v-radio-group v-model="pregunta16" :disabled="active16" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers16" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        17. I looked  <span class="answer">{{pregunta17||'null'}}</span> the window. <span :class="[resultado17 ? 'correcto' : 'incorrect']">{{mensaje17}}</span>
        <v-radio-group v-model="pregunta17" :disabled="active17" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers17" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        18. The house is  <span class="answer">{{pregunta18||'null'}}</span> the trees. <span :class="[resultado18 ? 'correcto' : 'incorrect']">{{mensaje18}}</span>
        <v-radio-group v-model="pregunta18" :disabled="active18" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers18" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        19. They sat  <span class="answer">{{pregunta19||'null'}}</span> the TV and watched a movie last night.<span :class="[resultado19 ? 'correcto' : 'incorrect']">{{mensaje19}}</span>
        <v-radio-group v-model="pregunta19" :disabled="active19" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers19" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        20. I lived  <span class="answer">{{pregunta20||'null'}}</span> the school. <span :class="[resultado20 ? 'correcto' : 'incorrect']">{{mensaje20}}</span>
        <v-radio-group v-model="pregunta20" :disabled="active20" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers20" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        21. He lives too  <span class="answer">{{pregunta21||'null'}}</span> from here to walk home.<span :class="[resultado21 ? 'correcto' : 'incorrect']">{{mensaje21}}</span>
        <v-radio-group v-model="pregunta21" :disabled="active21" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers21" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      <article>
        22. He walked   <span class="answer">{{pregunta22||'null'}}</span> me as we went down the street.<span :class="[resultado22 ? 'correcto' : 'incorrect']">{{mensaje22}}</span>
        <v-radio-group v-model="pregunta22" :disabled="active22" v-for="opcion in opciones" :key="opcion.id">
          <v-radio
              v-for="answer in opcion.answers22" :key="answer.id"
              :label="answer.label"
              :value="answer.value"
              color="indigo darken-3"
          ></v-radio>
        </v-radio-group>
      </article>

      </v-form>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <span class="hit"> Hits {{correctas}}/22</span>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn  small dark  color="#150651" @click="reset()">Try again </v-btn>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data: () => ({
     pregunta1:'____',
     mensaje1:'',
     resultado1:false,
     active1: false,
     pregunta2:'____',
     mensaje2:'',
     resultado2:false,
     active2: false,
     pregunta3:'____',
     mensaje3:'',
     resultado3:false,
     active3: false,
     pregunta4:'____',
     mensaje4:'',
     resultado4:false,
     active4: false,
     pregunta5:'____',
     mensaje5:'',
     resultado5:false,
     active5: false,
     pregunta6:'____',
     mensaje6:'',
     resultado6:false,
     active6: false,
     pregunta7:'____',
     mensaje7:'',
     resultado7:false,
     active7: false,
     pregunta8:'____',
     mensaje8:'',
     resultado8:false,
     active8: false,
     pregunta9:'____',
     mensaje9:'',
     resultado9:false,
     active9: false,
     pregunta10:'____',
     mensaje10:'',
     resultado10:false,
     active10: false,
     pregunta11:'____',
     mensaje11:'',
     resultado11:false,
     active11: false,
     pregunta12:'____',
     mensaje12:'',
     resultado12:false,
     active12: false,
     pregunta13:'____',
     mensaje13:'',
     resultado13:false,
     active13: false,
     pregunta14:'____',
     mensaje14:'',
     resultado14:false,
     active14: false,
     pregunta15:'____',
     mensaje15:'',
     resultado15:false,
     active15: false,
     pregunta16:'____',
     mensaje16:'',
     resultado16:false,
     active16: false,
     pregunta17:'____',
     mensaje17:'',
     resultado17:false,
     active17: false,
     pregunta18:'____',
     mensaje18:'',
     resultado18:false,
     active18: false,
     pregunta19:'____',
     mensaje19:'',
     resultado19:false,
     active19: false,
     pregunta20:'____',
     mensaje20:'',
     resultado20:false,
     active20: false,
     pregunta21:'____',
     mensaje21:'',
     resultado21:false,
     active21: false,
     pregunta22:'____',
     mensaje22:'',
     resultado22:false,
     active22: false,
     correctas:0,
     opciones: [
       {
         answers1:[
           {label:'Behind',value:'Behind'},
           {label:'Above',value:'Above'},
           {label:'Between',value:'Between'},
           {label:'Next',value:'Next'},
         ],
         answers2:[
           {label:'Under',value:'Under'},
           {label:'Next to',value:'Next to'},
           {label:'Between',value:'Between'},
           {label:'Behind',value:'Behind'},
         ],
         answers3:[
           {label:'Behind',value:'Behind'},
           {label:'Under',value:'Under'},
           {label:'Across',value:'Across'},
           {label:'On',value:'On'},
         ],
         answers4:[
           {label:'Across',value:'Across'},
           {label:'Under',value:'Under'},
           {label:'On',value:'On'},
           {label:'Next to',value:'Next to'},
         ],
         answers5:[
           {label:'Down',value:'Down'},
           {label:'Across',value:'Across'},
           {label:'In',value:'In'},
           {label:'On',value:'On'},
         ],
         answers6:[
           {label:'Into',value:'Into'},
           {label:'Across',value:'Across'},
           {label:'Down',value:'Down'},
           {label:'Through',value:'Through'},
         ],
         answers7:[
           {label:'Through',value:'Through'},
           {label:'Into',value:'Into'},
           {label:'Across',value:'Across'},
           {label:'Down',value:'Down'},
         ],
         answers8:[
           {label:'In',value:'In'},
           {label:'Across',value:'Across'},
           {label:'Down',value:'Down'},
           {label:'On',value:'On'},
         ],
         answers9:[
           {label:'Between',value:'Between'},
           {label:'On',value:'On'},
           {label:'Across',value:'Across'},
           {label:'Through',value:'Through'},

         ],
         answers10:[
           {label:'Over',value:'Over'},
           {label:'Under',value:'Under'},
           {label:'Down',value:'Down'},
           {label:'Up',value:'Up'},
         ],
         answers11:[
           {label:'To',value:'To'},
           {label:'Across',value:'Across'},
           {label:'On',value:'On'},
           {label:'Under',value:'Under'},
         ],
         answers12:[
           {label:'To',value:'To'},
           {label:'On',value:'On'},
           {label:'Down',value:'Down'},
           {label:'Under',value:'Under'},
          ],
         answers13:[
           {label:'Under',value:'Under'},
           {label:'On',value:'On'},
           {label:'Next to',value:'Next to'},
           {label:'To ',value:'To'},
         ],
         answers14:[
           {label:'Up',value:'Up'},
           {label:'Around',value:'Around'},
           {label:'Below',value:'Below'},
           {label:'Across',value:'Across'},
         ],
         answers15:[
           {label:'Up',value:'Up'},
           {label:'Far',value:'Far'},
           {label:'Between',value:'Between'},
           {label:'Among',value:'Among'},
         ],
         answers16:[
           {label:'Between',value:'Between'},
           {label:'Around',value:'Around'},
           {label:'To',value:'To'},
           {label:'Behind ',value:'Behind '},
         ],
         answers17:[
           {label:'Out',value:'Out'},
           {label:'Around',value:'Around'},
           {label:'Under',value:'Under'},
           {label:'Among ',value:'Among'},
         ],
         answers18:[
           {label:'Under',value:'Under'},
           {label:'Up',value:'Up'},
           {label:'Among ',value:'Among'},
           {label:'Out',value:'Out'},
         ],
         answers19:[
           {label:'Under',value:'Under'},
           {label:'Down',value:'Down'},
           {label:'Out',value:'Out'},
           {label:'In front of',value:'In front of'},
         ],
         answers20:[
           {label:'Through',value:'Through'},
           {label:'Near',value:'Near'},
           {label:'Over',value:'Over'},
           {label:'In ',value:'In'},
         ],
         answers21:[
           {label:'Far',value:'Far'},
           {label:'In ',value:'In'},
           {label:'Between',value:'Between'},
           {label:'Among',value:'Among'},
         ],
         answers22:[
           {label:'Beside',value:'Beside'},
           {label:'Through',value:'Through'},
           {label:'Around',value:'Around'},
           {label:'Out',value:'Out'},
         ],
       },

      ],
  }),
  watch:{
    pregunta1(val){
      if(val!='____') {
        if (val==='Above') {
          this.resultado1 = true;
          this.correctas++;
          this.mensaje1 = 'Correct Answer';
          this.active1 = true;
        } else {
          this.resultado1 = false;
          this.mensaje1 = 'Incorrect Answer';
          this.active1 = true;
        }
      }
    },
    pregunta2(val){
      if(val!='____') {
        if (val==='Under') {
          this.resultado2 = true;
          this.correctas++;
          this.mensaje2 = 'Correct Answer';
          this.active2 = true;
        } else {
          this.resultado2 = false;
          this.mensaje2 = 'Incorrect Answer';
          this.active2 = true;
        }
      }
    },
    pregunta3(val){
      if(val!='____') {
        if (val==='Behind') {
          this.resultado3 = true;
          this.correctas++;
          this.mensaje3 = 'Correct Answer';
          this.active3 = true;
        } else {
          this.resultado3 = false;
          this.mensaje3 = 'Incorrect Answer';
          this.active3 = true;
        }
      }
    },
    pregunta4(val){
      if(val!='____') {
        if (val==='Across') {
          this.resultado4 = true;
          this.correctas++;
          this.mensaje4 = 'Correct Answer';
          this.active4 = true;
        } else {
          this.resultado4 = false;
          this.mensaje4 = 'Incorrect Answer';
          this.active4 = true;
        }
      }
    },
    pregunta5(val){
      if(val!='____') {
        if (val==='Down') {
          this.resultado5 = true;
          this.correctas++;
          this.mensaje5 = 'Correct Answer';
          this.active5 = true;
        } else {
          this.resultado5 = false;
          this.mensaje5 = 'Incorrect Answer';
          this.active5 = true;
        }
      }
    },
    pregunta6(val){
      if(val!='____') {
        if (val==='Into') {
          this.resultado6 = true;
          this.correctas++;
          this.mensaje6 = 'Correct Answer';
          this.active6 = true;
        } else {
          this.resultado6 = false;
          this.mensaje6 = 'Incorrect Answer';
          this.active6 = true;
        }
      }
    },
    pregunta7(val){
      if(val!='____') {
        if (val==='Through') {
          this.resultado7 = true;
          this.correctas++;
          this.mensaje7 = 'Correct Answer';
          this.active7 = true;
        } else {
          this.resultado7 = false;
          this.mensaje7 = 'Incorrect Answer';
          this.active7 = true;
        }
      }
    },
    pregunta8(val){
      if(val!='____') {
        if (val==='In') {
          this.resultado8 = true;
          this.correctas++;
          this.mensaje8 = 'Correct Answer';
          this.active8 = true;
        } else {
          this.resultado8 = false;
          this.mensaje8 = 'Incorrect Answer';
          this.active8 = true;
        }
      }
    },
    pregunta9(val){
      if(val!='____') {
        if (val==='Between') {
          this.resultado9 = true;
          this.correctas++;
          this.mensaje9 = 'Correct Answer';
          this.active9 = true;
        } else {
          this.resultado9 = false;
          this.mensaje9 = 'Incorrect Answer';
          this.active9 = true;
        }
      }
    },
    pregunta10(val){
      if(val!='____') {
        if (val==='Over') {
          this.resultado10 = true;
          this.correctas++;
          this.mensaje10 = 'Correct Answer';
          this.active10 = true;
        } else {
          this.resultado10 = false;
          this.mensaje10 = 'Incorrect Answer';
          this.active10 = true;
        }
      }
    },
    pregunta11(val){
      if(val!='____') {
        if (val==='To') {
          this.resultado11 = true;
          this.correctas++;
          this.mensaje11 = 'Correct Answer';
          this.active11 = true;
        } else {
          this.resultado11 = false;
          this.mensaje11 = 'Incorrect Answer';
          this.active11 = true;
        }
      }
    },
    pregunta12(val){
      if(val!='____') {
        if (val==='On') {
          this.resultado12 = true;
          this.correctas++;
          this.mensaje12 = 'Correct Answer';
          this.active12 = true;
        } else {
          this.resultado12 = false;
          this.mensaje12 = 'Incorrect Answer';
          this.active12 = true;
        }
      }
    },
    pregunta13(val){
      if(val!='____') {
        if (val==='Next to') {
          this.resultado13 = true;
          this.correctas++;
          this.mensaje13 = 'Correct Answer';
          this.active13 = true;
        } else {
          this.resultado13 = false;
          this.mensaje13 = 'Incorrect Answer';
          this.active13 = true;
        }
      }
    },
    pregunta14(val){
      if(val!='____') {
        if (val==='Below') {
          this.resultado14 = true;
          this.correctas++;
          this.mensaje14 = 'Correct Answer';
          this.active14 = true;
        } else {
          this.resultado14 = false;
          this.mensaje14 = 'Incorrect Answer';
          this.active14 = true;
        }
      }
    },
    pregunta15(val){
      if(val!='____') {
        if (val==='Up') {
          this.resultado15 = true;
          this.correctas++;
          this.mensaje15 = 'Correct Answer';
          this.active15 = true;
        } else {
          this.resultado15 = false;
          this.mensaje15= 'Incorrect Answer';
          this.active15 = true;
        }
      }
    },
    pregunta16(val){
      if(val!='____') {
        if (val==='Around') {
          this.resultado16 = true;
          this.correctas++;
          this.mensaje16 = 'Correct Answer';
          this.active16 = true;
        } else {
          this.resultado16 = false;
          this.mensaje16 = 'Incorrect Answer';
          this.active16= true;
        }
      }
    },
    pregunta17(val){
      if(val!='____') {
        if (val==='Out') {
          this.resultado17 = true;
          this.correctas++;
          this.mensaje17 = 'Correct Answer';
          this.active17 = true;
        } else {
          this.resultado17 = false;
          this.mensaje17 = 'Incorrect Answer';
          this.active17= true;
        }
      }
    },
    pregunta18(val){
      if(val!='____') {
        if (val==='Among') {
          this.resultado18 = true;
          this.correctas++;
          this.mensaje18 = 'Correct Answer';
          this.active18 = true;
        } else {
          this.resultado18 = false;
          this.mensaje18 = 'Incorrect Answer';
          this.active18= true;
        }
      }
    },
    pregunta19(val){
      if(val!='____') {
        if (val==='In front of') {
          this.resultado19 = true;
          this.correctas++;
          this.mensaje19 = 'Correct Answer';
          this.active19 = true;
        } else {
          this.resultado19 = false;
          this.mensaje19 = 'Incorrect Answer';
          this.active19= true;
        }
      }
    },
    pregunta20(val){
      if(val!='____') {
        if (val==='Near') {
          this.resultado20 = true;
          this.correctas++;
          this.mensaje20 = 'Correct Answer';
          this.active20 = true;
        } else {
          this.resultado20 = false;
          this.mensaje20 = 'Incorrect Answer';
          this.active20= true;
        }
      }
    },
    pregunta21(val){
      if(val!='____') {
        if (val==='Far') {
          this.resultado21 = true;
          this.correctas++;
          this.mensaje21 = 'Correct Answer';
          this.active21 = true;
        } else {
          this.resultado21 = false;
          this.mensaje21 = 'Incorrect Answer';
          this.active21= true;
        }
      }
    },
    pregunta22(val){
      if(val!='____') {
        if (val==='Beside') {
          this.resultado22 = true;
          this.correctas++;
          this.mensaje22 = 'Correct Answer';
          this.active22 = true;
        } else {
          this.resultado22 = false;
          this.mensaje22 = 'Incorrect Answer';
          this.active22= true;
        }
      }
    },
  },
  methods:{
    reset() {
      this.pregunta1='____';
      this.mensaje1='';
      this.active1=false;
      this.pregunta2='____';
      this.mensaje2='';
      this.active2=false;
      this.pregunta3='____';
      this.mensaje3='';
      this.active3=false;
      this.pregunta4='____';
      this.mensaje4='';
      this.active4=false;
      this.pregunta5='____';
      this.mensaje5='';
      this.active5=false;
      this.pregunta6='____';
      this.mensaje6='';
      this.active6=false;
      this.pregunta7='____';
      this.mensaje7='';
      this.active7=false;
      this.pregunta8='____';
      this.mensaje8='';
      this.active8=false;
      this.pregunta9='____';
      this.mensaje9='';
      this.active9=false;
      this.pregunta10='____';
      this.mensaje10='';
      this.active10=false;
      this.pregunta11='____';
      this.mensaje11='';
      this.active11=false;
      this.pregunta12='____';
      this.mensaje12='';
      this.active12=false;
      this.pregunta13='____';
      this.mensaje13='';
      this.active13=false;
      this.pregunta14='____';
      this.mensaje14='';
      this.active14=false;
      this.pregunta15='____';
      this.mensaje15='';
      this.active15=false;
      this.pregunta16='____';
      this.mensaje16='';
      this.active16=false;
      this.pregunta17='____';
      this.mensaje17='';
      this.active17=false;
      this.pregunta18='____';
      this.mensaje18='';
      this.active18=false;
      this.pregunta19='____';
      this.mensaje19='';
      this.active19=false;
      this.pregunta20='____';
      this.mensaje20='';
      this.active20=false;
      this.pregunta21='____';
      this.mensaje21='';
      this.active21=false;
      this.pregunta22='____';
      this.mensaje22='';
      this.active22=false;
      this.correctas=0;

      }
  }

}
</script>

<style scoped>
.title{
  color: #140a32;
  font-weight: bold;
  padding-top: 5%;

}
.sub{
  text-align: left;
  padding-left: 6%;
}
.answer{
  color: #150651;
  font-weight: bold;
}
.correcto{
  padding-left: 6%;
  font-size:large;
  font-weight: bold;
  color: #4CAF50;
}
.incorrect{
  padding-left: 6%;
  color: #FF5252;
  font-weight: bold;
}
.hit{
  color: #150651;
  font-weight: bold;
}

</style>