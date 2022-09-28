<template>
  <div>
    <v-container>
      <v-row class="text-center" style="margin-top: 40px"  >
        <v-col>
          <h1 class="text--black"> Welcome to GoGym! </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="hero">
        <v-row class="text-center" >
          <v-col>
            <h2 class="text--white"> Find workout routines made by others, edit them or make your own!</h2>
          </v-col>
        </v-row>
      <v-row>
        <v-btn
            class="mx-3 white--text "
            light
            icon
        >
          <v-icon light size="24px" >
            mdi-tick
          </v-icon>
        </v-btn>
      </v-row>
    </v-container>

    <v-container>
      <v-row class="align-center">
        <v-spacer></v-spacer>
        <v-col cols="4">
          <v-btn icon
                 x-large
                 height="150px"
                 width="150"
          >
            <v-img :src="require('../assets/check_box_.png')" max-width="150px"/>
          </v-btn>
          <div> choose from 700 routines for your training</div>

        </v-col>

        <v-col cols="4">
          <v-btn icon
                 x-large
                 height="150px"
                 width="150"
          >
            <v-img :src="require('../assets/check_box_.png')" max-width="150px"/>

          </v-btn>
          <div> create your own training routines</div>
        </v-col>

        <v-col cols="3">
          <v-btn icon
                 x-large
                 height="150px"
                 width="150"
          >
            <v-img :src="require('../assets/check_box_.png')" max-width="150px"/>
          </v-btn>
          <div>personalize your training!</div>
        </v-col>

      </v-row>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
.hero {
  background-size: cover;
  background: url('../assets/HomeImage.png') center center;
  height: 650px;
}

h1{
  font: normal normal bold 50px Rambla;
  /*font-size: 50px;*/
}
h2 {
  color: #FFFFFF;
  font: normal normal normal 20px/30px Rambla;
}


</style>