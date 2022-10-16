<template>
  <d-layout>
    <template v-slot:title>
      Exercise
    </template>
    <template v-slot:sidebar>
      <v-list class="d-flex flex-column align-center">
        <v-list-item>
          <h2>{{ name }}</h2>
        </v-list-item>
<!--        <v-list-item>-->
<!--          <p>{{ creator }}</p>-->
<!--        </v-list-item>-->
<!--        <v-list-item>-->
<!--          <diff-sign :diff="exercise.difficulty"></diff-sign>-->
<!--        </v-list-item>-->
      </v-list>
      <div class="fill-height"></div>
      <v-list class="d-flex flex-column align-center">
        <v-list-item>
            <v-btn class="form-font" text @click="editExercise()">
              <v-icon>mdi-pencil</v-icon>
              <div>Edit</div>
            </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn class="form-font" text :loading="deleteLoading" @click="deleteExercise()">
            <v-icon>mdi-delete</v-icon>
            <div>Delete</div>
          </v-btn>
        </v-list-item>
      </v-list>
    </template>
    <template v-slot:content>
      <v-card elevation="1" class="justify-center rounded-xl my-5">
        <v-card-title class="justify-center card-title">
          Description
        </v-card-title>
        <v-card-text class="card-content">
          {{ detail }}
        </v-card-text>
      </v-card>
    </template>
  </d-layout>
</template>

<script>
import detailedLayout from "@/components/detailedLayout";
// import difficultySign from "@/components/difficultySign";
import {useExerciseStore} from "@/stores/ExerciseStore";
import {mapActions} from "pinia";

export default {
  name: "ExerciseDetailedView",
  components: {
    DLayout: detailedLayout,
    // diffSign: difficultySign
  },
  data() {
    return {
      show: false,
      id: this.$route.params.id,
      name: '',
      type: '',
      detail: '',
      date: '',
      metadata: '',
      loading: false,
      deleteLoading: false,
    }
  },
  methods: {
    ...mapActions(useExerciseStore, {
      $getExercise: 'get',
      $deleteExercise: 'delete',
    }),
    async getExercise() {
      this.loading = true;
      try {
        const res = await this.$getExercise({id: this.id});
        this.id = res.id;
        this.name = res.name;
        this.type = res.type;
        this.detail = res.detail;
        this.date = res.date;
        this.metadata = res.metadata;
      } catch (error) {
        console.log(error);
        // TODO error handling
      } finally {
        this.loading = false;
      }
    },
    async deleteExercise() {
      this.deleteLoading = true;
      try {
        await this.$deleteExercise({id: this.id});
        this.$router.go(-1);
      } catch (error) {
        console.log(error);
        // TODO error handling
      } finally {
        this.deleteLoading = false;
      }
    },
    editExercise(){
      this.$router.push({name: 'editexercise', params: {id: this.id}})
    }
  },
  async created() {
    await this.getExercise();
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