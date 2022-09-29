<template>
  <div>
    <v-container style="padding-top: 3px">
      <v-row class="text-center">
        <v-col>
          <h1> Welcome to GoGym! </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="hero" style="padding-top: 2%">
        <v-row class="text-center" >
          <v-col>
            <h2> Find workout routines made by others, edit them or make your own!</h2>
          </v-col>
        </v-row>
    </v-container>

    <v-container>
      <v-row class="align-center" style="margin-bottom: 3px">
        <v-spacer></v-spacer>
        <v-col style="text-align: center" cols="4">
          <v-btn icon
                 height="150px"
                 width="150"
          >
            <v-icon size="1000%" color="#606367"> mdi-checkbox-outline </v-icon>

          </v-btn>
          <v-col>
          <div class="text-container">choose from 700 routines for your training</div>

          </v-col>
        </v-col>

        <v-col style="text-align: center" cols="4">
          <v-btn icon
                 height="150px"
                 width="150"
          >

            <v-icon size="1000%" color="#606367">mdi-plus-box-outline</v-icon>
          </v-btn>
          <v-col>
          <div class="text-container"> create your own training routines</div>
          </v-col>
        </v-col>

        <v-col style="text-align: center" cols="4">
          <v-btn icon
                 height="150px"
                 width="150"
          >

            <v-icon size="1000%" color="#606367">mdi-square-edit-outline</v-icon>
          </v-btn>
          <v-col>
          <div class="text-container">personalize your training!</div>
          </v-col>
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
  background: url('../assets/HomeImage.png') center ;
  height: 770px;
}

h1{
  font: normal normal bold 50px Rambla;
  /*font-size: 50px;*/
  /*font-family: 'Roboto', sans-serif;*/
  /*font-weight: bold;*/
}
h2 {
  color: #FFFFFF;
  font: normal normal normal 20px/30px Rambla;
}

.text-container {
  justify-content: center;
  font-size: 110%;
  /*font-weight: bold;*/
  font-family: Rambla, sans-serif;
}


/*.icon-font {*/
/*  size: 1000%;*/
/*  color: black;*/
/*}*/


</style>