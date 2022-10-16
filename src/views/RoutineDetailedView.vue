<template>
  <d-layout>
    <template v-slot:title>
      Routine
    </template>
    <template v-slot:sidebar>
      <v-list class="d-flex flex-column align-center" height="100%">
        <v-list-item>
          <h2>{{ name }}</h2>
        </v-list-item>
        <v-list-item>
          <!--          <p>@juancito</p>-->
          <p>@{{ user.username }}</p>
        </v-list-item>
        <v-list-item>
          <diff-sign :diff="0"></diff-sign>
        </v-list-item>
        <v-list-item class="mt-auto">
          <v-btn
              class="form-font"
              text
              @click="show = !show"
          >
            <v-icon>{{ !show ? 'mdi-heart-outline' : 'mdi-heart' }}</v-icon>
            <div>Favourite</div>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <router-link to="/editroutine" class="routerLink">
            <v-btn class="form-font" text>
              <v-icon>mdi-pencil</v-icon>
              <div>Edit</div>
            </v-btn>
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-btn class="form-font" text>
            <v-icon>mdi-delete</v-icon>
            <div>Delete</div>
          </v-btn>
        </v-list-item>
      </v-list>
    </template>
    <template v-slot:content>
      <div class="d-flex flex-column">
        <v-card v-for="cycle in cycles" :key="cycle.id" elevation="1" class="justify-center rounded-xl my-5" @click="cycle.show = ! cycle.show">
          <v-card-title class="justify-center card-title" :class="(cycle.show) ? '' : 'rounded-xl'">
            Warm Up
          </v-card-title>
          <v-card-text class="card-content" v-show="cycle.show">hello</v-card-text>
        </v-card>
      </div>
    </template>
  </d-layout>
</template>

<script>
import detailedLayout from "@/components/detailedLayout";
import difficultySign from "@/components/difficultySign";
import {mapActions, mapState} from "pinia";
import {useRoutineStore} from "@/stores/RoutineStore";
import {useCycleStore} from "@/stores/CycleStore";

export default {
  name: "RoutineDetailedView",
  components: {
    DLayout: detailedLayout,
    diffSign: difficultySign
  },
  data() {
    return {
      warmup: false,
      firstround: true,
      cooldown: false,
      show: false,
      id: this.$route.params.id,
      name: '',
      type: '',
      detail: '',
      date: '',
      metadata: '',
      score: 0,
      isPublic: false,
      difficulty: 0,
      user: {
        username: ''
      },
      loading: false,
      deleteLoading: false,
      cycles: [],
    }
  },
  computed: {
    ...mapState(useRoutineStore, 'routines')
  },
  methods: {
    ...mapActions(useRoutineStore, {
      $modifyRoutine: 'modify',
      $deleteRoutine: 'delete',
      $getRoutine: 'get'
    }),
    ...mapActions(useCycleStore, {
      $getCycles: 'getAll'
    }),
    async modify() {
      await this.$modifyRoutine();
    },
    async delete() {
      await this.$deleteRoutine();
    },
    async getRoutine() {
      this.loading = true;
      try {
        const res = await this.$getRoutine({id: this.id});
        this.id = res.id;
        this.name = res.name;
        this.type = res.type;
        this.detail = res.detail;
        this.date = res.date;
        this.metadata = res.metadata;
        this.score = res.score;
        this.isPublic = res.isPublic;
        this.difficulty = res.difficulty;
        this.user.username = res.user.username;
        await this.getCycles();
        this.cycles.sort((a, b) => a.order - b.order);
      } catch (error) {
        console.log(error);
        // TODO error handling
      } finally {
        this.loading = false;
      }
    },
    async getCycles() {
      try {
        const res = await this.$getCycles(this.id);
        for (const contentKey in res.content) {
          this.cycles.push(res.content[contentKey]);
          this.cycles.indexOf(res.content[contentKey]).show = false;
          // TODO get exercises
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    await this.getRoutine();
  },
}
</script>

<style scoped>

.card-title {
  background-color: #D1FD7A;
}

.card-content {
  background-color: #F1FFD2;
}

</style>