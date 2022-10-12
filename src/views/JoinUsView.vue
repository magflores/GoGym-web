<template>
  <v-container>
    <div>
      <!--Title Join Us-->
      <v-item>
        <v-col>
          <h1 class="register-font"> Join Us </h1>
        </v-col>
      </v-item>
      <!--Form-->
      <c-register-form>

      </c-register-form>
      <v-item>
        <v-col>
          <h1 class="align-center to-log-in-font">
            Already have an account?
          </h1>
          <router-link to="/login" class="Link">
            <h1 class="align-center to-log-in-font"> Log in
            </h1>
          </router-link>
        </v-col>
      </v-item>
    </div>
  </v-container>
</template>

<script>
import RegisterForm from "@/components/RegisterForm";

export default {
  name: "JoinUsView",
  components: {
    CRegisterForm: RegisterForm
  }
}
</script>

<style>
.register-font {
  font-size: 300%;
  color: #F8C256;
  font-weight: bold;
  font-style: italic;
  font-family: Rambla, sans-serif;
  text-align: center;
}
.to-log-in-font {
  font-size: 100%;
  color: #7A7A7A;
  font-weight: bold;
  font-family: Rambla, sans-serif;
  margin-top: 4px;
  text-align: center;
}

.Link{
  text-decoration: #7A7A7A  underline;
}

</style>