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
import {useUserStore} from "@/stores/UserStore";
import {mapState} from "pinia";

export default {
  name: "ProfileView",
  components: {
    CProfileForm: ProfileForm
  },
  watch: {
    isLoggedIn() {
      if (!this.isLoggedIn) {
        this.$router.push({name: 'login'})
      }
    }
  },
  computed: {
    ...mapState(useUserStore, ['isLoggedIn']),
  },
  beforeCreate() {
    if (!useUserStore().isLoggedIn){
      this.$router.push({name: 'login'})
    }
  },
}
</script>

<style>
.profile-font {
  text-align: center;
  font-size: 250%;
  color: #1C1C1C;
  font-weight: bold;
  font-style: italic;
  font-family: Rambla, sans-serif;
  margin-left: 36px;
}
</style>