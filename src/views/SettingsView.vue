<template>
  <div>
    <v-app-bar app
               color="white"
               elevation="0"
               clipped-left
               height="80px"
    >
      <div class="d-flex align-center">
        <a href="/" style="margin-right: 20px; margin-left: 10px">
          <v-img :src="require('../assets/GoGym-icon.png')"
                 max-height="70"
                 max-width="70"
          />
        </a>
      </div>
      <h1 style="font-size: 220%">GoGym!</h1>
      <v-spacer/>
      <h2
          style="margin-right: 10px; margin-left: 10px; font-size: 200%"
      >
        Welcome, John Doe
      </h2>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              v-bind="attrs"
              v-on="on"
              color="#F8C256"
              rounded
              width="50"
              height="50"
            >
<!--          <v-card-->
<!--              class="rounded-xl"-->
<!--              color="#F8C256"-->
<!--              max-height="50"-->
<!--              max-width="50"-->
<!--          >-->
            <v-img :src="require('../assets/user-icon.png')"
                   max-width="35"
                   min-width="35"
            />
<!--          </v-card>-->
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>

    </v-app-bar>
    <v-item>

      <v-col>
        <h1 class="settings-font"> My account </h1>
      </v-col>
    </v-item>
    <v-container>
      <v-row>
        <v-sheet width="40%">
          <v-col>
            <v-form class="form-font">
              <v-text-field
                  label="Name"
                  placeholder="Confirm your name"
                  outlined
                  dense
                  :rules="nameRules"
                  required
                  color="black"
              />
              <v-text-field
                  label="Surname"
                  placeholder="Confirm your surname"
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
                  max-width="290px"
                  min-width="auto"
                  offset-y
                  transition="scale-transition"
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
                  />
                </template>
                <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu = false"
                ></v-date-picker>
              </v-menu>

              <div class="text-center">
                <v-row>
                  <v-col>
                    <v-btn class="register-button-font"
                           width="200"
                           rounded
                           color="#C8C8C8"
                           dark
                    >
                      CANCEL
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn class="register-button-font"
                           width="200"
                           rounded
                           color="#F8C256"
                           dark
                    >
                      SAVE
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-form>
          </v-col>
        </v-sheet>
        <v-spacer/>
        <v-sheet width="40%">
          <v-col>
            <v-form class="form-font">
              <v-text-field
                  label="Change Password"
                  placeholder="New password"
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
                       width="200"
                       rounded
                       color="#F8C256"
                       dark
                >
                  CHANGE
                </v-btn>
              </div>
            </v-form>
          </v-col>

        </v-sheet>
        <v-spacer/>
        <v-spacer/>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import AppHeader from "@/components/Header";
// import RegisterForm from "@/components/RegisterForm";
export default {
  name: "SettingsView",
  data: () => ({
    nameRules: [
      v => !!v || "This field is required",
      v => (v && v.length <= 20) || "Limit of 20 caracters"
    ],
    surnameRules: [
      v => !!v || "This field is required",
      v => (v && v.length <= 20) || "Limit of 20 caracters"
    ],
    emailRules: [
      v => !!v || "Enter your email",
      v => /.+@.+/.test(v) || "Invalid email"
    ],
    birthdayRules: [
      v => !!v || "Enter your birthday date",
      v => (v && v.length <= 10) || "Limit of 10 caracters"
    ],
    passwordRules: [
      v => !!v || "Please create a new password",
      v => v.length >= 6 || "Must contain at least 6 characters"
    ],
    confirmPasswordRules: [
      v => !!v ||
          "Passwords don't match",
      v => v.length >= 6 || 'Passwords don\'t match'
    ],
    date: '',
    items: [
      { title: 'My account' },
      { title: 'Home' },
      { title: 'Log out' }
    ],
    menu: false
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

  components: {
    // AppHeader
    // CRegisterForm: RegisterForm
  }
}
</script>

<style scoped>
.settings-font {
  font-size: 300%;
  color: #F8C256;
  font-weight: bold;
  font-style: italic;
  font-family: Rambla, sans-serif;
  text-align: left;
  margin-top: 40px;
  margin-left: 40px;
}

.form-font {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  align-content: center;
}

.v-text-field--outlined :deep(fieldset) {
  border-color: black;
  border-width: 3px;
  border-radius: 10px;
  height: 50px;
}
</style>