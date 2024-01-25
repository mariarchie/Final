import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './components/index.vue';
import BlogPage from './components/blog.vue';
import BlogDetailsPage from './components/blogDetails.vue';
import NotFoundPage from './components/notFound.vue';

import '../src/assets/css/style.scss';

const routes = [
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogPage },
  { path: '/blog-details', component: BlogDetailsPage },
  { path: '/:catchAll(.*)', component: NotFoundPage }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app');

