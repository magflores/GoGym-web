<template>
  <v-container>
    <v-row justify="center">
      <v-sheet width="40%">
        <v-form class="form-font" ref="form" v-model="valid" lazy-validation style="height: 100%">
          <v-text-field
              label="Username*"
              placeholder="Enter your username"
              outlined
              dense
              :rules="usernameRules"
              required
              color="black"
              v-model="user.username"
              :error="usernameError"
              :error-messages="usernameErrorMessage"/>
          <v-text-field
              label="Name*"
              placeholder="Enter your name"
              outlined
              dense
              :rules="nameRules"
              required
              color="black"
              v-model="user.firstName"
          />
          <v-text-field
              label="Surname*"
              placeholder="Enter your surname"
              outlined
              dense
              :rules="surnameRules"
              required
              color="black"
              v-model="user.lastName"
          />
          <v-text-field
              label="Email*"
              placeholder="Enter your email"
              outlined
              dense
              :rules="emailRules"
              required
              color="black"
              v-model="user.email"
              :error="emailError"
              :error-messages="emailErrorMessage"/>
          <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              max-width="290px"
              min-width="auto"
              offset-y
              transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="dateFormatted"
                  label="Birthday*"
                  placeholder="Enter your birthday with format dd/mm/yyyy"
                  persistent-hint
                  outlined
                  dense
                  v-bind="attrs"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                  :rules="birthdayRules"
                  required
              />
            </template>
            <v-date-picker
                v-model="date"
                no-title
                @input="menu = false"
            ></v-date-picker>
          </v-menu>

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
              v-model="user.password"
          />
          <v-text-field
              label="Confirm password*"
              placeholder="Enter your password again"
              outlined
              dense
              :rules="confirmPasswordRules"
              :type="show1 ? 'text' : 'password'"
              required
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
              color="black"
              v-model="confirmPassword"
          />
          <div class="text-center">
            <v-btn class="register-button-font"
                   width="40%"
                   rounded
                   color="#F8C256"
                   dark
                   @click="register()"
                   :loading="loadingButton"
            >
              REGISTER
            </v-btn>
          </div>
        </v-form>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
import {useUserStore} from "@/stores/UserStore";
import {mapActions} from "pinia";

export default {
  name: 'RegisterForm',
  data: () => ({
    valid: true,
    show: false,
    show1: false,
    loadingButton: false,
    usernameRules: [
      v => !!v || 'Username is required',
      v => (v || '').length <= 20 || 'Username must be less than 20 characters',
      v => (v || '').length >= 3 || 'Username must be more than 3 characters',
    ],
    nameRules: [
      v => !!v || "This field is required",
      v => (v || '').length <= 20 || "Limit of 20 caracters"
    ],
    surnameRules: [
      v => !!v || "This field is required",
      v => (v || '').length <= 20 || "Limit of 20 caracters"
    ],
    emailRules: [
      v => !!v || "Enter your email",
      v => /.+@.+/.test(v) || "Invalid email"
    ],
    birthdayRules: [
      v => !!v || "Enter your birthday date",
      v => (v || '').length <= 10 || "Limit of 10 caracters"
    ],
    passwordRules: [
      v => !!v || "Enter your password",
      v => (v || '').length >= 6 || 'Must contain at least 6 characters'
    ],
    confirmPasswordRules: [
      v => !!v || "Passwords don't match",
      v => (v || '').length >= 6 || 'Passwords don\'t match'
    ],
    date: '',
    dateFormatted: '',
    // dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    menu: false,
    confirmPassword: '',
    user: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      birthdate: '',
      password: ''
    },
    usernameError: false,
    emailError: false,
    usernameErrorMessage: '',
    emailErrorMessage: '',
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  methods: {
    ...mapActions(useUserStore, {$register: 'register'}),
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    async register() {
      this.usernameError = false;
      this.emailError = false;
      this.usernameErrorMessage = '';
      this.emailErrorMessage = '';
      if (!this.$refs.form.validate()) {
        return;
      }
      this.loadingButton = true;
      this.user.birthdate = this.dateFormatted
      try {
        await this.$register({
          username: this.user.username,
          password: this.user.password
        }, {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          birthdate: new Date(this.user.birthdate).getTime()
        });
        this.$router.push({name: 'verifyEmail', params: {email: this.user.email}});
      } catch (error) {
        for (const detailsKey in error.details) {
          if (error.details[detailsKey].toLowerCase().includes('username')) {
            this.usernameError = true;
            this.usernameErrorMessage = "Username already exists";
          }
          if (error.details[detailsKey].toLowerCase().includes('email')) {
            this.emailError = true;
            this.emailErrorMessage = "Email already in use";
          }
        }
      } finally {
        this.loadingButton = false;
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

.register-button-font {
  color: #FFFFFF;
  font-weight: bold;
  font-family: Rambla, sans-serif;
  margin-bottom: 5px;
}
</style>