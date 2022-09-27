<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <v-col cols="2" class="col-1-font">
          <v-form class="form-font">
          <!--Name, Surname, Email, Birthday-->
            <v-text-field
                label="Name"
                placeholder="Enter your name"
                outlined
                dense
                required
            />
            <v-text-field
                label="Surname"
                placeholder="Enter your surname"
                outlined
                dense
                required
            />
            <v-text-field
                label="Email"
                placeholder="Enter your email"
                outlined
                dense
                required
            />
            <v-text-field
                label="Birthday"
                placeholder="Enter your birthday"
                outlined
                dense
                required
            />
          </v-form>
        </v-col>

      </v-col>
    </v-row>
  </v-container>
</template>

<script> </script>

<style>
.col-1-font {
  font-family: 'Roboto', sans-serif;
}
</style>