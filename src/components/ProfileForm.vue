<template>
  <v-container>
    <v-row>
      <v-col cols="6">
      <v-card outlined class="container-font">
        <v-card-actions>
          <v-form class="form-profile-font" ref="form" v-model="valid" lazy-validation>
          <!--Name, Surname, Email, Birthday-->
            <v-row>
              <v-col cols="20">
              <v-text-field
                  label="Name"
                  v-model="name"
                  placeholder="Enter your name"
                  outlined
                  dense
                  :rules="nameRules"
                  required
              />
              </v-col>
            </v-row>
            <v-row >
              <v-col>
              <v-text-field
                  label="Surname"
                  v-model="surname"
                  placeholder="Enter your surname"
                  outlined
                  dense
                  :rules="surnameRules"
                  required
              />
              </v-col>
            </v-row>

            <v-row>
              <v-col>
              <v-text-field
                  label="Email"
                  v-model="email"
                  placeholder="Enter your email"
                  outlined
                  dense
                  :rules="emailRules"
                  required
              />
              </v-col>
            </v-row>

            <v-row>
              <v-col>
              <v-text-field
                  label="Birthday"
                  v-model="birthday"
                  placeholder="Enter your birthday"
                  outlined
                  dense
                  :rules="birthdayRules"
                  required
              />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn class="button-font"
                       rounded
                       color="#C8C8C8"
                       dark
                       large
                       @click="clear"
                >
                  Cancel
                </v-btn>
              </v-col>
              <v-col>
                <v-btn class="button-font"
                       rounded
                       color="#F8C256"
                       dark
                       large
                >
                  Save
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-actions>
      </v-card>
      </v-col>
      <v-col cols="6">
        <v-card outlined class="container-font">
          <v-card-actions>
            <v-form class="form-profile-font" ref="form" v-model="valid" lazy-validation>
            <!--Password, Confirm password-->
              <v-text-field
                  label="New Password"
                  placeholder="Enter your password"
                  outlined
                  dense
                  :rules="passwordRules"
                  :type="show ? 'text' : 'password'"
                  required
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"

              />
              <v-text-field
                  label="Confirm password"
                  placeholder="Enter your password again"
                  outlined
                  dense
                  :rules="confirmPasswordRules"
                  :type="show1 ? 'text' : 'password'"
                  required
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
              />
              <v-row>
                <v-col>
                  <v-btn class="button-font"
                         rounded
                         color="#F8C256"
                         dark
                         large

                  >
                    Change
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
export default {
  name: 'ProfileForm',
  data: () => ({
    valid: true,
    show: false,
    show1: false,

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

    name : '',
    surname : '',
    email : '',
    birthday : '',
  }),
  methods: {
    clear () {
      this.name = ''
      this.surname = ''
      this.email = ''
      this.birthday = ''

    },
  },
}
</script>

<style>
.container-font {
  font-family: 'Roboto', sans-serif;
  outline-style: solid;
  outline-color: #F8C256;
  width: 100%;
  justify-content: center;
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