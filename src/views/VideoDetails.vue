<template>
<div class="video-details">
  <h2>{{video.title}}</h2>
  <div>
    <Card
      class="video-card--lrg"
      :video-title="video.title"
      :video-views="video.views"
      :video-description="video.description"
      :video-source="video.link"
      :video-id="video.id"
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
      video: {},
    };
  },
  mounted() {
    fetch(`http://localhost:3000/videos/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((video) => {
        this.video = video;
      });
  },
};
</script>

<style lang="scss" scoped>
.video-details {
  padding: 2em;
}
</style>
