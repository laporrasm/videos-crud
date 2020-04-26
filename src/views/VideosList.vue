<template>
<div class="video-list">
  <h2>All videos</h2>
  <Card
    v-for="video in videos"
    v-bind:key="video.id"
    :video-id="video.id"
    :controls-active="false"
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
import { mapActions, mapState } from 'vuex';
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
      flagModal: false,
      requestedDelete: -1,
    };
  },
  computed: {
    ...mapState([
      'videos',
    ]),
  },
  methods: {
    ...mapActions([
      'getVideos',
      'deleteVideo',
    ]),
    handleModal(userDecision) {
      this.flagModal = false;
      if (userDecision) this.deleteVideo(this.requestedDelete);
    },
    handleDeleteRequest(id) {
      this.flagModal = true;
      this.requestedDelete = id;
    },
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

  h2 { grid-column: 1 / -1; }
}
</style>
