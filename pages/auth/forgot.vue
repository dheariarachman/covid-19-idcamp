<template>
  <div>
    <b-card-body title="Forgot Password" class="text-center">
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
        <b-button block type="submit" variant="primary">Reset Password</b-button>
      </b-form>
      <hr />
      <span class="text-center small-text">
        Create an Account ?
        <nuxt-link to="/auth/signup">Sign Up</nuxt-link>
      </span>
    </b-card-body>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      form: {
        email: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    }
  }
};
</script>

<style>
</style>
