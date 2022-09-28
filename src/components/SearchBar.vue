<template>
  <v-text-field

      filled
      label="search"
      append-icon="mdi-magnify"
      rounded
      background-color="#C8C8C8"
      dark
      class="font"
  ></v-text-field>
</template>

<script>
export default {
  name: "SearchBar"
}
</script>

<style>
.font {
  font-family: Rambla, sans-serif;
  font-size: 30px;
}
</style>