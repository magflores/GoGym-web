<template>
  <v-chip
      class="difficulty-sign"
      color="transparent"
      elevation="0">
    <v-icon :color="color[diff]">mdi-circle</v-icon>
    {{ message[diff] }}
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

/*dissable hover and click effects*/
.difficulty-sign {
  pointer-events: none;
}

</style>