<template>
  <d-layout>
    <template v-slot:title>
      Exercise
    </template>
    <template v-slot:sidebar>
      <v-list class="d-flex flex-column align-center"
              height="100%">
        <v-list-item>
          <h2>{{ exercise.name }}</h2>
        </v-list-item>
        <v-list-item>
          <p>{{ exercise.creator }}</p>
        </v-list-item>
        <v-list-item>
          <diff-sign :diff="exercise.difficulty"></diff-sign>
        </v-list-item>
        <v-list-item>
          <v-btn
              class="form-font"
              text
          >
            <v-icon>mdi-arrow-left-top</v-icon>
            <div>Back</div>
          </v-btn>
        </v-list-item>
        <v-list-item class="mt-auto">
          <v-btn
              class="form-font"
              text
              @click="favButton(exercise.favourite)"
          >
            <v-icon>
              {{ !exercise.favourite ? 'mdi-heart-outline' : 'mdi-heart' }}
            </v-icon>
            <div>Favourite</div>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn class="form-font" text>
            <v-icon>mdi-pencil</v-icon>
            <div>Edit</div>
          </v-btn>
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
      <v-card elevation="1"
              class="justify-center rounded-xl my-5">
        <v-card-title class="justify-center card-title">
          Description
        </v-card-title>
        <v-card-text class="card-content">
          <p v-for="line in exercise.description"
             :key="line.number">
            {{ line.line }}
          </p>
        </v-card-text>
      </v-card>
    </template>
  </d-layout>
</template>

<script>
import detailedLayout from "@/components/detailedLayout";
import exerciseStore from "@/stores/exercises";
import difficultySign from "@/components/difficultySign";

export default {
  name: "ExerciseDetailedView",
  components: {
    DLayout: detailedLayout,
    diffSign: difficultySign
  },
  data() {
    return {
      show: false,
      exerciseId: this.$route.params.id,
      favButtonState: null,
    }
  },
  methods: {
    favButton(state){
      this.favButtonState = !state;
    }
  },
  computed: {
    exercise() {
      return exerciseStore.exercises.find(exercise => exercise.id == this.exerciseId);
    },

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