<template>
  <div v-if="this.videos.length <= 0" class="home">
    <router-link to="/add">
      <Button class="btn--primary">
        <i class="fas fa-plus"></i>
        Add video
      </Button>
    </router-link>
  </div>
  <VideosList v-else/>
</template>

<script>
import { mapState } from 'vuex';
import VideosList from './VideosList.vue';
import Button from '../components/Button.vue';

export default {
  name: 'Home',
  components: {
    Button,
    VideosList,
  },
  computed: {
    ...mapState([
      'videos',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  place-content: center;

  Button { font-size: 1.25rem; }
}
</style>
