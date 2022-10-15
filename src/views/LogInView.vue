<template>
  <div>
    <v-container style="padding: 0">
      <!--Title Log In-->
      <v-item>
        <v-col style="padding-top: 0; padding-bottom: 1.5%">
          <h1 class="title-font"> Log In </h1>
        </v-col>
      </v-item>
      <!--Form-->
      <c-log-in-form>

      </c-log-in-form>
    </v-container>
  </div>
</template>

<script>
import LogInForm from "@/components/LogInForm";

export default {
  name: "LogInView",
  components: {
    CLogInForm: LogInForm
  }
}

</script>

<style>
.title-font {
  font-size: 320%;
  color: #F8C256;
  font-weight: bold;
  font-style: italic;
  font-family: Rambla, sans-serif;
  text-align: center;
}


</style>