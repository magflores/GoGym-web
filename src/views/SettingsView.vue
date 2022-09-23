<template>
  <div>
    <h1>eaaa</h1>
    <v-app-bar app
               style="padding-top: 5px"
               color="white"
               elevation="0"
    >
      <div class="d-flex align-center">
        <a href="/">
          <v-img :src="require('../assets/GoGym-icon.png')"
                 max-height="120"
                 max-width="120"
          />
        </a>
      </div>
      <h2>GoGym!</h2>
      <v-spacer/>
      <h2
          style="margin-right: 10px; margin-left: 10px"
      >
        Welcome, John Doe
      </h2>
      <v-card
        class="rounded-xl" color="#F8C256"
        min-height="50"
        min-width="50"
      >
        <v-img :src="require('@/assets/user-icon.png')"
               max-height="40"
               max-width="40"
        />
      </v-card>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "JoinUsView",
  components: {

  }
}
</script>

<style scoped>

</style>