<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex white--text text-center"
        flat
        tile
    >
      <v-card-title class=" white--text">
        <strong class="subheading">About Us!</strong>

        <v-spacer></v-spacer>

        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            color="white"
            dark
            icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>GoGym</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'BottomFooter',
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