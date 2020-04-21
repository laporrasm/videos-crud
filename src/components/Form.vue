<template>
<form class="form" @submit.prevent="emitValues">
  <input class="form__input" type="text" placeholder="Title" v-model="title" required/>
  <input class="form__input" type="url" placeholder="Video URL" v-model="url" required/>
  <textarea class="form__textarea" placeholder="Description" v-model="description" required>
  </textarea>
  <Button btnType="submit" btnClass="btn--primary">Confirm</Button>
  <router-link to="/">
    <Button btnType="button" btnClass="btn--secondary">Cancel</Button>
  </router-link>
</form>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Form',
  components: {
    Button,
  },
  data() {
    return {
      title: '',
      url: '',
      description: '',
    };
  },
  props: {
    // Used to fetch the original values of a video we want to edit
    videoId: Number,
  },
  methods: {
    emitValues() {
      this.$emit('handleEmit', {
        title: this.title,
        url: this.url,
        description: this.description,
      });
    },
  },
  mounted() {
    if (!Number.isNaN(this.videoId)) {
      fetch(`http://localhost:3000/videos/${this.videoId}`)
        .then((res) => res.json())
        .then((video) => {
          this.title = video.title;
          this.url = video.link;
          this.description = video.description;
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  &__input, &__textarea {
    padding: .5em .75em;
    font-family: inherit;
    font-size: 1.1rem;
    resize: none;
    border: .1em solid #f0f0f0;
    grid-column: 1 / -1;

    &:focus { border-color: #00C1AA; }
  }

  Button { justify-self: end; }
}
</style>
