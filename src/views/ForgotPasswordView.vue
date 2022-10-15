<template>
  <div>
    <v-container class="align-center">
      <v-card round outlined class="rounded-xl container-font">
        <v-row class="align-center" style="margin-left: 40%; margin-right: 40%; padding: 0">
          <v-col>
            <v-img :src="require('../assets/Recover.png')"/>
          </v-col>
        </v-row>
        <v-row style="margin-top: 0">
          <v-col style="padding: 0">
            <h1 class="forget-font">Have trouble logging in?</h1>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-sheet width="40%">
            <h2 style="text-align: center"> Enter your email, phone, or username and we'll send <br /> you a link to get back into your account.</h2>
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
            </v-form>
          </v-sheet>
        </v-row>
        <v-row justify="center">
          <v-btn class="enter-button-font"
                 width="20%"
                 style="margin-bottom: 2%"
                 rounded
                 color="#F8C256"
                 dark
          >
            SEND
          </v-btn>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
h1 {
  font-size: 270%;
  color: #1c1c1c;
  font-weight: bold;
  font-style: italic;
  font-family: Rambla, sans-serif;
  text-align: center;
}

.v-text-field--outlined::v-deep fieldset {
  border-color: black;
  border-width: 3px;
  border-radius: 10px;
  height: 50px;
}

h2 {
  font-size: 120%;
  color: #7A7A7A;
  font-weight: normal;
  font-family: Rambla, sans-serif;
  margin-top: 8px;
  margin-bottom: 20px;
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
  margin-bottom: 5px;
}

.container-font {
  font-family: 'Roboto', sans-serif;
  /*outline-style: solid;*/
  /*outline-color: #F8C256;*/
  border-width: 5px;
  border-color: #F8C256;
  width: 100%;
  justify-content: center;
  padding: 15px;
}
</style>