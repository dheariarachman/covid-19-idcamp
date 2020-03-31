<template>
  <div class="container">
    <b-card>
      Hello
    </b-card>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  layout: 'dashboard',
  asyncData() {
    return {
      authenticatedUser: null
    }
  },
  data() {

  },
  created() {
    firebase.auth().onAuthStateChanged(
      user => {
        this.authenticatedUser = user
        console.log(user);
      }
    )
  }
}
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
</style>
