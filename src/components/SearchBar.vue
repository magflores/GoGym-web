<template>
  <v-text-field

      filled
      label="search"
      append-icon="mdi-magnify"
      rounded
      background-color="#C8C8C8"
      dark
      class="searchBar-font"
  ></v-text-field>
</template>

<script>
export default {
  name: "SearchBar"
}
</script>

<style>
.searchBar-font {
  font-family: Rambla, sans-serif;
  font-size: 80px;
  /*font-weight: bold;*/
}
</style>