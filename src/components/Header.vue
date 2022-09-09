<!--<template>-->
<!--  <v-app-bar app-->
<!--             padless color="#EFEEF1"-->
<!--             elevation="0"-->
<!--  ><div class="d-flex align-center">-->
<!--    <a href="/home">-->
<!--      <v-img :src="require('../assets/GoGym-icon.png')"-->
<!--             max-height="160"-->
<!--             max-width="160"-->

<!--      />-->
<!--    </a>-->
<!--  </div>-->
<!--    <v-spacer/>-->
<!--    <v-btn-->
<!--        text-->
<!--        padless color="#2A537A"-->

<!--    >-->
<!--      Join Us-->
<!--    </v-btn>-->

<!--&lt;!&ndash;    <h2&ndash;&gt;-->
<!--&lt;!&ndash;        style="margin-right: 10px; margin-left: 10px"&ndash;&gt;-->

<!--&lt;!&ndash;    >&ndash;&gt;-->
<!--&lt;!&ndash;      |&ndash;&gt;-->
<!--&lt;!&ndash;    </h2>&ndash;&gt;-->

<!--    <v-btn-->
<!--        text-->
<!--        padless color="#2A537A"-->

<!--    >-->
<!--      Log In-->
<!--    </v-btn>-->
<!--&lt;!&ndash;  <div id="header">&ndash;&gt;-->
<!--&lt;!&ndash;    <img alt="GoGym logo" src="./assets/GoGym-icon.png">&ndash;&gt;-->
<!--&lt;!&ndash;    <h1>GoGym</h1>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--  </v-app-bar>-->
<!--</template>-->
<template>
  <v-app-bar app
             padless color="#EFEEF1"
             elevation="0">


      <v-img :src="require('../assets/GoGym-icon.png')"
             max-height="160"
             max-width="160"

      />


    <v-spacer/>
    <!-- una vez que el usuario ingresa -->
    <v-btn
        text
        padless color="#2A537A"
        to="/register"
    >Registrate</v-btn>
    <h2
    >
      |
    </h2>
    <v-btn
        text
        padless color="#2A537A"
        to="/signin"
    >Ingresá</v-btn>

    <h2

        style="margin-right: 10px; margin-left: 10px"

    >
      |
    </h2>
  </v-app-bar>
</template>
<script>
export default {
  name: 'AppHeader',
  data: () => ({
    user: {},
  }),
}
</script>

<style>
</style>