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