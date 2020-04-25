<template>
<header class="header">
  <h1 class="header__logo">
    <router-link to="/">
      VidTV
    </router-link>
  </h1>
  <Button class="btn--primary">
    <router-link to="/add">
      <i class="fas fa-plus"></i>
      Add video
    </router-link>
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
  align-items: center;
  padding: 1em;
  background-color: #2D3037;
  text-align: center;
  color: #ABACAF;

  &__logo {
    margin: 0;
    width: max-content;
  }
}
</style>
