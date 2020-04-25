<template>
  <div class="edit-form">
    <h2>Edit video</h2>
    <Form :videoId="objectId" v-on:handleEmit="updateObject"/>
  </div>
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'EditForm',
  components: {
    Form,
  },
  data() {
    return {
      objectId: parseInt(this.$route.params.id, 10),
    };
  },
  methods: {
    updateObject(videoObject) {
      fetch(`http://localhost:3000/videos/${this.objectId}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: videoObject.title,
          link: videoObject.url,
          description: videoObject.description,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
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
