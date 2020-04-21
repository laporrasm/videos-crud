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
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

#app {
  min-height: 100vh;
}

body {
  margin: 0;
  font-family: 'Nunito';
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-family: 'Oswald', sans-serif;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 1.5rem;
}

*, *::after, *::before { box-sizing: border-box; }

input, textarea {
  outline: none;
  font-family: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
