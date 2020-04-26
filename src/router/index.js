import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/add',
    name: 'AddForm',
    component: () => import('../views/AddForm.vue'),
  },
  {
    path: '/edit/:id',
    name: 'EditForm',
    component: () => import('../views/EditForm.vue'),
  },
  {
    path: '/videos/:id',
    name: 'VideoDetails',
    component: () => import('../views/VideoDetails.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
