<template>
  <v-footer
      app
      dark
      padless
      class="footer"
  >
    <v-card
        class="flex white--text text-center"
        flat
        tile
    >
      <v-card-title class=" white--text">
        <router-link to="/aboutus" class="routerLink" style="text-decoration: none">
          <v-btn color="#1C1C1C" x-large elevation="0" class="subheading">About Us!</v-btn>
        </router-link>

        <v-spacer></v-spacer>
        <router-link to="/comingsoon" class="routerLink" style="text-decoration: none">
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              color="white"
              dark
              icon
              height="30px"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
          </router-link>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>GoGym</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.footer {
  bottom: 0;
  position: absolute;
  height: auto;
}
.subheading {
  font-weight: bold;
}
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
