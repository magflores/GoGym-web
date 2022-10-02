<template>
  <d-layout>
    <template v-slot:title>
      Exercise
    </template>
    <template v-slot:sidebar>
      <v-list class="d-flex flex-column align-center" height="100%">
        <v-list-item>
          <h2>Jump High</h2>
        </v-list-item>
        <v-list-item>
          <p>@juancito</p>
        </v-list-item>
        <v-list-item>
          <p>Easy</p>
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
      <v-card elevation="1" class="justify-center rounded-xl my-5">
        <v-card-title class="justify-center card-title">
          Description
        </v-card-title>
        <v-card-text class="card-content">
          <p>Element: 1 stool</p>
          <p>Description: Keeping your back straight, get on the stool with one leg and elevate your free knee as you
            raise your opposite arm. Repeat with the other leg.</p>
          <p>Link: https://www.youtube.com/watch?v=apT21x9DEIs</p>
        </v-card-text>
      </v-card>
    </template>
  </d-layout>
</template>

<script>
import detailedLayout from "@/components/detailedLayout";

export default {
  name: "ExerciseDetailedView",
  components: {
    DLayout: detailedLayout
  },
  data() {
    return {
      show: false,

    }
  }
}
</script>

<style scoped>

.v-list-item {
  flex: 0
}

.card-title {
  background-color: #D1FD7A;
}

.card-content {
  background-color: #F1FFD2;
}

</style>