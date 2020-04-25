<template>
  <div class="add-form">
    <h2>Add video</h2>
    <Form v-on:handleEmit="addVideo"/>
  </div>
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'AddForm',
  components: {
    Form,
  },
  methods: {
    addVideo(videoObject) {
      fetch('http://localhost:3000/videos', {
        method: 'POST',
        body: JSON.stringify({
          title: videoObject.title,
          link: videoObject.url,
          description: videoObject.description,
          views: 0,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then(() => this.$router.push('/videos'));
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
