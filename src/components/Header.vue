<template>
  <v-app-bar app color="white" elevation="0" clipped-left height="80px" absolute>
    <div class="d-flex align-center">
      <router-link to="/" style="margin-right: 10px; margin-left: 10px; color: #2E2D29">
        <v-img :src="require('../assets/GoGym-icon.png')" max-height="65" max-width="65"/>
      </router-link>
    </div>
    <h1 class="rambla-font" style="font-size: 220%; color: #2E2D29;">GoGym!</h1>
    <v-spacer/>
    <div class="d-flex align-center" v-if="!$isLoggedIn">
      <v-btn text syle="color: #2E2D29; font-size: 105%" class="rambla-font" :to="{name: 'register'}">
        Join Us
      </v-btn>
      <h2 style="margin-right: 10px; margin-left: 10px; color: #2E2D29">
        |
      </h2>
      <v-btn text syle="color: #2E2D29; font-size: 105%" class="rambla-font" :to="{name: 'login'}">
        Log In
      </v-btn>
    </div>
    <div class="d-flex align-center" v-else-if="$isLoggedIn && user != null">
      <h2 style="margin-right: 10px; margin-left: 10px; font-size: 200%; color: #2E2D29">
        Welcome, {{ `${user.firstName} ${user.lastName}` }}
      </h2>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" color="#F8C256" fab>
            <v-img :src="user.avatarUrl" max-width="35" min-width="35"/>
          </v-btn>
        </template>
        <v-list>
          <v-list-item :to="{name: 'profile'}">
            <v-list-item-title>
              My Account
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>
              Log Out
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import {mapActions, mapState} from 'pinia';
import {useUserStore} from "@/stores/UserStore";

export default {
  name: 'AppHeader',
  data(){
    return {
      displayLog: true,
    }
  },

  computed: {
    ...mapState(useUserStore, ['user']),
    ...mapState(useUserStore, {$isLoggedIn: 'isLoggedIn'}),
  },
  methods: {
    ...mapActions(useUserStore, {
      $getCurrentUser: 'getCurrentUser',
      $login: 'login',
      $logout: 'logout',
    }),
    async logout() {
      await this.$logout()
    },
    async getCurrentUser() {
      await this.$getCurrentUser()
    }
  }
}

</script>

<style>
.rambla-font {
  font-family: 'Rambla', sans-serif;
  font-weight: bold;
  font-style: italic;

}
</style>