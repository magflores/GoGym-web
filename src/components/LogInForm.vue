<template>
  <v-container>
    <v-row justify="center">
      <v-sheet width="40%">
        <v-form class="form-font" ref="form" v-model="valid" lazy-validation style="height: 47%">
          <v-text-field
              label="Email*"
              placeholder="Enter your email"
              outlined
              dense
              :rules="emailRules"
              color="black"
              padding="10px"
              required
          />
          <v-text-field
              label="Password*"
              placeholder="Enter your password"
              outlined
              dense
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              required
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              color="black"
          />
        </v-form>
        <v-item>
          <v-col style="padding: 0px">
            <router-link to="/register" class="Link forgot-font" style="text-align: center; padding: 0px">
              Forgot my password
            </router-link>
          </v-col>
        </v-item>
        <div class="text-center">
          <v-btn class="enter-button-font"
              style="margin-top: 10px"
              width="40%"
              rounded
              color="#F8C256"
              dark
          >
            ENTER
          </v-btn>
        </div>
        <v-item>
          <v-col style="padding: 0">
            <h1 style="text-align: center;
                margin-top: 13px"
                class="forgot-font">
              You don't have an account yet?
              <router-link to="/register" class="Link forgot-font" style="text-align: center; margin-top: 12px">
                Join us now!
              </router-link>
            </h1>
          </v-col>
        </v-item>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LogInForm',
  data: () => ({
    valid: true,
    show: false,

    emailRules: [
      v => !!v || "Enter your email",
      v => /.+@.+/.test(v) || "Invalid email"
    ],
    passwordRules: [v => !!v || "Enter your password", v => v.length >= 6 || 'Must contain at least 6 characters'],
  }),
}
</script>

<style scoped>

.v-text-field--outlined :deep(fieldset) {
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
.forgot-font {
  font-size: 100%;
  color: #7A7A7A;
  font-family: Rambla, sans-serif;
  margin-top: 0;
  margin-bottom: 20px;
}
.enter-button-font {
  color: #FFFFFF;
  font-weight: bold;
  font-family: Rambla, sans-serif;
  margin-bottom: 5px;
}
.Link{
  text-decoration: #7A7A7A underline;
}
</style>