<template>
  <div class="home">
  <Button class="btn--primary">
    <router-link to="/add">Add video</router-link>
  </Button>
  </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
  name: 'Home',
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;

  Button {
    margin-top: 4em;
    font-size: 1.25rem;
  }
}
</style>
