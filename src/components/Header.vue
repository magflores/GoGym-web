<template>
  <v-app-bar app
             style="padding-top: 4px"
             color="white"
             elevation="0"
             clipped-left
  ><div class="d-flex align-center">
    <a href="/">
      <v-img :src="require('../assets/GoGym-icon.png')"
             max-height="120"
             max-width="120"
      />
    </a>
  </div>
    <h1>GoGym!</h1>
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