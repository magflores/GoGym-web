<template>
  <div>
    <h1 class="title-font text-center">Verify Email</h1>
    <p class="text-center">You will receive an email shortly with a verification code</p>
    <div class="d-flex flex-column align-center justify-center fill-height mt-5">
      <v-sheet width="40%">
        <v-form class="form-font" ref="form" v-model="valid" lazy-validation>
          <v-text-field
              label="Email*"
              placeholder="johndoe@email.com"
              outlined
              dense
              :rules="emailRules"
              color="black"
              padding="10px"
              required
              v-model="email"
              :error="emailError"
              :error-messages="emailErrorMessage"/>
          <v-text-field
              label="Code*"
              placeholder="Enter your verification code"
              outlined
              dense
              :rules="codeRules"
              required
              v-model="code"
              color="black"
              :error="codeError"
              :error-messages="codeErrorMessage"/>
        </v-form>
        <div class="d-flex justify-center">
          <v-btn class="enter-button-font mx-2" width="40%" rounded color="#F8C256" dark @click="verify()"
                 :loading="loading">
            Verify
          </v-btn>
          <v-btn class="resend-button-class mx-2" width="40%" style="color: #C8C8C8" rounded @click="resendVerification" :disabled="disableVerification" :loading="loadingResend">
            <template v-slot:loader>
              Sending...
            </template>
            Resend
          </v-btn>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import {UserApi} from "@/api/user";

export default {
  name: "VerificationView",
  data() {
    return {
      email: '',
      code: '',
      valid: true,
      loading: false,
      emailError: false,
      codeError: false,
      emailErrorMessage: '',
      codeErrorMessage: '',
      disableVerification: false,
      loadingResend: false,
      emailRules: [
        v => !!v || "Enter your email",
        v => /.+@.+/.test(v) || "Invalid email"
      ],
      codeRules: [
        v => !!v || "Enter your verification code"
      ]
    }
  },
  methods: {
    async verify() {
      this.emailError = false;
      this.emailErrorMessage = '';
      this.codeError = false;
      this.codeErrorMessage = '';
      if (!this.$refs.form.validate())
        return;

      this.loading = true;
      try {
        await UserApi.verifyEmail(this.email, this.code);
        this.loading = false;
        await this.$router.push({name: 'login'});
      } catch (error) {
        for (const detailsKey in error.details) {
          console.log(error.details[detailsKey]);
          if (error.details[detailsKey].toLowerCase().includes("email:")) {
            this.emailError = true;
            this.emailErrorMessage = "Invalid email address";
          }
          if (error.details[detailsKey].toLowerCase().includes("code")) {
            this.codeError = true;
            this.codeErrorMessage = "Invalid code";
          }
        }
      } finally {
        this.loading = false;
      }
    },
    async resendVerification() {
      this.emailError = false;
      this.emailErrorMessage = '';
      if (this.email === '') {
        this.emailError = true;
        this.emailErrorMessage = "Enter your email";
        return;
      }
      this.loadingResend = true;
      try {
        await UserApi.resendVerificationEmail(this.email);
        this.disableVerification = true;
        setTimeout(() => {
          this.disableVerification = false;
        }, 60000);
      } catch (error) {
        for (const detailsKey in error.details) {
          if (error.details[detailsKey].toLowerCase().includes("email")) {
            this.emailError = true;
            this.emailErrorMessage = error.details[detailsKey];
          }
        }
      } finally {
        this.loadingResend = false;
      }
    }
  },
  async created() {
    let flag = false;
    if (this.$route.params.email) {
      this.email = this.$route.params.email;
      flag = true;
    } else
      flag = false;
    if (this.$route.params.code) {
      this.code = this.$route.params.code;
    } else
      flag = false;

    if (flag) {
      await this.verify();
    }
  }
}
</script>

<style scoped>

.title-font {
  font-size: 300%;
  color: #F8C256;
  font-weight: bold;
  font-style: italic;
  font-family: Rambla, sans-serif;
  text-align: center;
}

.v-text-field--outlined :deep(fieldset) {
  border-color: black;
  border-width: 3px;
  border-radius: 10px;
  height: 50px;
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

.resend-button-class {
  font-weight: bold;
  width: 100%;
}

/*.Link {*/
/*  text-decoration: #7A7A7A underline;*/
/*}*/

</style>