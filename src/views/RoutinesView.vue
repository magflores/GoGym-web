<template class="font">
  <div>
    <v-card color="#D1FD7A">
      <v-row style="margin-top: 1px;">
        <v-tabs v-model="tab" background-color="#D1FD7A" light color="black" grow>
          <v-tab v-for="option in tabOptions" :key="option.tab" class="font" @click="resetTitleInTab()">
            {{ option.tab }}
          </v-tab>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="option in tabOptions" :key="option.tab">
              <RoutineLayout>
                <template v-slot:sidebar>
                  <div class="d-flex flex-column align-center mb-6">
                    <v-row style="margin-top: 100px">
                      <v-btn @click="clickAll(option.tab)" text depressed left x-large class="font2"
                             onclick="all = true">
                        All {{ option.tab }}
                      </v-btn>
                    </v-row>
                    <v-row style="margin-top: 50px">
                      <v-btn @click="clickMy(option.tab)" text depressed left x-large onclick="all = false"
                             class="font2">
                        My {{ option.tab }}
                      </v-btn>
                    </v-row>
                    <v-row style="margin-top: 50px">
                      <v-btn @click="clickFavorites()" text depressed left x-large class="font2">
                        Favourites
                      </v-btn>
                    </v-row>
                  </div>
                </template>
                <template v-slot:content>
                  <h2 v-if="All === true">
                    All {{ option.tab }}
                  </h2>
                  <h2 v-else-if="My === true">
                    My {{ option.tab }}
                  </h2>
                  <h2 v-else-if="Fav === true">
                    Favourites
                  </h2>
                  <router-link to="/newRoutine" class="routerLink" v-if="option.tab === 'Routines'">
                    <v-btn style="margin-right: 10px; margin-bottom: 55px" fab color="#F8C256" absolute right bottom
                           large v-if="addIcon === true || My === true">
                      <v-icon color="black">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </router-link>
                  <router-link v-else to="/newexercise">
                    <v-btn style="margin-right: 10px; margin-bottom: 55px" fab color="#F8C256" absolute right bottom
                           v-if="addIcon === true || My === true">
                      <v-icon color="black">
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </router-link>
                  <v-row style="margin-top: 10px; margin-bottom: 20px; margin-left: 250px">
                    <v-col cols="8" style="margin-left: 20px">
                      <SearchBar/>
                    </v-col>
                  </v-row>
                  <div v-if="option.tab === 'Routines' && Fav && loadingFavorites" class="d-flex flex-wrap flex-grow-1">
                    <!--                    LOADING FAV ROUTINES-->
                    <v-skeleton-loader v-for="loader in routineLoaders" :key="loader.key" class="ma-2" min-width="30%" type="card"/>
                  </div>
                  <div v-if="option.tab === 'Routines' && Fav && !loadingFavorites" class="d-flex flex-wrap flex-grow-1">
                    <!--                    FAV ROUTINES-->
                    <v-card v-for="routine in favorites" :key="routine.id" class="ma-2"
                            :to="{name: 'routinedetailed', params: {id: routine.id}}">
                      <v-card-title>{{ routine.name }}</v-card-title>
                    </v-card>
                  </div>
                  <div v-if="option.tab === 'Routines' && My && loadingRoutines" class="d-flex flex-wrap flex-grow-1">
                    <!--                    LOADING ROUTINES-->
                    <v-skeleton-loader v-for="loader in routineLoaders" :key="loader.key" class="ma-2" min-width="30%" type="card"/>
                  </div>
                  <div v-if="option.tab === 'Routines' && My && !loadingRoutines" class="d-flex flex-wrap flex-grow-1">
                    <!--                    ROUTINES-->
                    <v-card v-for="routine in routines" :key="routine.id" class="ma-2"
                            :to="{name: 'routinedetailed', params: {id: routine.id}}">
                      <v-card-title>{{ routine.name }}</v-card-title>
                    </v-card>
                  </div>
                  <div v-if="option.tab === 'Exercises' && loadingExercises" class="d-flex flex-wrap flex-grow-1">
                    <!--                    LOADING EXERCISES-->
                    <v-skeleton-loader v-for="loader in exerciseLoaders" :key="loader.key" class="ma-2" min-width="30%" type="card"/>
                  </div>
                  <div v-if="option.tab === 'Exercises' && !loadingExercises">
                    <!--                    EJERCICIOS-->
                    <v-card v-for="exercise in exercises" :key="exercise.id" class="ma-2"
                            :to="{name: 'exercisedetailed', params: {id: exercise.id}}">
                      <v-card-title>{{ exercise.name }}</v-card-title>
                    </v-card>
                  </div>
                </template>
              </RoutineLayout>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import RoutineLayout from "@/components/RoutineLayout";
