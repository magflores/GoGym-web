<template>
  <v-container>
    <v-row justify="center">
      <v-sheet width="40%">
        <v-form class="form-font" ref="form" v-model="valid" lazy-validation style="height: 47%">
          <v-text-field
              label="Username*"
              placeholder="Enter your username*"
              outlined
              dense
              :rules="usernameRules"
              color="black"
              padding="10px"
              required
              v-model="credentials.username"
              :error="usernameError"
              :error-messages="usernameErrorMessage"/>
          <v-text-field
              label="Password*"
              placeholder="Enter your password"
              outlined
              dense
              :rules="passwordRules"
              :type="show ? 'text' : 'password'"
              required
              v-model="credentials.password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              color="black"
              :error="passwordError"
              :error-messages="passwordErrorMessage"/>
        </v-form>
        <div class="text-center">
          <v-btn class="enter-button-font" width="40%" rounded color="#F8C256" dark @click="login()" :loading="loading" style="margin-top: 10px">
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
import {useUserStore} from "@/stores/UserStore";
import {useRouterStore} from "@/stores/RouterStore";
import {mapActions} from "pinia";

export default {
  name: 'LogInForm',
  data: () => ({
    valid: true,
    show: false,
    loading: false,
    usernameError: false,
    passwordError: false,
    usernameErrorMessage: '',
    passwordErrorMessage: '',
    usernameRules: [
      v => !!v || "Enter your username"
    ],
    passwordRules: [v => !!v || "Enter your password", v => v.length >= 6 || 'Must contain at least 6 characters'],
    credentials: {
      username: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(useUserStore, {
      $login: 'login',
      $getCurrentUser: 'getCurrentUser'
    }),
    ...mapActions(useRouterStore, ['getFinalRoute']),
    async login() {
      this.usernameError = false;
      this.passwordError = false;
      this.usernameErrorMessage = '';
      this.passwordErrorMessage = '';
      if (!this.$refs.form.validate())
        return;
      this.loading = true;
      try {
        await this.$login(this.credentials);
        await this.$getCurrentUser();
        this.loading = false;
        this.$router.go(-1);
      } catch (error) {
        for (const detailsKey in error.details) {
          if (error.details[detailsKey].toLowerCase().includes('username')) {
            this.usernameError = true;
            this.usernameErrorMessage = error.details[detailsKey];
          }
          if (error.details[detailsKey].toLowerCase().includes('password')) {
            this.passwordError = true;
            this.passwordErrorMessage = error.details[detailsKey];
          }
        }
      } finally {
        this.loading = false;
      }
    }
  }
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

.Link {
  text-decoration: #7A7A7A underline;
}
</style>