<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card style="margin-left: 20%; margin-right: 20%" round outlined class="rounded-xl container-font">
          <v-card-actions>
            <v-form class="form-profile-font" ref="form" v-model="valid" lazy-validation>
              <!--Name, Surname, Email, Birthday-->
              <v-row>
                <v-col cols="20" style="padding-top: 20px" class="box-style">
                  <v-text-field
                      label="Name*"
                      v-model="user.firstName"
                      placeholder="Enter your name"
                      outlined
                      dense
                      :rules="nameRules"
                      color="black"
                      required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="box-style">
                  <v-text-field
                      label="Surname*"
                      v-model="user.lastName"
                      placeholder="Enter your surname"
                      outlined
                      dense
                      :rules="surnameRules"
                      color="black"
                      required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="box-style">
                  <v-text-field
                      label="Email*"
                      v-model="user.email"
                      placeholder="Enter your email"
                      outlined
                      dense
                      :rules="emailRules"
                      color="black"
                      required
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col class="box-style">
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
                          label="Birthday*"
                          placeholder="Enter your birthday with format dd/mm/yyyy"
                          persistent-hint
                          outlined
                          dense
                          v-bind="attrs"
                          @blur="date = parseDate(dateFormatted)"
                          v-on="on"
                          :rules="birthdayRules"
                          color="black"
                          required
                      ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        no-title
                        @input="menu = false"
                    ></v-date-picker>
                  </v-menu>

                </v-col>
              </v-row>
              <v-row>
                <v-col style="padding-bottom: 20px">
                  <v-btn class="button-font"
                         rounded
                         color="#C8C8C8"
                         dark
                         large
                         @click="cancel()"
                         :loading="loadingCancel"
                  >
                    Cancel
                  </v-btn>
                </v-col>
                <v-col style="padding-bottom: 20px">
                  <v-btn class="button-font"
                         rounded
                         color="#F8C256"
                         dark
                         large
                         @click="save()"
                         :loading="loadingSave"
                  >
                    Save
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {useUserStore} from "@/stores/UserStore";
import {mapActions} from "pinia";

export default {
  name: 'ProfileForm',
  data: () => ({
    valid: true,
    show: false,
    show1: false,
    loadingSave: false,
    loadingCancel: false,

    nameRules: [
      v => !!v || "This field is required",
      v => (v || '').length <= 20 || "Superó el límite de 20 caracteres"
    ],
    surnameRules: [
      v => !!v || "This field is required",
      v => (v || '').length <= 20 || "Superó el límite de 20 caracteres"
    ],
    emailRules: [
      v => !!v || "Enter your email",
      v => /.+@.+/.test(v) || "Invalid email"
    ],
    birthdayRules: [
      v => !!v || "Enter your birthday date",
      v => (v || '').length <= 10 || "Superó el límite de 10 caracteres"
    ],
    passwordRules: [
      v => !!v || "Enter your password",
      v => (v || '').length >= 6 || 'Must contain at least 6 characters'
    ],
    confirmPasswordRules: [
      v => !!v || "Passwords don't match",
      v => (v || '').length >= 6 || 'Passwords don\'t match'
    ],

    user: {},
    date: '',
    dateFormatted: '',
    // dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    menu: false,
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    }
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  methods: {
    ...mapActions(useUserStore, {
      $modifyUser: 'modifyUser',
      $getCurrentUser: 'getCurrentUser'
    }),
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
    async cancel() {
      this.loadingCancel = true;
      this.user = await this.$getCurrentUser();
      this.loadingCancel = false;
    },
    save() {
      this.loadingSave = true;
      try {
        this.$modifyUser({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          birthdate: Date.parse(this.date)
        })
      } catch (error) {
        console.log(error)
      }
      this.loadingSave = false;
    }
  },
  async created() {
    let userInfo = await useUserStore().getCurrentUser();
    let date = new Date(userInfo.birthdate);
    this.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    this.dateFormatted = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    this.user = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      birthdate: userInfo.birthdate
    }
    console.log(this.dateFormatted);
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

.container-font {
  font-family: 'Roboto', sans-serif;
  align-content: center;
  padding: 1.5%;
  max-width: 60%;
  /*outline-style: solid;*/
  /*outline-color: #F8C256;*/
  border-width: 5px;
  border-color: #F8C256;
  width: 100%;
  justify-content: center;
}

.box-style {
  padding-bottom: 2px;
}

.form-profile-font {
  width: 200%;
  font-weight: bold;
  align-content: center;
}

.button-font {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
}
</style>