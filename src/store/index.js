import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [],
  },
  getters: {
    getVideoById: (state) => (id) => state.videos.find((video) => video.id === id),
  },
  mutations: {
    setVideos(state, payload) {
      state.videos = payload;
    },
    addVideo(state, payload) {
      state.videos = [...state.videos, payload];
    },
    updateVideo(state, payload) {
      state.videos = state.videos.map((video) => {
        if (video.id === payload.id) return payload;
        return video;
      });
    },
    deleteVideo(state, payload) {
      state.videos = state.videos.filter((video) => video.id !== payload);
    },
  },
  actions: {
    getVideos({ commit }) {
      fetch('http://localhost:3000/videos')
        .then((res) => res.json())
        .then((videos) => commit('setVideos', videos));
    },
    addVideo({ commit }, payload) {
      fetch('http://localhost:3000/videos', {
        method: 'POST',
        body: JSON.stringify({
          title: payload.title,
          link: payload.url,
          description: payload.description,
          views: 0,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((video) => commit('addVideo', video));
    },
    updateVideo({ commit }, payload) {
      fetch(`http://localhost:3000/videos/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: payload.id,
          title: payload.title,
          link: payload.link,
          description: payload.description,
          views: payload.views,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((video) => commit('updateVideo', video));
    },
    deleteVideo({ commit }, payload) {
      fetch(`http://localhost:3000/videos/${payload}`, {
        method: 'DELETE',
      });
      commit('deleteVideo', payload);
    },
    updateViews({ commit }, payload) {
      fetch(`http://localhost:3000/videos/${payload.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          views: payload,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => res.json())
        .then((video) => commit('updateVideo', video));
    },
  },
  modules: {

  },
});
