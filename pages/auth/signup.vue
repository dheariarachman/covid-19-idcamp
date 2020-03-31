<template>
  <div>
    <b-card-body title="Signup Form" class="text-center">
      <b-alert :show="dismissCountDown" :variant="variant" dismissible fade>{{ alertMessage }}</b-alert>
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            placeholder="Enter Name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter Email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-input
            type="password"
            id="input-3"
            v-model="form.password"
            aria-describedby="password-help-block"
            placeholder="Enter Password"
          ></b-input>
        </b-form-group>

        <b-overlay
          :show="isCreated"
          spinner-variant="primary"
          spinner-type="grow"
          spinner-small
          rounded="sm"
          style="width: 100%;height: 100%"
        >
          <b-button block type="submit" variant="primary">Sign up</b-button>
        </b-overlay>
      </b-form>
      <hr />
      <span class="float-right small-text">
        Have an Account ?
        <nuxt-link to="/auth/login">Login</nuxt-link>
      </span>
      <nuxt-link class="float-left small-text" to="/auth/forgot">Forget Password ?</nuxt-link>
    </b-card-body>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  layout: "login",
  components: {
  },
  data() {
    return {
      dismissCountDown: 0,
      variant: null,
      alertMessage: null,
      isCreated: false
    };
  },
  asyncData() {
    return {
      form: {
        email: "",
        name: "",
        password: ""
      },
      user: null
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.isCreated = true;
      if (this.form.password == "") {
        this.showAlert("danger", "Password is empty");
        this.isCreated = false;
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(credential => {
            firebase
              .auth()
              .currentUser.sendEmailVerification()
              .then(data => {
                firebase
                  .auth()
                  .currentUser.updateProfile({ displayName: this.form.name });
                this.showAlert("success", "Check email " + this.form.email);
              })
              .catch(err => {
                this.showAlert("danger", err.message);
              });
          })
          .catch(error => {
            this.showAlert("danger", error.message);
          });
      }
    },
    showAlert(variant, message) {
      this.dismissCountDown = 5;
      this.variant = variant;
      this.alertMessage = message;
      setTimeout(() => {
        this.dismissCountDown = 0;
      }, 2000);
      this.isCreated = false;
    }
  }
};
</script>

<style>
</style>
