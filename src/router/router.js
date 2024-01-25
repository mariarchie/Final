import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/index.vue';
import BlogPage from './components/blog.vue';
import BlogDetailsPage from './components/blogDetails.vue';
import NotFoundPage from './components/notFound.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogPage },
  { path: '/blog-details', component: BlogDetailsPage },
  { path: '/:catchAll(.*)', component: NotFoundPage }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
