<template>
  <div>

    <v-navigation-drawer
        clipped absolute permanent :style="{backgroundColor: variant.color}"

    >
      <v-col/>
      <v-col/>

      <div class="d-flex flex-column align-center mb-6">
        <v-row>
          <v-btn
              text
              depressed
              left
              x-large
          >
            All Routines
          </v-btn>
        </v-row>
        <v-row>
          <v-btn
              text
              depressed
              left
              x-large
          >
            My Routines
          </v-btn>
        </v-row>
        <v-row>
          <v-btn
              text
              depressed
              left
              x-large
          >
            Favourites
          </v-btn>
        </v-row>
      </div>
    </v-navigation-drawer>


        <v-card
          color="#D1FD7A"
        >
          <v-row  style="margin-top: 1px;margin-left: 200px">
          <v-tabs
              background-color="#D1FD7A"
              centered
              light
              color="black"
              grow
              hide-slider
              align-with-title
          >
            <v-tab>
              Routines
            </v-tab>

            <v-tab>Exercises</v-tab>

          </v-tabs>
          </v-row>
        </v-card>
    <v-row>
      <v-col>
<!--        COMENTARIO: ESTO ESTA HARDCODEADO, LO CAMBIAMOS CUANDO ESTE LA API-->

        <v-row  style="margin-top: 20px; margin-bottom: 20px; margin-left: 270px">
          <v-col>
            <a href="/routinedetailed">
              <v-img :src="require('../assets/routines/routines1.png')" max-width="250px"/>
            </a>
          </v-col>

          <v-col>
            <a href="/routinedetailed">
              <v-img :src="require('../assets/routines/routines2.png')" max-width="250px"/>
            </a>
          </v-col>

          <v-col>
            <a href="/routinedetailed">
              <v-img :src="require('../assets/routines/routines3.png')" max-width="250px"/>
            </a>
          </v-col>

          <v-col>
            <a href="/routinedetailed">
              <v-img :src="require('../assets/routines/routines4.png')" max-width="250px"/>
            </a>
          </v-col>

          <v-col>
            <a href="/routinedetailed">
              <v-img :src="require('../assets/routines/routines5.png')" max-width="250px"/>
            </a>
          </v-col>

          <v-col>
            <a href="/routinedetailed">
              <v-img :src="require('../assets/routines/routines6.png')" max-width="250px"/>
            </a>
          </v-col>

          <v-col>
            <a href="/routinedetailed">
              <v-img :src="require('../assets/routines/routines1.png')" max-width="250px"/>
            </a>
          </v-col>

          <v-col>
            <a href="/routinedetailed">
              <v-img :src="require('../assets/routines/routines2.png')" max-width="250px"/>
            </a>
          </v-col>

        </v-row>
      </v-col>
    </v-row>

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
    expand: false,
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