<template>
<div id="app">
  <Header></Header>
  <Container>
    <router-view/>
  </Container>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Container from './components/Container.vue';

export default {
  components: {
    Header,
    Container,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Work+Sans&display=swap');

*, *::after, *::before { box-sizing: border-box; }

#app { min-height: 100vh; }

body {
  margin: 0;
  font-family: 'Roboto';
  background-color: #f5f5f7;
}

h1, h2, h3 {
  margin: 0;
  font-family: 'Work Sans', sans-serif;
}

h1 { font-size: 3rem; }

h2 { font-size: 2.25rem; }

h3 { font-size: 1.5rem; }

input, textarea { font-family: inherit; }

a {
  color: inherit;
  text-decoration: none;
}
</style>
