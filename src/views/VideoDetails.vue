<template>
<div class="video-details">
  <div>
    <Card
      class="video-card--lrg"
      :video-id="videoId"
      :controlsActive="true"
    ></Card>
  </div>
</div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'VideoDetails',
  components: {
    Card,
  },
  data() {
    return {
      videoId: -1,
    };
  },
  created() {
    this.videoId = parseInt(this.$route.params.id, 10);
  },
};
</script>

<style lang="scss" scoped>
.video-details {
  padding: 2em;
}
</style>
