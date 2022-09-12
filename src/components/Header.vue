<template>
  <v-app-bar app
             padless color="#EFEEF1"
             elevation="0"
  ><div class="d-flex align-center">
    <a href="/home">
      <v-img :src="require('../assets/GoGym-icon.png')"
             max-height="160"
             max-width="160"

      />
    </a>
  </div>
    <v-spacer/>
    <v-btn
        text
        padless color="#2A537A"

    >
      Join Us
    </v-btn>

<!--    <h2-->
<!--        style="margin-right: 10px; margin-left: 10px"-->

<!--    >-->
<!--      |-->
<!--    </h2>-->

    <v-btn
        text
        padless color="#2A537A"

    >
      Log In
    </v-btn>
<!--  <div id="header">-->
<!--    <img alt="GoGym logo" src="./assets/GoGym-icon.png">-->
<!--    <h1>GoGym</h1>-->
<!--  </div>-->
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