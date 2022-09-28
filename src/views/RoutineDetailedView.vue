<template>
  <div>

    <v-navigation-drawer  clipped absolute permanent>
      <v-row  style="margin-left: 50px;margin-top: 100px">

      <div class="d-flex flex-column align-center mb-6">
        <h3>Abs routine</h3>
        <p>@juancito</p>
        <p>Easy</p>

        <v-btn text>
          <v-icon>mdi-heart</v-icon>
          <div>Favourite</div>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-pencil</v-icon>
          <div>Edit</div>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-delete</v-icon>
          <div>Delete</div>
        </v-btn>
      </div>
      </v-row>
    </v-navigation-drawer>



      <v-row  style="margin-top: 20px;margin-left: 250px">
        <v-container fluid class="px-10">
      <div class="d-flex flex-column">
        <v-card elevation="1" class="justify-center rounded-xl my-5" @click="warmup = ! warmup">
          <v-card-title class="justify-center routine-title" :class="(warmup) ? 'rounded-t-xl' : 'rounded-xl'">Warm Up</v-card-title>
          <v-card-text class="routine-content" v-show="warmup">hello</v-card-text>
        </v-card>
        <v-card elevation="1" class="justify-center rounded-xl my-5" @click="firstround = ! firstround">
          <v-card-title class="justify-center routine-title" :class="(firstround) ? 'rounded-t-xl' : 'rounded-xl'">First Round</v-card-title>
          <v-card-text class="routine-content" v-show="firstround">
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
          <v-card-title class="justify-center routine-title" :class="(cooldown) ? 'rounded-t-xl' : 'rounded-xl'">Cool Down</v-card-title>
          <v-card-text class="routine-content" v-show="cooldown">hello</v-card-text>
        </v-card>
      </div>
        </v-container>
      </v-row>



  </div>
</template>

<script>

export default {
  name: "RoutineDetailedView",
  components: {},
  data() {
    return {
      warmup: false,
      firstround: true,
      cooldown: false
    }
  }
}
</script>

<style scoped>

.routine-title {
  background-color: #D1FD7A;
}

.routine-content {
  background-color: #F1FFD2;
}

</style>