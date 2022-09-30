<template>
  <v-app-bar app
             color="white"
             elevation="0"
             clipped-left
             height="80px"
  ><div class="d-flex align-center">
    <a href="/" style="margin-right: 10px; margin-left: 10px">
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

<!--    <div-->
<!--        v-if="this.$store.getters.isLoggedIn"-->
<!--    >-->
<!--      <h2-->
<!--          v-if="this.$store.getters.isLoggedIn"-->
<!--      >-->
<!--        Bienvenido {{this.$getName }}-->
<!--      </h2>-->
<!--    </div>-->
<!--    <h2-->
<!--        v-if="this.$store.getters.isLoggedIn"-->
<!--        style="margin-right: 10px; margin-left: 10px"-->

<!--    >-->
<!--      |-->
<!--    </h2>-->
<!--    <div>-->
<!--      <v-btn-->
<!--          v-if="this.$store.getters.isLoggedIn"-->
<!--          text-->
<!--          padless color="black"-->
<!--          class="rambla-font"-->
<!--          @click="logOut"-->
<!--      >Cerrar Sesión</v-btn>-->
<!--    </div>-->

  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'AppHeader',
  data: () => ({
    user: {},
  }),
  computed: {
    ...mapGetters("user", {
      $getName: "getName",
      $isUserLoggedIn: "isUserLoggedIn",
    }),
  },
  methods: {
    ...mapActions("user", {
      $updateUser: "update",
      $setUserIsLoggedIn: "setIsLoggedIn",
    }),
    logOut() {
      this.$store.commit("setIsLoggedIn", false);
      if (this.$isUserLoggedIn) {
        this.$setUserIsLoggedIn(false);
      }
      setTimeout(() => this.$router.push('/'), 500);
    },
  }
}
</script>

<style>
  .rambla-font {
    font-family: 'Rambla', sans-serif;
    font-weight: bold;

  }
</style>