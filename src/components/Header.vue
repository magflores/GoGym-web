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
        v-if="!isLoggedIn"
        text
        padless color="black"
        href="/register"
        class="rambla-font"
    >
      Join Us
    </v-btn>

    <h2
        v-if="!isLoggedIn"
        style="margin-right: 10px; margin-left: 10px"

    >
      |
    </h2>

    <v-btn
        v-if="!isLoggedIn"
        text
        padless color="black"
        href="/login"
        class="rambla-font"
    >
      Log In
    </v-btn>

    <div
        v-if="isLoggedIn"
    >
      <h2
          v-if="isLoggedIn"
      >
        Bienvenido {{this.user.name}}
      </h2>
    </div>
    <h2
        v-if="isLoggedIn"
        style="margin-right: 10px; margin-left: 10px"

    >
      |
    </h2>
    <div>
      <v-btn
          v-if="isLoggedIn"
          text
          padless color="black"
          class="rambla-font"
          @click="logOut"
      >Cerrar Sesión</v-btn>
    </div>

  </v-app-bar>
</template>

<script>
import{useStore} from "@/store/module/user";
import {mapState, mapActions} from 'pinia';

export default {
  name: 'AppHeader',
  data: () => ({
    user: {},
    isLoggedIn: false,
  }),
  computed: {
    ...mapState(useStore, {
      isLoggedIn: state => state.isLoggedIn(true),
      getName: state => state.getName,
    }),

  },
  async updateLoggedIn() {
    this.isLoggedIn = true;
  },

  async getName() {
    this.user = await this.getName();
  },

  methods: {
    ...mapActions(useStore, {
        setIsLoggedIn: state => state.setIsLoggedIn,
        setName: state => state.setName,
    }),

    logOut(){
      this.$store.commit("setIsLoggedIn", false);
      if (this.isLoggedIn) {
        this.setIsLoggedIn(false);
      }
      setTimeout(() => this.$router.push('/'), 500);
    },
  },
}
</script>

<style>
  .rambla-font {
    font-family: 'Rambla', sans-serif;
    font-weight: bold;

  }
</style>