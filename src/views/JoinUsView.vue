<template>
  <v-container style="padding: 0">
    <div>
      <!--Title Join Us-->
      <v-item>
        <v-col style="padding-top: 0; padding-bottom: 1.5%">
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
            <router-link to="/login" class="Link to-log-in-font align-center" style="color: #7A7A7A"> Log in here! </router-link>
          </h1>
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
  font-size: 320%;
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