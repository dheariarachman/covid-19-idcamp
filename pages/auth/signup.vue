<template>
  <div>
    <b-card-body title="Signup Form" class="text-center">
      <b-alert :show="dismissCountDown" :variant="variant" dismissible fade>{{ message }}</b-alert>
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
          :show="loadingOverlay"
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
  computed: {
    variant() {
      return this.$store.state.auth.variant
    },
    message() {
      return this.$store.state.auth.message
    },
    loadingOverlay() {
      return this.$store.state.auth.isLoading
    }
  },
  data() {
    return {
      dismissCountDown: 0,
    };
  },
  asyncData() {
    return {
      form: {
        email: "",
        name: "",
        password: ""
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.form.password == "") {
      } else {
        this.$store.dispatch('auth/signup', this.form)
      }
    },
  }
};
</script>

<style>
</style>
