<template>
  <div class="container">
    <b-list-group>

    </b-list-group>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapMutations } from "vuex";

export default {
  layout: "dashboard",
  asyncData() {
    return {
      authenticatedUser: null
    };
  },
  data() {},
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.authenticatedUser = user;
    });
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.done {
  text-decoration: line-through;
}
</style>
