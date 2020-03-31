<template>
  <div>
    <app-navbar></app-navbar>
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  components: {
    'app-navbar': Navbar,
  }
}
</script>

<style>

</style>
