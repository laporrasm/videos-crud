<template>
<div class="video-list">
  <h2>Your Videos</h2>
  <Card
    v-for="video in videos"
    v-bind:key="video.id"
    :video-title="video.title"
    :video-views="video.views"
    :video-description="video.description"
    :video-source="video.link"
    :video-id="video.id"
    v-on:deleteRequest="handleDeleteRequest"
  />
  <Modal
    v-if="flagModal"
    title="Confirm deletion"
    body="Are you sure you want to delete this video?"
    v-on:handleDecision="handleModal"
  />
</div>
</template>

<script>
import Card from '../components/Card.vue';
import Modal from '../components/Modal.vue';

export default {
  name: 'VideosList',
  components: {
    Card,
    Modal,
  },
  data() {
    return {
      videos: [],
      flagModal: false,
      requestedDelete: -1,
    };
  },
  methods: {
    handleModal(userDecision) {
      this.flagModal = false;
      if (userDecision) this.deleteCard();
    },
    deleteCard() {
      fetch(`http://localhost:3000/videos/${this.requestedDelete}`, {
        method: 'DELETE',
      });
      this.videos = this.videos.filter((element) => element.id !== this.requestedDelete);
    },
    handleDeleteRequest(id) {
      this.flagModal = true;
      this.requestedDelete = id;
    },
  },
  mounted() {
    fetch('http://localhost:3000/videos')
      .then((res) => res.json())
      .then((videos) => this.videos.push(...videos));
  },
};
</script>

<style lang="scss" scoped>
.video-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  place-content: center;
  padding: 2em;

  h2 {
    margin: 0;
    grid-column: 1 / -1;
  }
}
</style>
