<template>
  <d-layout>
    <template v-slot:title>
      New Routine
    </template>
    <template v-slot:sidebar>
      <v-list class="side-bar d-flex flex-column align-center"
              height="100%">
        <v-list-item>
          <h2>Name: </h2>
        </v-list-item>
        <v-list-item>
          <v-text-field/>
        </v-list-item>
        <v-list-item>
          <h2>Difficulty:
          </h2>
        </v-list-item>
        <v-list-item>
          <v-container fluid>
            <v-combobox
                v-model="model"
                :items="items"
                :search-input.sync="search"
                hide-selected
                hint="Select one"
                persistent-hint
                small-chips
            >
            </v-combobox>
          </v-container>
        </v-list-item>
        <v-list-item>
          <h2>Category:
          </h2>
        </v-list-item>
        <v-list-item>
          <v-container fluid>
            <v-combobox
                v-model="model2"
                :items="items2"
                :search-input.sync="search"
                hide-selected
                hint="Select one"
                persistent-hint
            >
            </v-combobox>
          </v-container>
        </v-list-item>
        <v-list-item>
          <h2>Time:</h2>
          <v-text-field/>
          <h2>s</h2>
        </v-list-item>
<!--        <v-list-item>-->
<!--          <v-btn class="form-font" text>-->
<!--            <v-icon>mdi-delete</v-icon>-->
<!--            <div>Delete</div>-->
<!--          </v-btn>-->
<!--        </v-list-item>-->
      </v-list>
    </template>
    <template v-slot:content>
      <v-card elevation="1"
              class="justify-center rounded-xl my-5">
        <v-card-title class="justify-center card-title">
          Warm up
        </v-card-title>
      </v-card>
      <v-card elevation="1"
              class="justify-center rounded-xl my-5">
        <v-card-title class="justify-center card-title">
          First round
        </v-card-title>
        <v-card-text class="card-content">
          <v-layout justify-center>
            <v-icon
                color="black"
            >mdi-plus</v-icon>
          </v-layout>
        </v-card-text>
      </v-card>

      <v-card elevation="1"
              class="justify-center rounded-xl my-5">
        <v-card-title class="justify-center card-title">
          Cool down
        </v-card-title>
      </v-card>
      <v-layout justify-center>
      <router-link to="/routines" class="routerLink">
        <v-btn
            rounded
            style="margin-right: 30px"
            width="300"
            color="#C8C8C8"
        >
          CANCEL
        </v-btn>
      </router-link>
        <v-btn
            width="300"
            rounded
            color="#F8C256"

        >
          SAVE</v-btn>
      </v-layout>
    </template>
  </d-layout>
</template>

<script>
import detailedLayout from "@/components/detailedLayout";
import {mapState} from "pinia";

export default {
  name: "NewRoutineView",
  components: {
    DLayout: detailedLayout,
  },
  data: () => ({
    items: ['Easy', 'Intermediate', 'Hard'],
    items2: ['Aerobic', 'Relax', 'no se si es por aca je'],
    model: null,
    model2: null,
    search: null,
  }),
  computed: {

  },
  // watch: {
  //   model (val) {
  //     if (val.length > 5) {
  //       this.$nextTick(() => this.model.pop())
  //     }
  //   },
  // },
}
</script>

<style scoped>

.card-title {
  background-color: #F8C256;
}

.card-content {
  background-color: #FFEFCE;
}

.side-bar{
  background-color: #F5F3F3;
}

.routerLink{
  text-decoration: none;
}
</style>