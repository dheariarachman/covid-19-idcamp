<template>
  <div class="container">
    <b-card no-body class="overflow-hidden" style="max-width: 800px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img src="https://picsum.photos/800/800/?image=239" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <nuxt />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

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

