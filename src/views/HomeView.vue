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
    </v-container>
    <v-container>
      <v-row class="align-center">
        <v-col>
          <v-btn
              class="mx-3 white--text "
              dark
              icon
          >
            <v-icon light size="24px" >
              mdi-tick
            </v-icon>
          </v-btn>
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