import {useRoutineStore} from "@/stores/RoutineStore";
import {useExerciseStore} from "@/stores/ExerciseStore";
import {mapActions} from "pinia";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: 'RoutinesView',
  components: {
    RoutineLayout,
  },
  props: {
    my_prop: String
  },
  data() {
    return {
      user: {},
      tab: null,
      titleInTab: null,
      addIcon: null,
      All: true,
      My: false,
      Fav: false,
      routines: [],
      myroutines: [],
      exercises: [],
      favorites: [],
      tabOptions: [
        {tab: 'Routines', content: 'estamos en rou'},
        {tab: 'Exercises', content: 'estamos en exc'}
      ],
      variant: {
        color: '#D1FD7A',
      },
      expand: false,
      all: false,
      loadingExercises: false,
      loadingRoutines: false,
      loadingFavorites: false,
      loadingMyRoutines: false,
      routineLoaders: [
        {key: 1},
        {key: 2},
        {key: 3},
        {key: 4},
        {key: 5},
        {key: 6},
        {key: 7},
        {key: 8},
        {key: 9},
        {key: 10},
      ],
      exerciseLoaders: [
        {key: 1},
        {key: 2},
        {key: 3},
        {key: 4},
        {key: 5},
        {key: 6},
        {key: 7},
        {key: 8},
        {key: 9},
        {key: 10},
      ],
    }
  },
  methods: {
    ...mapActions(useRoutineStore, {
      $getAllRoutines: 'getAll',
      $getFavoriteRoutines: 'getAllFavorites',
    }),
    ...mapActions(useExerciseStore, {
      $getAllExercises: 'getAll',
    }),
    ...mapActions(useUserStore, {
      $getUser: 'getCurrentUser',
    }),
    async getAllRoutines() {
      this.loadingRoutines = true;
      try {
        const res = await this.$getAllRoutines();
        for (const contentKey in res.content) {
          this.routines.push(res.content[contentKey]);
          if (res.content[contentKey].user.id === useUserStore().user.id) {
            this.myroutines.push(res.content[contentKey]);
          }
        }
      } catch (error) {
        console.log(error);
        //TODO error handling
      } finally {
        this.loadingRoutines = false;
      }
    },
    async getAllExercises() {
      this.loadingExercises = true;
      try {
        const res = await this.$getAllExercises();
        for (const contentKey in res.content) {
          this.exercises.push(res.content[contentKey]);
        }
      } catch (error) {
        console.log(error);
        //TODO error handling
      } finally {
        this.loadingExercises = false;
      }
    },
    async getAllFavorites() {
      this.loadingFavorites = true;
      try {
        const res = await this.$getFavoriteRoutines();
        for (const contentKey in res.content) {
          this.favorites.push(res.content[contentKey]);
        }
      } catch (error) {
        console.log(error);
        //TODO error handling
      } finally {
        this.loadingFavorites = false;
      }
    },
    clickAll(tab) {
      this.titleInTab = "All " + tab;
      this.addIcon = false;
      this.All = true;
      this.Fav = false;
      this.My = false;
    },
    clickMy(tab) {
      this.titleInTab = "My " + tab;
      this.addIcon = true;
      this.My = true;
      this.All = false;
      this.Fav = false;
    },
    clickFavorites() {
      this.titleInTab = "Favorites";
      this.addIcon = false;
      this.Fav = true;
      this.My = false;
      this.All = false;
    },
    resetTitleInTab() {
      this.titleInTab = null;
      this.addIcon = false;
    }
  }
  ,
  async created() {
    await this.getAllRoutines();
    await this.getAllExercises();
    await this.getAllFavorites();
  }
}
</script>

<style>

.font {
  /*font-family: Rambla, sans-serif;*/
  font-size: 30px;
  font-family: 'Rambla', sans-serif;
  /*font-weight: bold;*/
  font-weight: lighter;
  /*font-style: italic;*/
  text-transform: none !important;
}

.font2 {
  font-family: 'Rambla', sans-serif;
  /*font-size: 50px;*/
  text-transform: none !important;
}

</style>