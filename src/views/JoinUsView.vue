<template>
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
  </div>

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
  margin-top: 40px;
}
</style>