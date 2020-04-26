<template>
<div id="app">
  <Header></Header>
  <router-view class="view"/>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
  computed: {
    ...mapState([
      'videos',
    ]),
  },
  methods: {
    ...mapActions([
      'getVideos',
    ]),
  },
  created() {
    this.getVideos();
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Work+Sans&display=swap');

*, *::after, *::before { box-sizing: border-box; }

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  font-family: 'Roboto';
  background-color: #f5f5f7;
}

h1, h2, h3 {
  margin: 0;
  font-family: 'Work Sans', sans-serif;
}

h1 { font-size: 2.75rem; }

h2 { font-size: 2.25rem; }

h3 { font-size: 1.5rem; }

input, textarea { font-family: inherit; }

a {
  color: inherit;
  text-decoration: none;
}

.view { flex-grow: 1; }
</style>
