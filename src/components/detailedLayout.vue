<template>
  <div>
    <v-app-bar class="banner">
      <v-spacer/>
      <h2 class="text-center">
        <slot name="title"></slot>
      </h2>
      <v-spacer/>
    </v-app-bar>
    <v-row justify="center">
      <v-col cols="2" class="side-bar">
        <slot name="sidebar"></slot>
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
  name: "SidebarLayout"
}
</script>

<style scoped>

.banner {
  border-style: solid;
  border-width: 0 0 10px 0;
  border-color: #C8C8C8;
  background-color: white !important;
}

</style>