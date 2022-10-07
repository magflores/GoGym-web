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
                              class="font"
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
                              class="font"
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
                              class="font"
                          >
                            Favourites
                          </v-btn>
                        </v-row>
                      </div>
                    </template>

                    <template v-slot:content>
                      <h2 v-if="titleInTab === null">
                        All {{ option.tab }}
                      </h2>
                      <h2 v-else>
                        {{ titleInTab }}
                      </h2>
                      <SearchBar/>
                      <router-link
                          v-if="option.tab === 'Routines'"
                          to="/newroutine">
                        <v-btn
                            style="margin-right: 5px;
                            margin-bottom: 35px"
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

                      <div
                          v-if="option.tab === 'Routines'"
                      >
                        <div v-if="titleInTab === 'All Routines' ||
                                  titleInTab === null"
                        >
<!--                          <h2>-->
<!--                            Ejercicio 1-->
<!--                          </h2>-->
                          <v-row
                              style="margin-top: 20px; margin-bottom: 20px"
                          >
                            <v-col>
                              <router-link to="/routinedetailed/0">
                                <v-img :src="require('../assets/routines/routines1.png')"
                                       max-width="250px"/>
                              </router-link>
                            </v-col>

                            <v-col>
                              <router-link to="/routinedetailed/2">
                                <v-img :src="require('../assets/routines/routines2.png')"
                                       max-width="250px"/>
                              </router-link>
                            </v-col>

                            <v-col>
                              <router-link to="/routinedetailed/1">
                                <v-img :src="require('../assets/routines/routines3.png')"
                                       max-width="250px"/>
                              </router-link>
                            </v-col>

                            <v-col>
                              <router-link to="/routinedetailed/2">
                                <v-img :src="require('../assets/routines/routines4.png')"
                                       max-width="250px"/>
                              </router-link>
                            </v-col>

                            <v-col>
                              <router-link to="/routinedetailed/1">
                                <v-img :src="require('../assets/routines/routines5.png')"
                                       max-width="250px"/>
                              </router-link>
                            </v-col>

                            <v-col>
                              <router-link to="/routinedetailed">
                                <v-img :src="require('../assets/routines/routines6.png')"
                                       max-width="250px"/>
                              </router-link>
                            </v-col>

                          </v-row>
                        </div>
                        <div v-else-if="titleInTab === 'My Routines'">
                          <h2>
                            Ejercicio 2
                          </h2>
                        </div>
                        <div v-else-if="titleInTab === 'Favorites'">
                          <h2>
                            Ejercicio 3
                          </h2>
                        </div>
                      </div>
                      <div v-else>
                        <div v-if="titleInTab === 'All Exercises' ||
                                  titleInTab === null"
                        >
                          <h2>
                            Ejercicio 4
                          </h2>
                        </div>
                        <div v-else-if="titleInTab === 'My Exercises'">
                          <h2>
                            Ejercicio 5
                          </h2>
                        </div>
                        <div v-else-if="titleInTab === 'Favorites'">
                          <h2>
                            Ejercicio 6
                          </h2>
                        </div>
                      </div>

                    </template>
                  </RoutineLayout>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>

      </v-row>
    </v-card>

<!--    <v-row>-->
<!--      <div disabled="!all">-->
<!--      <v-col>-->
<!--&lt;!&ndash;        COMENTARIO: ESTO ESTA HARDCODEADO, LO CAMBIAMOS CUANDO ESTE LA API&ndash;&gt;-->
<!--        <v-row-->
<!--            style="margin-top: 20px;-->
<!--            margin-bottom: 20px;-->
<!--            margin-left: 350px"-->
<!--        >-->
<!--          <v-col-->
<!--              cols="8" style="margin-left: 100px">-->
<!--          <SearchBar/>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--        <v-row  style="margin-top: 20px;-->
<!--        margin-bottom: 20px; margin-left: 270px">-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines1.png')" max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines2.png')"-->
<!--                     max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines3.png')"-->
<!--                     max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines4.png')"-->
<!--                     max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines5.png')"-->
<!--                     max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines6.png')"-->
<!--                     max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines1.png')"-->
<!--                     max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines2.png')"-->
<!--                     max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--        </v-row>-->
<!--      </v-col>-->
<!--      </div>-->
<!--    </v-row>-->

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
    },
    clickMy(tab){
      this.titleInTab = "My " + tab;
      this.addIcon = true;
    },
    clickFavorites(){
      this.titleInTab = "Favorites";
      this.addIcon = false;
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
  font-family: Rambla, sans-serif;
  font-size: 30px;
}

</style>