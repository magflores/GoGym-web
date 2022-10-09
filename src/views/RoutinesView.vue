<template class="font">
  <div>
    <v-card
      color="#D1FD7A"
    >
      <v-row
          style="margin-top: 1px;">
        <v-tabs
                v-model="tab"
                background-color="#D1FD7A"
                light
                color="black"
                grow
            >
              <v-tab
                  v-for="option in tabOptions"
                  :key="option.tab"
                  class="font"
                  @click="resetTitleInTab()"
              >
                {{option.tab}}
              </v-tab>
              <v-tabs-items v-model="tab">
                <v-tab-item
                            v-for="option in tabOptions"
                            :key="option.tab">
                  <RoutineLayout>
                    <template v-slot:sidebar>
                      <div
                          class="d-flex
                          flex-column
                          align-center
                          mb-6"
                      >
                        <v-row style="margin-top: 100px">
                          <v-btn
                              @click="clickAll(option.tab)"
                              text
                              depressed
                              left
                              x-large
                              class="font2"
                              onclick="all = true"
                          >
                            All {{ option.tab }}
                          </v-btn>
                        </v-row>
                        <v-row style="margin-top: 50px">
                          <v-btn
                              @click="clickMy(option.tab)"
                              text
                              depressed
                              left
                              x-large
                              onclick="all = false"
                              class="font2"
                          >
                            My {{ option.tab }}
                          </v-btn>
                        </v-row>
                        <v-row style="margin-top: 50px">
                          <v-btn
                              @click="clickFavorites()"
                              text
                              depressed
                              left
                              x-large
                              class="font2"
                          >
                            Favourites
                          </v-btn>
                        </v-row>
                      </div>
                    </template>

                    <template v-slot:content>
<!--                      <h2 v-if="titleInTab === null">
                        All {{ option.tab }}
                      </h2>
                      <h2 v-else>
                        {{ titleInTab }}
                      </h2>-->
<!--                      <SearchBar/>-->
                      <div v-if="All === true">
                      <v-row
                          style="margin-top: 10px;
                                    margin-bottom: 20px;
                                    margin-left: 250px"
                      >
                        <v-col
                            cols="8" style="margin-left: 20px">
                          <SearchBar/>
                        </v-col>
                      </v-row>

                      <router-link
                          v-if="option.tab === 'Routines'"
                          to="/routinedetailed"
                          class="routerLink"
                      >
                                <v-row  style="margin-top: 5px; margin-bottom: 20px; margin-left: 50px">

                                  <v-col>
                                      <v-img :src="require('../assets/routines/routines1.png')" max-width="300px"/>
                                  </v-col>

                                  <v-col>
                                      <v-img :src="require('../assets/routines/routines2.png')" max-width="300px"/>
                                  </v-col>

                                  <v-col>
                                      <v-img :src="require('../assets/routines/routines3.png')" max-width="300px"/>
                                  </v-col>

                                  <v-col>
                                      <v-img :src="require('../assets/routines/routines4.png')" max-width="300px"/>
                                  </v-col>

                                  <v-col>
                                      <v-img :src="require('../assets/routines/routines5.png')" max-width="300px"/>
                                  </v-col>

                                  <v-col>
                                      <v-img :src="require('../assets/routines/routines6.png')" max-width="300px"/>
                                  </v-col>

                                </v-row>
                      </router-link>
                      </div>

                      <div v-if="My === true">

                        <v-row
                            style="margin-top: 10px;
                                    margin-bottom: 20px;
                                    margin-left: 250px"
                        >
                          <v-col
                              cols="8" style="margin-left: 20px">
                            <SearchBar/>
                          </v-col>
                        </v-row>

                        <router-link
                            v-if="option.tab === 'Routines'"
                            to="/routinedetailed"
                            class="routerLink"
                        >
                          <v-row  style="margin-top: 5px; margin-bottom: 250px; margin-left: 50px">

                            <v-col>
                              <v-img :src="require('../assets/routines/routines1.png')" max-width="300px"/>
                            </v-col>

                            <v-col>
                              <v-img :src="require('../assets/routines/routines2.png')" max-width="300px"/>
                            </v-col>

                            <v-col>
                              <v-img :src="require('../assets/routines/routines3.png')" max-width="300px"/>
                            </v-col>

                          </v-row>
                        </router-link>
                      </div>

                      <div v-if="Fav === true">

                        <v-row
                            style="margin-top: 10px;
                                    margin-bottom: 20px;
                                    margin-left: 250px"
                        >
                          <v-col
                              cols="8" style="margin-left: 20px">
                            <SearchBar/>
                          </v-col>
                        </v-row>

                        <router-link
                            v-if="option.tab === 'Routines'"
                            to="/routinedetailed"
                            class="routerLink"
                        >
                          <v-row  style="margin-top: 5px; margin-bottom: 250px; margin-left: 50px">

                            <v-col>
                              <v-img :src="require('../assets/routines/routines1.png')" max-width="300px"/>
                            </v-col>

                            <v-col>
                              <v-img :src="require('../assets/routines/routines2.png')" max-width="300px"/>
                            </v-col>


                          </v-row>
                        </router-link>
                      </div>

                      <router-link to="/newRoutine"
                                   class="routerLink"
                                   v-if="option.tab === 'Routines'"
                      >

                        <v-btn
                            style="margin-right: 30px; margin-bottom: 100px"
                            fab
                            color="#F8C256"
                            absolute
                            right
                            bottom
                            large
                            v-if="addIcon === true"
                        >
                          <v-icon
                              color="black"
                          >
                            mdi-plus
                          </v-icon>
                        </v-btn>
                      </router-link>

                      <router-link
                          v-else
                          to="/newexercise">
                        <v-btn
                            style="margin-right: 5px; margin-bottom: 35px"
                            fab
                            color="#F8C256"
                            absolute
                            right
                            bottom
                            v-if="addIcon === true"
                        >
                          <v-icon
                              color="black"
                          >
                            mdi-plus
                          </v-icon>
                        </v-btn>
                      </router-link>
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
import SearchBar from "@/components/SearchBar";
// import AppHeader from "@/components/Header";
import RoutineLayout from "@/components/RoutineLayout";
// import Footer from "@/components/Footer";
// import detailedLayout from "@/components/detailedLayout";

export default {
  name: 'RoutinesView',
  components: {
    // Footer,
    SearchBar,
    // detailedLayout,
    RoutineLayout,
    // AppHeader
  },
  data: () => ({
    user: {},
    tab: null,
    titleInTab: null,
    addIcon: null,
    All: true,
    My: false,
    Fav: false,

    tabOptions: [
      {tab: 'Routines', content: 'estamos en rou'},
      {tab: 'Exercises', content: 'estamos en exc'}
    ],
    variant: {
      color: '#D1FD7A',
    },
    expand: false,
    all:false,
  }),
  methods: {
    clickAll(tab){
      this.titleInTab = "All " + tab;
      this.addIcon = false;
      this.All = true;
      this.Fav = false;
      this.My = false;
    },
    clickMy(tab){
      this.titleInTab = "My " + tab;
      this.addIcon = true;
      this.My = true;
      this.All = false;
      this.Fav = false;
    },
    clickFavorites(){
      this.titleInTab = "Favorites";
      this.addIcon = false;
      this.Fav = true;
      this.My = false;
      this.All = false;
    },
    resetTitleInTab(){
      this.titleInTab = null;
      this.addIcon = false;
    }
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
  font-size: 50px;
  text-transform: none !important;
}

.routerLink{
  text-decoration: none;
}

</style>