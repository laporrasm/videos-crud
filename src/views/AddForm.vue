<template>
  <div class="add-form">
    <h2>Add video</h2>
    <Form :video-id="-1" v-on:emission="handleEmit"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Form from '../components/Form.vue';

export default {
  name: 'AddForm',
  components: {
    Form,
  },
  methods: {
    ...mapActions([
      'addVideo',
    ]),
    handleEmit(videoObject) {
      this.addVideo(videoObject);
      this.$router.replace({ name: 'VideosList' });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-form {
  max-width: 900px;
  width: 95%;
  margin: 10em auto;
}
</style>
