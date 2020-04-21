<template>
<header class="header">
  <h1 class="header__logo">
    <router-link to="/">
      <i class="far fa-play-circle"></i>
      VideoTV
    </router-link>
  </h1>
  <Button class="btn--primary">
    <router-link to="/add">Add video</router-link>
  </Button>
</header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: #17252a;
  text-align: center;
  color: #2b7a78;

  &__logo {
    margin: 0;
    width: max-content;
  }

  Button { border-radius: .5em; }
}
</style>
