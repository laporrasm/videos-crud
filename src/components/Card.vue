<template>
<div class="video-card">
  <video
    class="video-card__video"
    :src="videoSource"
    @ended="updateViews"
  />
  <div class="video-card__text">
    <h3 class="video-card__title">{{videoTitle}}</h3>
    <span class="video-card__views-count">{{videoViews}} views</span>
    <p class="video-card__description">{{videoDescription}}</p>
  </div>
  <div class="video-card__cta-container">
    <span @click="toEditForm">
      <i class="fas fa-pencil-alt"></i>
    </span>
    <span @click="emitDeleteRequest">
      <i class="fas fa-trash-alt"></i>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
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
  display: flex;
  flex-direction: column;
  background-color: #feffff;
  border: .085em solid #EDEDF0;
  border-radius: .5em;

  &__video {
    width: 100%;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &__text {
    padding: 1em;
    flex-grow: 1;
  }

  &__description {
    margin: 0;
    color: #3b3b3b;
    text-align: justify;
  }

  &__views-count {
    display: inline-block;
    margin: .5em 0;
    font-size: .75em;
    color: #b8b8b8;
  }

  Button {
    width: 100%;
    display: block;
    margin-top: .5em;
  }

  &__cta-container {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background-color: #f7f7f7;
    border-top: inherit;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #c7c7c7;
      cursor: pointer;

      &:first-child:hover {
        color: #FDC02E;
      }

      &:last-child:hover {
        color: #FF402E;
      }
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
