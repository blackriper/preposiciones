<template xmlns="http://www.w3.org/1999/html">
  <v-app id="app">
    <v-navigation-drawer
        app
        permanent
        width="23%"
        >
         <v-list-item>
             <v-img
              id="logo"
              src="https://firebasestorage.googleapis.com/v0/b/preposiciones-684ea.appspot.com/o/imagenes%2FLogo.jpg?alt=media&token=42553c35-99b5-4e02-8b19-2960763221c9"
              max-height="290"
              max-width="100"
             ></v-img>
          </v-list-item>

      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>
            <h5 >UNIVERSIDAD DEL CENTRO DEL BAJÍO</h5>
          </v-list-item-title>
          <v-list-item-subtitle><h3>Licenciatura en Pedagogía.</h3></v-list-item-subtitle>
            <v-list-item-subtitle><h4>Taller de Material Didáctico.</h4></v-list-item-subtitle>
          <v-list-item-subtitle><h5 class="nombre">Elaborado por: María Neli Hernández Cañada</h5></v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group  v-model="selectedItem" color="#2196F3">
          <v-list-item  to="/">
            <v-list-item-icon>
              <v-icon>article</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Introduction</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link  to="/about">
            <v-list-item-icon>
              <v-icon>headphones</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Listening</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link  to="">
            <v-list-item-icon>
              <v-icon>local_movies</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Understanding</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group
              :value="true"
              prepend-icon="task"
          >
            <template v-slot:activator>
              <v-list-item-title>Activities</v-list-item-title>
            </template>

            <v-list-item link  to="/activity1">
              <v-list-item-content>
                <v-list-item-title>Activity 1</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link  to="/activity2">
              <v-list-item-content>
                <v-list-item-title>Activity 2</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link  to="">
              <v-list-item-content>
                <v-list-item-title>Activity 3</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="color">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
 </template>

  <script>
    export default {
      data: () => ({
        selectedItem: 0
       }),
    }
  </script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  }
h5{
  color: #150651;
  font-weight: bold;
}
h3 ,h4{
  color: #140a32;
}
.nombre{
  color: #6a6284;
  font-style: italic;

}
#logo {
  left: 35%;
}
.color{
  background-color: #eeeeee;
}

</style>
