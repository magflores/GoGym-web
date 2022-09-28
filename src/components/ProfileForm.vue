<template>
  <v-container>
    <v-row>
      <v-col cols="6">
      <v-card outlined class="container-font">
        <v-card-actions>
          <v-form class="form-font">
          <!--Name, Surname, Email, Birthday-->
            <v-row>
              <v-col>
              <v-text-field
                  label="Name"
                  placeholder="Enter your name"
                  outlined
                  dense
                  required
              />
              </v-col>
            </v-row>
            <v-row >
              <v-col>
              <v-text-field
                  label="Surname"
                  placeholder="Enter your surname"
                  outlined
                  dense
                  required
              />
              </v-col>
            </v-row>

            <v-row>
              <v-col>
              <v-text-field
                  label="Email"
                  placeholder="Enter your email"
                  outlined
                  dense
                  required
              />
              </v-col>
            </v-row>

            <v-row>
              <v-col>
              <v-text-field
                  label="Birthday"
                  placeholder="Enter your birthday"
                  outlined
                  dense
                  required
              />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn class="button-font"
                       width="20%"
                       rounded
                       color="#C8C8C8"
                       dark
                       large
                >
                  Cancel
                </v-btn>
              </v-col>
              <v-col>
                <v-btn class="button-font"
                       width="20%"
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
            <v-form class="form-font">
            <!--Password, Confirm password-->
              <v-text-field
                  label="Password"
                  placeholder="Enter your password"
                  outlined
                  dense
                  required
              />
              <v-text-field
                  label="Confirm password"
                  placeholder="Enter your password again"
                  outlined
                  dense
                  required
              />
            </v-form>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script> </script>

<style>
.container-font {
  font-family: 'Roboto', sans-serif;
  outline-style: solid;
  outline-color: #F8C256;
  width: 50%;
  display: flex;
  justify-content: center;
}
.form-font {
  width: 100%;
}
</style>