<template>
  <div>
    <!--Title My Account-->
    <v-item style="padding-top: 3px">
      <v-col>
        <h1 class="profile-font"> My Account </h1>
      </v-col>
    </v-item>
    <c-profile-form> </c-profile-form>
  </div>
</template>

<script>
import ProfileForm from "@/components/ProfileForm";

export default {
  name: "ProfileView",
  components: {
    CProfileForm: ProfileForm
  }
}
</script>

<style>
.profile-font {
  font-size: 200%;
  color: #000000;
  font-weight: bold;
  font-family: Rambla, sans-serif;
  margin-left: 36px;
  margin-top: 50px;
}
</style>