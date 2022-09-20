<template>
  <v-app-bar app
             color="white"
             elevation="0"
  ><div class="d-flex align-center">
    <a href="/home">
      <v-img :src="require('../assets/GoGym-icon.png')"
             max-height="160"
             max-width="160"
      />
    </a>
  </div>
    <h2>GoGym!</h2>
    <v-spacer/>
    <v-btn
        text
        padless color="black"
    >
      Join Us
    </v-btn>

    <h2
        style="margin-right: 10px; margin-left: 10px"

    >
      |
    </h2>

    <v-btn
        text
        padless color="black"
    >
      Log In
    </v-btn>

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
/*v-btn{*/
/*  font: normal normal normal 40px/50px Rambla;*/
/*}*/
h2 {
  color: black;
  font: normal normal bold 30px Rambla;
}
</style>