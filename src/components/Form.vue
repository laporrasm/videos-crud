<template>
<form class="form" @submit.prevent="emitValues">
  <input
    class="form__input"
    type="text"
    placeholder="Title"
    v-model="videoObject.title"
    required
  />
  <input
    class="form__input"
    type="url"
    placeholder="Video URL"
    v-model="videoObject.link"
    required
  />
  <textarea
    class="form__textarea"
    placeholder="Description"
    v-model="videoObject.description"
    required
  >
  </textarea>
  <Button btnType="submit" btnClass="btn--primary">Confirm</Button>
  <router-link to="/">
    <Button btnType="button" btnClass="btn--secondary">Cancel</Button>
  </router-link>
</form>
</template>

<script>
import { mapGetters } from 'vuex';
import Button from './Button.vue';

export default {
  name: 'Form',
  components: {
    Button,
  },
  data() {
    return {
      videoObject: {
        title: '',
        description: '',
        link: '',
      },
    };
  },
  props: {
    videoId: Number,
  },
  computed: {
    ...mapGetters([
      'getVideoById',
    ]),
  },
  methods: {
    emitValues() {
      this.$emit('emission', this.videoObject);
    },
  },
  created() {
    if (this.videoId !== -1) {
      this.videoObject = this.getVideoById(this.videoId);
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1em;
  margin: 1em auto;

  &__input, &__textarea {
    padding: .75em;
    font-family: 'Work Sans';
    font-size: 1.1rem;
    resize: none;
    background-color: #feffff;
    border: .085em solid #EDEDF0;
    border-radius: .5em;
    grid-column: 1 / -1;
  }

  &__textarea {
    grid-row: 3 / 6;
    resize: none;
  }

  Button { justify-self: end; }
}
</style>
