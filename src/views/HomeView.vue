<template>
  <div>
    <v-container fluid class="hero">
      <v-row class="text-center" style="margin-top: 100px"  >
        <v-col>
          <h1>Welcome to GoGym! </h1>
        </v-col>
      </v-row>
<!--      <v-container >-->
<!--        <v-row class="text-center" style="margin-top: 100px"  >-->

<!--          <v-col>-->
<!--            <h2> Find Workout ...</h2>-->
<!--          </v-col>-->

<!--        </v-row>-->
<!--      </v-container>-->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
.hero {
  background-size: cover;
  background: url('../assets/HomeImage.png') center center;
  height: 447px;
}
</style>