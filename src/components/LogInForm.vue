<template>
  <v-container>
    <v-row justify="center">
      <v-sheet width="40%">
        <v-form class="form-font">
          <v-text-field
              label="Email"
              placeholder="Enter your email"
              outlined
              dense
              :rules="emailRules"
              color="black"
              required
          />
          <v-text-field
              label="Password"
              placeholder="Enter your password"
              outlined
              dense
              :rules="passwordRules"
              color="black"
              required
          />
        </v-form>
        <div class="text-center">
          <v-btn class="enter-button-font"
              width="40%"
              rounded
              color="#F8C256"
              dark
          >
            ENTER
          </v-btn>
        </div>
      </v-sheet>
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

<style scoped>

.v-text-field--outlined >>> fieldset {
  border-color: black;
  border-width: 3px;
  border-radius: 10px;
  height: 50px;
}

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