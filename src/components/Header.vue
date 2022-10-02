<template>
  <v-app-bar app
             color="white"
             elevation="0"
             clipped-left
             height="80px"
  >
    <div class="d-flex align-center">
      <router-link to="/" style="margin-right: 10px; margin-left: 10px">
        <v-img :src="require('../assets/GoGym-icon.png')"
               max-height="70"
               max-width="70"
        />
      </router-link>
    </div>
    <h1 style="font-size: 220%">GoGym!</h1>
    <v-spacer/>
    <router-link to="/register">
      <v-btn
          text
          padless color="black"
          class="rambla-font"
      >
        Join Us
      </v-btn>

    </router-link>

    <h2
        style="margin-right: 10px; margin-left: 10px"
    >
      |
    </h2>

    <router-link to="/login">
      <v-btn
          text
          padless color="black"
          class="rambla-font"
      >
        Log In
      </v-btn>
    </router-link>


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