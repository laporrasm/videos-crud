<template>
  <div class="edit-form">
    <h2>Edit video</h2>
    <Form :videoId="videoId" v-on:emission="handleEmit"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Form from '../components/Form.vue';

export default {
  name: 'EditForm',
  components: {
    Form,
  },
  data() {
    return {
      videoId: parseInt(this.$route.params.id, 10),
    };
  },
  methods: {
    ...mapActions([
      'updateVideo',
    ]),
    handleEmit(videoObject) {
      this.updateVideo(videoObject);
      this.$router.replace('/videos');
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-form {
  max-width: 900px;
  width: 95%;
  margin: 10em auto;
}
</style>
