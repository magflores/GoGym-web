<template>
  <v-container>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col  class="align-center" cols="6" >
        <v-form class="form-font">
          <v-text-field
              label="Email"
              placeholder="Enter your email"
              outlined
              dense
              :rules="emailRules"
              required
          />
          <v-text-field
              label="Password"
              placeholder="Enter your password"
              outlined
              dense
              :rules="passwordRules"
              required
          />
        </v-form>
        <div class="text-center">
          <v-btn class="enter-button-font"
              width="20%"
              rounded
              color="#F8C256"
              dark
          >
            ENTER
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LogInForm',
  data: () => ({
    emailRules: [
      v => !!v || "Enter your email",
      v => /.+@.+/.test(v) || "Invalid email"
    ],
    passwordRules: [v => !!v || "Enter your password", v => v.length >= 6 || 'Must contain at least 6 characters'],
  }),
}
</script>

<style>
.form-font {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  align-content: center;
}
.enter-button-font {
  color: #FFFFFF;
  font-weight: bold;
  font-family: Rambla, sans-serif;
}
</style>