<template>
  <div>
    <v-container style="padding-top: 0; padding-bottom: 0.65%">
        <v-row class="text-center">
          <v-col v-if="!$isLoggedIn" style="padding-top: 0.5%">
            <h1> Welcome to GoGym! </h1>
          </v-col>

          <v-col cols="5" class="text-right" v-if="$isLoggedIn" style="margin-bottom: 2%; padding-right: 0; padding-left:0;">
            <router-link to="/routines" class="routerLink">
              <v-btn
                  text
                  padless color="black"
                  class="font"
                  rounded
                  outlined
              >
                Routines
              </v-btn>

            </router-link>
          </v-col>
          <v-col cols="1" style="padding-right: 0; padding-left:0; padding-bottom: 0" v-if="$isLoggedIn">
            <h2
                style="margin-top: 2.5%; margin-right: 0; margin-left: 0;"
            >
              |
            </h2>
            </v-col>
          <v-col cols="5" class="text-left" v-if="$isLoggedIn" style="margin-bottom: 2%; padding-right: 0; padding-left:0;">

            <router-link to="/routines" class="routerLink">
              <v-btn
                  text
                  padless color="black"
                  class="font"
                  rounded
                  outlined
              >
                Exercises
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    <v-container
        fluid
        class="hero"
        style="padding-top: 2%">
      <v-row class="text-center" >
        <v-col>
          <h2 class="title"> Find workout routines made by others, edit them or make your own!</h2>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="margin-top: 0.5%; margin-bottom: 0.3%">
      <v-row
          class="align-center"
          style="margin-bottom: 3px">
        <v-spacer/>
        <v-col
            style="text-align: center"
            cols="4">
          <router-link to="/login" class="routerLink" v-if="!$isLoggedIn">
          <v-btn icon
                 height="150px"
                 width="150"
          >
            <v-icon
                size="1000%"
                color="#606367">
              mdi-checkbox-outline
            </v-icon>
          </v-btn>
          </router-link>

          <router-link to="/routines" class="routerLink" v-else>
            <v-btn icon
                   height="150px"
                   width="150"
            >
              <v-icon
                  size="1000%"
                  color="#606367">
                mdi-checkbox-outline
              </v-icon>
            </v-btn>
          </router-link>
          <v-col>
            <div class="text-container">
              choose from 700 routines for your training
            </div>

          </v-col>
        </v-col>

        <v-col style="text-align: center" cols="4">
          <router-link to="/login" class="routerLink" v-if="!$isLoggedIn">
          <v-btn icon
                 height="150px"
                 width="150"
          >
            <v-icon size="1000%" color="#606367">
              mdi-plus-box-outline
            </v-icon>
          </v-btn>
          </router-link>

          <router-link to="/editroutine" class="routerLink" v-else>
            <v-btn icon
                   height="150px"
                   width="150"
            >
              <v-icon size="1000%" color="#606367">
                mdi-plus-box-outline
              </v-icon>
            </v-btn>
          </router-link>

          <v-col>
            <div class="text-container">
              create your own training routines
            </div>
          </v-col>
        </v-col>

        <v-col style="text-align: center" cols="4">
          <router-link to="/login" class="routerLink" v-if="!$isLoggedIn">
          <v-btn icon
                 height="150px"
                 width="150"
          >
            <v-icon size="1000%" color="#606367">
              mdi-square-edit-outline
            </v-icon>
          </v-btn>
          </router-link>

          <router-link to="/editexercise" class="routerLink" v-else>
            <v-btn icon
                   height="150px"
                   width="150"
            >
              <v-icon size="1000%" color="#606367">
                mdi-square-edit-outline
              </v-icon>
            </v-btn>
          </router-link>

          <v-col>
            <div class="text-container">
              personalize your training!
            </div>
          </v-col>
        </v-col>

      </v-row>

    </v-container>
  </div>
</template>

<script>
// import BottomFooter from "@/components/BottomFooter";
// import AppHeader from "@/components/Header";

import {mapState, mapActions} from "pinia";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: "HomeView",
  data(){
    return{
    displayLog: false,
    }
  },
  computed: {
    ...mapState(useUserStore, ['user']),
    ...mapState(useUserStore, {$isLoggedIn: 'isLoggedIn'}),
  },
  methods: {
    ...mapActions(useUserStore, {
      $getCurrentUser: 'getCurrentUser'}),

    async getCurrentUser() {
      await this.$getCurrentUser()
    },
  }

}
</script>

<style scoped>
.hero {
  background-size: cover;
  background: url('../assets/HomeImage.png') center ;
  height: 770px;
}

h1{
  /*font: normal normal bold 50px Rambla;*/
  font-size: 320%;
  font-weight: bold;
  font-style: italic;
  font-family: 'Rambla', sans-serif;
  color: #1C1C1C;
}
/*h2 {*/
/*  color: #FFFFFF;*/
/*  font: normal normal normal 20px/30px Rambla;*/
/*}*/

.title {
  color: #FFFFFF;
  font: normal normal normal 20px/30px Rambla;
}
.text-container {
  justify-content: center;
  font-size: 110%;
  /*font-weight: bold;*/
  font-family: Rambla, sans-serif;
}

.routerLink{
  text-decoration: none;
}

.font {
  font-size: 35px;
  font-family: 'Rambla', sans-serif;
  font-weight: lighter;
  text-transform: none !important;
}


/*.icon-font {*/
/*  size: 1000%;*/
/*  color: black;*/
/*}*/


</style>