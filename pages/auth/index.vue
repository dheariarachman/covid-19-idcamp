<template>
  <div>
    <b-card-body title="Login Form" class="text-center">
      <b-alert
        :show="showMessage"
        dismissible
        fade
        class="text-left"
        @dismissed="closeAlert"
        :variant="variant"
      >{{ message }}</b-alert>

      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter Email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-input
            v-model="form.password"
            type="password"
            id="text-password"
            aria-describedby="password-help-block"
            placeholder="Enter Password"
          ></b-input>
        </b-form-group>
        <b-overlay
          :show="loadingStatus"
          spinner-variant="primary"
          spinner-type="grow"
          spinner-small
          rounded="sm"
          style="width: 100%;height: 100%"
        >
          <b-button block type="submit" variant="primary">Login</b-button>
        </b-overlay>
      </b-form>
      <hr />
      <span class="float-right small-text">
        Create an Account ?
        <nuxt-link to="/auth/signup">Sign Up</nuxt-link>
      </span>
      <nuxt-link class="float-left small-text" to="/auth/forgot">Forget Password ?</nuxt-link>
    </b-card-body>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  layout: "login",
  data() {
    return {};
  },
  asyncData() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch("fireauth/login", this.form);
    },
    closeAlert() {
      this.$store.dispatch("fireauth/closeAlert");
    }
  },
  computed: {
    loadingStatus() {
      return this.$store.state.auth.isLoading;
    },
    variant() {
      return this.$store.state.auth.variant;
    },
    message() {
      return this.$store.state.auth.message;
    },
    showMessage() {
      return this.$store.state.auth.showMessageAlert;
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.small-text {
  font-size: 12px;
}
</style>

