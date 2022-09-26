<template>
  <v-container>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col  class="align-center" cols="6" >
        <v-form>
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
          <v-btn
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
.v-btn {
  color: #FFFFFF;
  font-weight: bold;
  font-family: Rambla, sans-serif;
}

</style>