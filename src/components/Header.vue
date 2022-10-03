<template>
  <v-app-bar app
             color="white"
             elevation="0"
             clipped-left
             height="80px"
  >
    <div class="d-flex align-center">
      <router-link to="/" style="
      margin-right: 10px; margin-left: 10px">
        <v-img :src="require('../assets/GoGym-icon.png')"
               max-height="70"
               max-width="70"
        />
      </router-link>
    </div>
    <h1 class="rambla-font"
        style="font-size: 220%">GoGym!</h1>
    <v-spacer/>
    <div
        class="d-flex align-center"
        v-if="displayLog === true"
    >
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
    </div>
    <div
        class="d-flex align-center"
        v-else
    >
      <h2
          style="margin-right: 10px;
          margin-left: 10px; font-size: 200%"
      >
        Welcome, John Doe
      </h2>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              v-bind="attrs"
              v-on="on"
              color="#F8C256"
              fab
          >
            <v-img :src="require('../assets/user-icon.png')"
                   max-width="35"
                   min-width="35"
            />
          </v-btn>
        </template>
        <v-list>
          <v-list-item
              v-for="(item, index) in items"
              :key="index"
          >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
    </div>


  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  data: () => ({
    displayLog: false,
    items: [
      { title: 'My account' },
      { title: 'Home' },
      { title: 'Log out' }
    ],
    user: {},
  }),
}
</script>

<style>
.rambla-font {
  font-family: 'Rambla', sans-serif;
  font-weight: bold;
  font-style: italic;

}
</style>