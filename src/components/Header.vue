<template>
  <v-app-bar app color="white" elevation="0" clipped-left height="80px" absolute>
    <div class="d-flex align-center">
      <router-link to="/" style="margin-right: 10px; margin-left: 10px">
        <v-img :src="require('../assets/GoGym-icon.png')" max-height="70" max-width="70"/>
      </router-link>
    </div>
    <h1 class="rambla-font" style="font-size: 220%">GoGym!</h1>
    <v-spacer/>
    <div class="d-flex align-center" v-if="!$isLoggedIn">
      <v-btn text padless color="black" class="rambla-font" :to="{name: 'register'}">
        Join Us
      </v-btn>
      <h2 style="margin-right: 10px; margin-left: 10px">
        |
      </h2>
      <v-btn text padless color="black" class="rambla-font" :to="{name: 'login'}">
        Log In
      </v-btn>
    </div>
    <div class="d-flex align-center" v-else-if="$isLoggedIn && user != null">
      <h2 style="margin-right: 10px; margin-left: 10px; font-size: 200%">
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
  data: () => ({
    displayLog: true,
  }),
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