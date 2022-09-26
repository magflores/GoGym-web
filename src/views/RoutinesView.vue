<template>
  <div
    :style="{backgroundColor: variant.color}"
    class="color-box"
  >
    <v-spacer/>
    <v-container>
      <v-row class="align-center text-center justify-center">
        <v-col>
        <v-card
          color="#D1FD7A"
        >
          <v-tabs
              background-color="#D1FD7A"
              centered
              light
              color="black"
              grow
              hide-slider
          >
            <v-tab>Routines</v-tab>
            <v-tab>Exercises</v-tab>

          </v-tabs>
        </v-card>
        </v-col>
      </v-row>


      <v-row>
        <v-btn
          text
          depressed
          left

        >
          All Routines
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
            text
            depressed
            left
        >
          My Routines
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
            text
            depressed
            left
        >
          Favourites
        </v-btn>
      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  name: 'RoutinesView',
  data: () => ({
    user: {},
    variant: {
      color: '#D1FD7A',
    },
  }),
}
</script>

<style>
/*v-btn{*/
/*  font: normal normal normal 40px/50px Rambla;*/
/*}*/
h2 {
  color: black;
  font: normal normal bold 30px Rambla;
}
</style>