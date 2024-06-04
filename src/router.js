


import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home/Home.vue';
import Prices from './components/pages/Prices/Prices.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/prices', component: Prices },
   // // { path: '/calculator', component: Calculator },
   // // { path: '/examples', component: Examples },
   // // { path: '/news', component: News },
   // // { path: '/testimonails', component: Testimonails },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


