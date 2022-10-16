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
          <diff-sign diff="0"></diff-sign>
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
        <v-card elevation="1" class="justify-center rounded-xl my-5" @click="warmup = ! warmup">
          <v-card-title class="justify-center card-title" :class="(warmup) ? '' : 'rounded-xl'">
            Warm Up
          </v-card-title>
          <v-card-text class="card-content" v-show="warmup">hello</v-card-text>
        </v-card>
        <v-card elevation="1" class="justify-center rounded-xl my-5" @click="firstround = ! firstround">
          <v-card-title class="justify-center card-title" :class="(firstround) ? '' : 'rounded-xl'">
            First Round
          </v-card-title>
          <v-card-text class="card-content" v-show="firstround">
            <div class="d-flex justify-space-between">
              <p class="align-self-center">Jump High</p>
              <div class="d-flex flex-column">
                <p>20 Seconds</p>
                <p>30 Repeticiones</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
        <v-card elevation="1" class="justify-center rounded-xl my-5" @click="cooldown = ! cooldown">
          <v-card-title class="justify-center card-title" :class="(cooldown) ? '' : 'rounded-xl'">
            Cool Down
          </v-card-title>
          <v-card-text class="card-content" v-show="cooldown">hello</v-card-text>
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

export default {
  name: "RoutineDetailedView",
  components: {
    DLayout: detailedLayout,
    diffSign: difficultySign
  },
  computed: {
    ...mapState(useRoutineStore, 'routines')
  },
  methods: {
    ...mapActions(useRoutineStore, {
      $modify: 'modify',
      $delete: 'delete',
      $getRoutine: 'get'
    }),
    async modify(){
      await this.$modify();
    },
    async delete(){
      await this.$delete();
    },
    async getRoutine(){
      this.loading = true;
      try {
        const res = await this.$getRoutine({id: this.id});
        this.id = res.id;
        this.name = res.name;
        this.type = res.type;
        this.detail = res.detail;
        this.date = res.date;
        this.metadata = res.metadata;
        this.user.username = res.user.username;
      } catch (error) {
        console.log(error);
        // TODO erro handling
      } finally {
        this.loading = false;
      }
    }
  },
  async created(){
    await this.getRoutine();
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
      loading: false,
      deleteLoading: false,
      user: {},
    }
  }
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