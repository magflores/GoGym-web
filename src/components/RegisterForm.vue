<template>
  <v-container>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col class="align-center" cols="6">
        <v-form>
          <v-text-field
              label="Name"
              placeholder="Enter your name"
              outlined
              dense
              required
          />
          <v-text-field
              label="Surname"
              placeholder="Enter your surname"
              outlined
              dense
              required
          />
          <v-text-field
              label="Email"
              placeholder="Enter your email"
              outlined
              dense
              required
          />
          <v-text-field
              label="Birthday"
              placeholder="Enter your birthday"
              outlined
              dense
              required
          />
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
          <v-btn
              class="mx-3 white--text "
              dark
              icon
          >
            <v-icon light size="24px" >
              mdi-tick
            </v-icon>
          </v-btn>
          <div class="text-center">
            <v-btn
                width="20%"
                rounded
                color="#F8C256"
                dark
            >
              REGISTER
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

</script>

<style>
.register-font {
  font-size: 300%;
  color: #F8C256;
  font-weight: bold;
  font-style: italic;
  font-family: Rambla, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>