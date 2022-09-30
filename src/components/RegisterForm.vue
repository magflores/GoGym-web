<template>
  <v-container>
    <v-row justify="center">
      <v-sheet width="40%">
        <v-form class="form-font">
          <v-text-field
              label="Name"
              placeholder="Enter your name"
              outlined
              dense
              :rules="nameRules"
              required
              color="black"
          />
          <v-text-field
              label="Surname"
              placeholder="Enter your surname"
              outlined
              dense
              :rules="surnameRules"
              required
              color="black"
          />
          <v-text-field
              label="Email"
              placeholder="Enter your email"
              outlined
              dense
              :rules="emailRules"
              required
              color="black"
          />
          <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="dateFormatted"
                  label="Birthday"
                  placeholder="Enter your birthday with format dd/mm/yyyy"
                  persistent-hint
                  outlined
                  dense
                  v-bind="attrs"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                  :rules="birthdayRules"
                  required
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                no-title
                @input="menu = false"
            ></v-date-picker>
          </v-menu>

          <v-text-field
              label="Password"
              placeholder="Enter your password"
              outlined
              dense
              :rules="passwordRules"
              required
              color="black"
          />
          <v-text-field
              label="Confirm password"
              placeholder="Enter your password again"
              outlined
              dense
              :rules="confirmPasswordRules"
              required
              color="black"
          />
          <div class="text-center">
            <v-btn class="register-button-font"
                   width="40%"
                   rounded
                   color="#F8C256"
                   dark

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

export default {
  name: 'RegisterForm',
  data: () => ({
    nameRules: [
      v => !!v || "This field is required",
      v => (v && v.length <= 20) || "Superó el límite de 20 caracteres"
    ],
    surnameRules: [
      v => !!v || "This field is required",
      v => (v && v.length <= 20) || "Superó el límite de 20 caracteres"
    ],
    emailRules: [
      v => !!v || "Enter your email",
      v => /.+@.+/.test(v) || "Invalid email"
    ],
    birthdayRules: [
      v => !!v || "Enter your birthday date",
      v => (v && v.length <= 10) || "Superó el límite de 10 caracteres"
    ],
    passwordRules: [v => !!v || "Enter your password", v => v.length >= 6 || 'Must contain at least 6 characters'],
    confirmPasswordRules: [v => !!v || "Passwords don't match", v => v.length >= 6 || 'Passwords don\'t match'],
    date: '',
    // dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    menu: false,

  }),
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    },
  },

  watch: {
    date () {
      this.dateFormatted = this.formatDate(this.date)
    },
  },

  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
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

.register-button-font {
  color: #FFFFFF;
  font-weight: bold;
  font-family: Rambla, sans-serif;
  margin-bottom: 5px;
}
</style>