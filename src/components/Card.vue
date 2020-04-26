<template>
<div class="video-card">
  <video
    class="video-card__video"
    :src="video.link"
    @ended="addView"
    :controls="controlsActive"
  />
  <div class="video-card__text">
    <h3 class="video-card__title">{{video.title}}</h3>
    <span class="video-card__views-count">{{video.views}} views</span>
    <p class="video-card__description">{{video.description}}</p>
  </div>
  <div class="video-card__cta-container">
    <span @click="toEditForm">
      <i class="fas fa-pencil-alt"></i>
    </span>
    <span @click="toDetailsView">
      <i class="fas fa-play"></i>
    </span>
    <span @click="emitDeleteRequest">
      <i class="fas fa-trash-alt"></i>
    </span>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Card',
  data() {
    return {
      video: {},
    };
  },
  props: {
    videoId: Number,
    controlsActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters([
      'getVideoById',
    ]),
  },
  methods: {
    ...mapActions([
      'updateViews',
    ]),
    addView() {
      this.updateViews(this.video.views + 1);
    },
    toDetailsView() {
      this.$router.push(`/videos/${this.videoId}`);
    },
    toEditForm() {
      this.$router.push(`/edit/${this.videoId}`);
    },
    emitDeleteRequest() {
      this.$emit('deleteRequest', this.videoId);
    },
  },
  created() {
    this.video = this.getVideoById(this.videoId);
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

      &:nth-child(2):hover {
        color: #2a52be;
      }

      &:last-child:hover {
        color: #FF402E;
      }
    }
  }
}

.video-card--lrg {
  max-width: 800px;
  width: 95%;
  margin: 0 auto;

  .video-card__text {
    padding: 2em;
  }

  .video-card__cta-container {
    display: none;
  }
}
</style>
