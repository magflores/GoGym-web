<template>
  <v-app id="app">
    <AppHeader/>
    <v-main>
      <router-view :key="$route.path"/>
    </v-main>
    <Footer/>
  </v-app>
</template>


<script>
// import AppHeader from "@/components/Header";
// import Footer from "@/components/Footer";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Footer,
    AppHeader
  }
}
</script>

<style lang="scss">
//@import url('https://fonts.googleapis.com/css?family=Rambla&display=swap');
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*font-family: 'Rambla', cursive;*/

  //font-family: 'Rambla',serif;
  background-color: #FFFFFF;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
}
;

</style>

