<template>
  <v-app-bar app
             color="white"
             elevation="0"
             clipped-left
             height="80px"
  >
    <div class="d-flex align-center">
      <a href="/" style="margin-right: 20px; margin-left: 10px">
        <v-img :src="require('../assets/GoGym-icon.png')"
               max-height="70"
               max-width="70"
        />
      </a>
    </div>
    <h1 style="font-size: 220%">GoGym!</h1>
    <v-spacer/>
    <v-btn
        text
        padless color="black"
        href="/register"
        class="rambla-font"
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
        href="/login"
        class="rambla-font"
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
  .rambla-font {
    font-family: 'Rambla', sans-serif;
    font-weight: bold;

  }
</style>