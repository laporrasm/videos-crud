<template>
<header class="header">
  <h1 class="header__logo">
    <router-link to="/">
      VideoTV
    </router-link>
  </h1>
  <Button v-if="videos.length" class="btn--primary">
    <router-link to="/add">
      <i class="fas fa-plus"></i>
      Add video
    </router-link>
  </Button>
</header>
</template>

<script>
import { mapState } from 'vuex';
import Button from './Button.vue';

export default {
  name: 'Header',
  components: {
    Button,
  },
  computed: {
    ...mapState([
      'videos',
    ]),
  },
};
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #2c2c2c;
  text-align: center;
  color: white;

  &__logo {
    margin: 0;
    width: max-content;
  }
}
</style>
