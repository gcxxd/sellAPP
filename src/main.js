// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import VueResource from 'vue-resource';
import goods from './components/goods/goods.vue';
import rating from './components/rating/rating.vue';
import seller from './components/seller/seller.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */

const routes = [
  {path: '/goods', component: goods},
  {path: '/rating', component: rating},
  {path: '/seller', component: seller}
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
