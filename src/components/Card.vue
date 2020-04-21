<template>
<div class="video-card">
  <video
    class="video-card__video"
    :src="videoSource"
    poster="https://i.ytimg.com/vi/9Sjaeql8oBc/maxresdefault.jpg"
    controls
    @ended="updateViews"
  />
  <h3 class="video-card__title">{{videoTitle}}</h3>
  <span class="video-card__views-count">{{videoViews}} views</span>
  <p class="video-card__description">{{videoDescription}}</p>
  <Button class="btn--secondary" @btnClick="toDetailsView">See details</Button>
  <div>
    <span @click="toEditForm"><i class="fas fa-pencil-alt"></i></span>
    <span @click="emitDeleteRequest"><i class="fas fa-times"></i></span>
  </div>
</div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Card',
  components: {
    Button,
  },
  props: {
    videoSource: String,
    videoTitle: String,
    videoViews: Number,
    videoDescription: String,
    videoId: Number,
  },
  methods: {
    toDetailsView() { this.$router.push(`/videos/${this.videoId}`); },
    toEditForm() { this.$router.push(`/edit/${this.videoId}`); },
    emitDeleteRequest() { this.$emit('deleteRequest', this.videoId); },
    updateViews() {
      fetch(`http://localhost:3000/videos/${this.videoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          views: this.videoViews + 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((obj) => {
          this.videoViews = obj.views;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.video-card {
  position: relative;
  padding: .75em;
  background-color: #feffff;

  &__video { width: 100%; }

  &__title, &__description {
    margin: 0;
  }

  &__description {
    color: #3b3b3b;
  }

  &__views-count {
    font-size: .75em;
    color: #b8b8b8;
  }

  Button {
    width: 100%;
    display: block;
    margin-top: .5em;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1em;

    span {
      width: 25px;
      height: 25px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: .25em;
      cursor: pointer;
      background-color: rgb(59, 59, 59);
      color: white;
    }
  }
}

.video-card--lrg {
  max-width: 900px;

  Button, div {
    display: none;
  }
}
</style>
