<template>
  <div>
    <v-row justify="center">
      <v-col cols="2"
             style="background: #D1FD7A">
        <slot name="sidebar" class="font2"></slot>
      </v-col>
      <v-col>
        <v-container fluid class="px-10">
          <slot name="content"></slot>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "RoutineLayout",
}
</script>

<style scoped>

.font2 {
  font-size: 23px;

}

</style>