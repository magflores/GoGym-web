<template class="font">
  <div>

    <v-navigation-drawer
        clipped absolute permanent :style="{backgroundColor: variant.color}"

    >
      <div class="d-flex flex-column align-center mb-6" >
        <v-row style="margin-top: 100px">
          <v-btn
              text
              depressed
              left
              x-large
              onclick="all = true"
          >
            All Routines
          </v-btn>
        </v-row>
        <v-row style="margin-top: 50px">
          <v-btn
              text
              depressed
              left
              x-large
              onclick="all = false"
          >
            My Routines
          </v-btn>
        </v-row>
        <v-row style="margin-top: 50px">
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
              light
              color="black"
              grow
              hide-slider

          >
            <v-tab>Routines</v-tab>

            <v-tab>Exercises</v-tab>
          </v-tabs>
          </v-row>
        </v-card>
    <v-row>
      <div disabled="!all">
      <v-col>
<!--        COMENTARIO: ESTO ESTA HARDCODEADO, LO CAMBIAMOS CUANDO ESTE LA API-->
        <v-row style="margin-top: 20px; margin-bottom: 20px; margin-left: 350px">
          <v-col cols="8" style="margin-left: 100px">
          <SearchBar/>
          </v-col>
        </v-row>
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
      </div>
    </v-row>

  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
  name: 'RoutinesView',
  components: {SearchBar},
  data: () => ({
    user: {},
    variant: {
    color: '#D1FD7A',
    },
    expand: false,
    all:false,
  }),
}
</script>

<style>

.font {
font-family: Rambla, sans-serif;
font-size: 30px;
}

</style>