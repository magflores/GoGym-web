<template>
  <v-chip color="transparent" ripple="false">
    <v-icon :color="color[diff]">mdi-circle</v-icon> {{ message[diff] }}
  </v-chip>

</template>

<script>
export default {
  name: "difficultySign",
  props: {
    diff: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      color: ['green', 'orange', 'red'],
      message: ['Easy', 'Intermediate', 'Hard']
    }
  }
}
</script>

<style scoped>

</style>