<template class="font">
  <div>
    <AppHeader/>

    <v-navigation-drawer
        clipped
        absolute
        permanent
        :style="{backgroundColor: variant.color}"
    >
      <div class="d-flex flex-column align-center mb-6" >
        <v-row style="margin-top: 100px">
          <v-btn
              text
              depressed
              left
              x-large
              class="font"
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
              class="font"
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
              class="font"
          >
            Favourites
          </v-btn>
        </v-row>
      </div>
    </v-navigation-drawer>

    <v-card
      color="#D1FD7A"
    >
      <v-row
          style="margin-top: 1px;margin-left: 257px">

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
              >
                {{option.tab}}
              </v-tab>
              <v-tabs-items v-model="tab">
                <v-tab-item
                            v-for="option in tabOptions"
                            :key="option.tab">
                  <v-row
                      style="margin: 20px;"
                  >
                    <v-col
                    >
                      <SearchBar/>
                    </v-col>
                  </v-row>

                  <v-card
                      flat>
                    <v-card-text class="font">
                      {{option.content}}
                    </v-card-text>
                  </v-card>
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
<!--        <v-row  style="margin-top: 20px; margin-bottom: 20px; margin-left: 270px">-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines1.png')" max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines2.png')" max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines3.png')" max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines4.png')" max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines5.png')" max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines6.png')" max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines1.png')" max-width="250px"/>-->
<!--            </a>-->
<!--          </v-col>-->

<!--          <v-col>-->
<!--            <a href="/routinedetailed">-->
<!--              <v-img :src="require('../assets/routines/routines2.png')" max-width="250px"/>-->
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
import AppHeader from "@/components/Header";
export default {
  name: 'RoutinesView',
  components: {SearchBar, AppHeader},
  data: () => ({
    user: {},
    tab: null,
    items: [
      { tab: 'One', content: 'Tab 1 Content' },
      { tab: 'Two', content: 'Tab 2 Content' },
      { tab: 'Three', content: 'Tab 3 Content' },
      { tab: 'Four', content: 'Tab 4 Content' },
      { tab: 'Five', content: 'Tab 5 Content' },
      { tab: 'Six', content: 'Tab 6 Content' },
      { tab: 'Seven', content: 'Tab 7 Content' },
      { tab: 'Eight', content: 'Tab 8 Content' },
      { tab: 'Nine', content: 'Tab 9 Content' },
      { tab: 'Ten', content: 'Tab 10 Content' },
    ],
    // tab: null,
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
}
</script>

<style>

.font {
font-family: Rambla, sans-serif;
font-size: 30px;
}

</style>